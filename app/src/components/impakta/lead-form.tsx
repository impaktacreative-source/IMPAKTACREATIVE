import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n/locale";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getServicesForLocale } from "@/lib/services-data";

// Contact / lead form shown in the contact block of every page. Submissions
// are inserted straight into the Supabase table public.leads (project
// "impakta") with the publishable key. Row Level Security only lets anonymous
// visitors INSERT; they cannot read, change or delete leads. The IMPAKTA CRM
// reads that table with the button "Pedidos do site".

const SUPABASE_URL = "https://fxlgmndznasygpncgkkr.supabase.co";
// Publishable key: safe in the browser, access is limited by RLS.
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_5YUpgFoOJXoyoE0IH-5RBA_1uZOEWLb";
const WHATSAPP_URL = "https://wa.me/351936330812";

// Service values are always the Portuguese names in sentence case, exactly as
// the CRM lists them, whatever language the visitor is reading.
function crmServiceName(ptName: string): string {
  if (ptName.length <= 2) return ptName;
  const lower = ptName.toLocaleLowerCase("pt-PT");
  return lower.charAt(0).toLocaleUpperCase("pt-PT") + lower.slice(1);
}

type Status = "idle" | "sending" | "sent" | "error";

export function LeadForm({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const f = dict.contact.form;
  const services = getServicesForLocale(locale);
  const ptServices = getServicesForLocale("pt");
  const [status, setStatus] = useState<Status>("idle");
  const [problem, setProblem] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!String(data.get("nome") || "").trim()) return setProblem(f.errorName);
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("telefone") || "").trim();
    if (!email && !phone) return setProblem(f.errorContact);
    if (!data.get("rgpd")) return setProblem(f.errorConsent);
    setProblem("");

    // Bots fill the hidden honeypot field: pretend success, store nothing.
    if (String(data.get("bot-field") || "")) {
      form.reset();
      setStatus("sent");
      return;
    }

    const prazo = String(data.get("prazo") || "");
    const urgencia = prazo === "Já" ? "alta" : prazo === "Este mês" ? "media" : prazo ? "baixa" : null;
    const orNull = (value: string) => (value ? value : null);

    const lead = {
      nome: String(data.get("nome") || "").trim(),
      empresa: orNull(String(data.get("empresa") || "").trim()),
      email: orNull(email),
      telefone: orNull(phone),
      servico: orNull(data.getAll("servicos").map(String).join("; ")),
      orcamento: orNull(String(data.get("orcamento") || "")),
      prazo: orNull(prazo),
      urgencia,
      mensagem: orNull(String(data.get("mensagem") || "").trim()),
      origem: "Site (formulário)",
      pagina: window.location.pathname.slice(0, 300),
      idioma: locale,
      rgpd: true,
    };

    setStatus("sending");
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(lead),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
      // Meta Pixel conversion: a real lead was saved.
      window.fbq?.("track", "Lead");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="impakta-form impakta-form--done" id="formulario" role="status">
        <p className="impakta-form__done-title">{f.sentTitle}</p>
        <p className="impakta-form__done-text">{f.sentText}</p>
      </div>
    );
  }

  return (
    <form className="impakta-form" id="formulario" noValidate onSubmit={handleSubmit}>
      {/* Honeypot: hidden from people, filled in by bots. */}
      <p className="impakta-form__hp" aria-hidden="true">
        <label>
          Não preencher <input autoComplete="off" name="bot-field" tabIndex={-1} />
        </label>
      </p>

      <div className="impakta-form__grid">
        <label className="impakta-form__field">
          <span>{f.name} *</span>
          <input autoComplete="name" name="nome" required type="text" />
        </label>
        <label className="impakta-form__field">
          <span>{f.company}</span>
          <input autoComplete="organization" name="empresa" type="text" />
        </label>
        <label className="impakta-form__field">
          <span>{f.email}</span>
          <input autoComplete="email" inputMode="email" name="email" type="email" />
        </label>
        <label className="impakta-form__field">
          <span>{f.phone}</span>
          <input autoComplete="tel" inputMode="tel" name="telefone" placeholder="+351" type="tel" />
        </label>
      </div>

      <fieldset className="impakta-form__services">
        <legend>{f.services}</legend>
        <div className="impakta-form__chips">
          {services.map((service, i) => (
            <label className="impakta-form__chip" key={service.slug}>
              <input name="servicos" type="checkbox" value={crmServiceName(ptServices[i].name)} />
              <span>{service.name}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="impakta-form__grid">
        <label className="impakta-form__field">
          <span>{f.budget}</span>
          <select defaultValue="" name="orcamento">
            {f.budgetOptions.map(([value, label]) => (
              <option key={label} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="impakta-form__field">
          <span>{f.timing}</span>
          <select defaultValue="" name="prazo">
            {f.timingOptions.map(([value, label]) => (
              <option key={label} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="impakta-form__field impakta-form__field--wide">
          <span>{f.message}</span>
          <textarea name="mensagem" placeholder={f.messagePlaceholder} rows={4} />
        </label>
      </div>

      <label className="impakta-form__consent">
        <input name="rgpd" required type="checkbox" value="sim" />
        <span>{f.consent}</span>
      </label>

      {problem ? (
        <p className="impakta-form__problem" role="alert">
          {problem}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="impakta-form__problem" role="alert">
          {f.errorSend}{" "}
          <a href={WHATSAPP_URL} rel="noopener noreferrer" target="_blank">
            WhatsApp
          </a>
          .
        </p>
      ) : null}

      <div className="impakta-form__actions">
        <button className="impakta-contact__cta impakta-form__submit" disabled={status === "sending"} type="submit">
          {status === "sending" ? f.sending : f.submit}
        </button>
        <a className="impakta-form__alt" href={WHATSAPP_URL} rel="noopener noreferrer" target="_blank">
          {f.preferWhatsapp}
        </a>
      </div>
    </form>
  );
}
