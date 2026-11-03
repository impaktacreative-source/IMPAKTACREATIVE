// Meta Conversions API (server side). The browser posts here right after the
// Pixel fires the same event with the same event_id, so Meta deduplicates.
// Needs the Netlify environment variable META_CAPI_TOKEN (Events Manager >
// Settings > Conversions API > Generate access token). Optional:
// META_TEST_EVENT_CODE to see events in the "Test events" tab.
import { createHash } from "node:crypto";

const PIXEL_ID = "1153908067075200";
const GRAPH_VERSION = "v23.0";
const ALLOWED_EVENTS = new Set(["Lead", "PageView", "Contact"]);

const sha256 = (value) => createHash("sha256").update(value).digest("hex");

function normEmail(v) {
  const s = String(v || "").trim().toLowerCase();
  return s.includes("@") ? s : "";
}
function normPhone(v) {
  let d = String(v || "").replace(/\D/g, "");
  if (d.startsWith("00")) d = d.slice(2);
  if (d.length === 9 && /^[29]/.test(d)) d = "351" + d; // Portuguese number without country code
  return d.length >= 8 ? d : "";
}
function names(v) {
  const parts = String(v || "").trim().toLowerCase().split(/\s+/).filter(Boolean);
  return { fn: parts[0] || "", ln: parts.length > 1 ? parts[parts.length - 1] : "" };
}

export default async (request) => {
  if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const token = process.env.META_CAPI_TOKEN;
  if (!token) return Response.json({ ok: false, error: "META_CAPI_TOKEN missing" }, { status: 500 });

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }
  const eventName = String(body.event_name || "");
  if (!ALLOWED_EVENTS.has(eventName) || !body.event_id) return new Response("Bad request", { status: 400 });

  const email = normEmail(body.email);
  const phone = normPhone(body.phone);
  const { fn, ln } = names(body.name);
  const user_data = {
    client_ip_address:
      request.headers.get("x-nf-client-connection-ip") ||
      (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
      undefined,
    client_user_agent: request.headers.get("user-agent") || undefined,
    fbp: body.fbp || undefined,
    fbc: body.fbc || undefined,
    em: email ? [sha256(email)] : undefined,
    ph: phone ? [sha256(phone)] : undefined,
    fn: fn ? [sha256(fn)] : undefined,
    ln: ln ? [sha256(ln)] : undefined,
    country: [sha256("pt")],
  };

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: String(body.event_id).slice(0, 100),
        action_source: "website",
        event_source_url: String(body.event_source_url || "").slice(0, 500) || undefined,
        user_data,
      },
    ],
  };
  if (process.env.META_TEST_EVENT_CODE) payload.test_event_code = process.env.META_TEST_EVENT_CODE;

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`,
    { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) },
  );
  const result = await res.json().catch(() => ({}));
  if (!res.ok) console.error("Meta CAPI error", res.status, JSON.stringify(result));
  return Response.json({ ok: res.ok, events_received: result.events_received ?? 0 }, { status: res.ok ? 200 : 502 });
};
