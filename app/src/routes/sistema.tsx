import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties, type FormEvent } from "react";

// Área interna /sistema: login com Supabase Auth (email + palavra-passe) e
// lista dos pedidos que chegam pelo formulário do site (tabela public.leads).
// Só a conta impaktacreative@gmail.com consegue ler os pedidos (regra RLS
// "admin impakta le pedidos"); qualquer outra conta vê a lista vazia.

const SUPABASE_URL = "https://fxlgmndznasygpncgkkr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_5YUpgFoOJXoyoE0IH-5RBA_1uZOEWLb";
const SISTEMA_IMPAKTA_URL = "https://claude.ai/artifact/W7i8wqSUskVVJvg31eo9Fk";
const SESSION_KEY = "impakta-sistema-sessao";

type Session = { access_token: string; refresh_token: string; expires_at: number; email: string };
type Lead = {
  id: number;
  criado_em: string;
  nome: string;
  empresa: string | null;
  email: string | null;
  telefone: string | null;
  servico: string | null;
  orcamento: string | null;
  prazo: string | null;
  urgencia: string | null;
  mensagem: string | null;
  idioma: string | null;
  pagina: string | null;
};

export const Route = createFileRoute("/sistema")({
  head: () => ({
    meta: [{ title: "Sistema · IMPAKTA" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: SistemaPage,
});

function loadSession(): Session | null {
  try {
    const raw = window.sessionStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    return null;
  }
}

function saveSession(session: Session | null) {
  try {
    if (session) window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else window.sessionStorage.removeItem(SESSION_KEY);
  } catch {
    /* sessionStorage indisponível: a sessão fica só em memória */
  }
}

async function authRequest(grantType: "password" | "refresh_token", body: object): Promise<Session> {
  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=${grantType}`, {
    method: "POST",
    headers: { apikey: SUPABASE_PUBLISHABLE_KEY, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  if (!response.ok) throw new Error(json.error_description || json.msg || "Erro de login");
  return {
    access_token: json.access_token,
    refresh_token: json.refresh_token,
    expires_at: Date.now() + json.expires_in * 1000,
    email: json.user?.email ?? "",
  };
}

function SistemaPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = loadSession();
    if (!stored) return setReady(true);
    if (stored.expires_at > Date.now() + 60_000) {
      setSession(stored);
      return setReady(true);
    }
    authRequest("refresh_token", { refresh_token: stored.refresh_token })
      .then((fresh) => {
        saveSession(fresh);
        setSession(fresh);
      })
      .catch(() => saveSession(null))
      .finally(() => setReady(true));
  }, []);

  function logout() {
    saveSession(null);
    setSession(null);
  }

  return (
    <main style={styles.page}>
      <div style={styles.wrap}>
        <p style={styles.brand}>IMPAKTA · Sistema interno</p>
        {!ready ? null : session ? (
          <Painel session={session} onLogout={logout} />
        ) : (
          <Login
            onLogin={(s) => {
              saveSession(s);
              setSession(s);
            }}
          />
        )}
      </div>
    </main>
  );
}

function Login({ onLogin }: { onLogin: (s: Session) => void }) {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBusy(true);
    setError("");
    try {
      onLogin(
        await authRequest("password", {
          email: String(data.get("email") || "").trim(),
          password: String(data.get("password") || ""),
        }),
      );
    } catch {
      setError("Email ou palavra-passe incorretos.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.card}>
      <h1 style={styles.title}>Entrar</h1>
      <label style={styles.label}>
        Email
        <input autoComplete="username" name="email" required style={styles.input} type="email" />
      </label>
      <label style={styles.label}>
        Palavra-passe
        <input autoComplete="current-password" name="password" required style={styles.input} type="password" />
      </label>
      {error ? <p style={styles.error}>{error}</p> : null}
      <button disabled={busy} style={styles.button} type="submit">
        {busy ? "A entrar…" : "Entrar"}
      </button>
    </form>
  );
}

function Painel({ session, onLogout }: { session: Session; onLogout: () => void }) {
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [error, setError] = useState("");

  async function load() {
    setError("");
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/leads?select=*&order=criado_em.desc&limit=200`, {
        headers: { apikey: SUPABASE_PUBLISHABLE_KEY, Authorization: `Bearer ${session.access_token}` },
      });
      if (response.status === 401) return onLogout();
      if (!response.ok) throw new Error(String(response.status));
      setLeads((await response.json()) as Lead[]);
    } catch {
      setError("Não foi possível carregar os pedidos.");
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.access_token]);

  return (
    <section>
      <div style={styles.bar}>
        <h1 style={styles.title}>Pedidos do site</h1>
        <div style={styles.actions}>
          <a href={SISTEMA_IMPAKTA_URL} rel="noreferrer" style={styles.linkButton} target="_blank">
            Abrir CRM e financeiro
          </a>
          <button onClick={load} style={styles.ghost} type="button">
            ↻ Atualizar
          </button>
          <button onClick={onLogout} style={styles.ghost} type="button">
            Sair
          </button>
        </div>
      </div>
      <p style={styles.muted}>Sessão: {session.email}</p>
      {error ? <p style={styles.error}>{error}</p> : null}
      {leads === null ? (
        <p style={styles.muted}>A carregar…</p>
      ) : leads.length === 0 ? (
        <p style={styles.muted}>Ainda não há pedidos.</p>
      ) : (
        <div style={styles.list}>
          {leads.map((lead) => (
            <article key={lead.id} style={styles.card}>
              <div style={styles.bar}>
                <strong>
                  {lead.nome}
                  {lead.empresa ? ` · ${lead.empresa}` : ""}
                </strong>
                <span style={lead.urgencia === "alta" ? styles.tagHot : styles.tag}>
                  {lead.urgencia ?? "sem prazo"}
                </span>
              </div>
              <p style={styles.muted}>{new Date(lead.criado_em).toLocaleString("pt-PT")}</p>
              <p>
                {lead.email ? <a href={`mailto:${lead.email}`}>{lead.email}</a> : null}
                {lead.email && lead.telefone ? " · " : ""}
                {lead.telefone ? (
                  <a href={`https://wa.me/${lead.telefone.replace(/\D/g, "")}`} rel="noreferrer" target="_blank">
                    {lead.telefone}
                  </a>
                ) : null}
              </p>
              {lead.servico ? <p>Serviços: {lead.servico}</p> : null}
              {lead.orcamento || lead.prazo ? (
                <p>
                  Orçamento: {lead.orcamento ?? "—"} · Início: {lead.prazo ?? "—"}
                </p>
              ) : null}
              {lead.mensagem ? <p style={styles.message}>{lead.mensagem}</p> : null}
              <p style={styles.muted}>
                Página {lead.pagina ?? "—"} · {lead.idioma?.toUpperCase() ?? ""}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  page: { minHeight: "100vh", background: "var(--impakta-black)", color: "var(--impakta-white)", padding: "48px 20px" },
  wrap: { maxWidth: 880, margin: "0 auto", display: "grid", gap: 24 },
  brand: { letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12, opacity: 0.6 },
  title: { fontSize: 28, fontWeight: 700, margin: 0 },
  card: {
    display: "grid",
    gap: 12,
    padding: 24,
    borderRadius: 16,
    background: "color-mix(in srgb, var(--impakta-white) 6%, var(--impakta-black))",
    border: `1px solid color-mix(in srgb, var(--impakta-white) 15%, var(--impakta-black))`,
    maxWidth: "100%",
  },
  label: { display: "grid", gap: 6, fontSize: 14 },
  input: {
    padding: "12px 14px",
    borderRadius: 10,
    border: `1px solid color-mix(in srgb, var(--impakta-white) 20%, var(--impakta-black))`,
    background: "var(--impakta-black)",
    color: "var(--impakta-white)",
    fontSize: 16,
  },
  button: {
    padding: "12px 18px",
    borderRadius: 999,
    border: 0,
    background: "var(--impakta-white)",
    color: "var(--impakta-black)",
    fontWeight: 700,
    cursor: "pointer",
  },
  ghost: {
    padding: "8px 14px",
    borderRadius: 999,
    border: `1px solid color-mix(in srgb, var(--impakta-white) 25%, var(--impakta-black))`,
    background: "transparent",
    color: "var(--impakta-white)",
    cursor: "pointer",
  },
  linkButton: {
    padding: "8px 14px",
    borderRadius: 999,
    background: "var(--impakta-white)",
    color: "var(--impakta-black)",
    fontWeight: 700,
    textDecoration: "none",
  },
  bar: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" },
  actions: { display: "flex", gap: 8, flexWrap: "wrap" },
  list: { display: "grid", gap: 12 },
  muted: { opacity: 0.6, fontSize: 13, margin: 0 },
  message: { whiteSpace: "pre-wrap", background: "var(--impakta-black)", padding: 12, borderRadius: 10 },
  error: { color: "var(--impakta-pink)", margin: 0 },
  tag: { fontSize: 12, padding: "2px 10px", borderRadius: 999, border: `1px solid color-mix(in srgb, var(--impakta-white) 25%, var(--impakta-black))` },
  tagHot: { fontSize: 12, padding: "2px 10px", borderRadius: 999, background: "var(--impakta-pink)", color: "var(--impakta-white)" },
};
