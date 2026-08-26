export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <polygon points="10,40 19,40 39,11" fill="currentColor" />
      <polygon points="38,40 29,40 9,11" fill="currentColor" />
    </svg>
  );
}

export function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"
      />
    </svg>
  );
}

export function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="currentColor" d="M20.4 14.7A8.6 8.6 0 0 1 9.3 3.6a8.9 8.9 0 1 0 11.1 11.1Z" />
    </svg>
  );
}

export function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        d="M6.5 3.5h7.4L18.5 8v12a.7.7 0 0 1-.7.7H6.5a.7.7 0 0 1-.7-.7V4.2a.7.7 0 0 1 .7-.7Z"
      />
      <path stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" d="M13.9 3.5V8h4.6" />
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M8.7 12.2h6.6M8.7 15.2h6.6M8.7 18.2h4.2"
      />
    </svg>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 7.02c1.12 0 1.98-.87 1.98-1.94C7.23 3.98 6.37 3 5.25 3S3.5 3.98 3.5 5.08c0 1.07.86 1.94 1.75 1.94ZM20.5 20h-3.38v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.72V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.2-1.75 3.43 0 4.29 2.26 4.29 5.19V20Z" />
    </svg>
  );
}
