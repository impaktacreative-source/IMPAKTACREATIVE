// Minimal inline glyphs (stroke = currentColor, no raw color literals) so the
// footer's social row doesn't need an icon-library dependency.
export function InstagramIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
      <rect height="18" rx="5" stroke="currentColor" strokeWidth="1.6" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" fill="currentColor" r="1.1" />
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
      <rect height="18" rx="2.4" stroke="currentColor" strokeWidth="1.6" width="18" x="3" y="3" />
      <circle cx="8.1" cy="8.6" fill="currentColor" r="1.15" />
      <path d="M8.1 11.4V17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      <path
        d="M12.4 17v-3.4c0-1.28 1-2.2 2.2-2.2s2 0.92 2 2.2V17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path d="M12.4 11.4V17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

export function WhatsappIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
      <path
        d="M12 3.5c4.7 0 8.5 3.6 8.5 8s-3.8 8-8.5 8c-1.5 0-2.9-.35-4.1-1L3.5 20l1.15-4.2A7.7 7.7 0 0 1 3.5 11.5c0-4.4 3.8-8 8.5-8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d="M8.7 8.9c.15-.5.5-.5.8-.5h.4c.2 0 .35.05.5.35l.6 1.3c.1.2.05.4-.05.55l-.4.5c-.1.15-.1.3-.02.45.3.6 1.2 1.55 1.85 1.85.15.08.3.08.45-.02l.5-.4c.15-.1.35-.15.55-.05l1.3.6c.3.15.35.3.35.5v.4c0 .3 0 .65-.5.8-1.4.4-3.3-.2-4.85-1.75S8.3 10.3 8.7 8.9Z"
        fill="currentColor"
      />
    </svg>
  );
}
