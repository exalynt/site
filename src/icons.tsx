export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 220" aria-hidden="true">
      <path d="M25 71 L58 71 L85 98 L68 116 Z" fill="currentColor" />
      <path d="M28 173 L57 173 L194 38 L162 38 Z" fill="currentColor" />
      <path d="M110 145 L127 129 L170 172 L137 172 Z" fill="currentColor" />
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

export function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeLinejoin="round"
        d="M14.6 9.4 10.8 10.8 9.4 14.6 13.2 13.2Z"
      />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function OpenBookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M12 6.8c-1.7-1.4-3.9-2.1-6-2.1v11c2.1 0 4.3.7 6 2.1"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M12 6.8c1.7-1.4 3.9-2.1 6-2.1v11c-2.1 0-4.3.7-6 2.1V6.8Z"
      />
    </svg>
  );
}

export function BracketsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 7 4.5 12 9 17M15 7l4.5 5-4.5 5"
      />
    </svg>
  );
}

export function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function BranchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="M5 12h4" />
      <path
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12 16 6M9 12l7 6"
      />
      <circle cx="5" cy="12" r="1.4" fill="currentColor" />
      <circle cx="17.5" cy="5.3" r="1.4" fill="currentColor" />
      <circle cx="17.5" cy="18.7" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function PeopleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8.3" cy="7.8" r="2.3" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M4 18.3c0-2.7 1.9-4.4 4.3-4.4s4.3 1.7 4.3 4.4"
      />
      <circle cx="16.4" cy="6.9" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <path
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        d="M13.4 14c.7-1.5 2-2.4 3.2-2.4 2 0 3.6 1.5 3.6 3.8"
      />
    </svg>
  );
}

export function TrajectoryLine({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 120" fill="none" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        d="M10 36c56 0 78 62 138 62s84-78 244-78"
      />
      <circle cx="10" cy="36" r="5" fill="currentColor" />
      <circle cx="392" cy="20" r="5" fill="currentColor" />
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

export function LiveSignalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M8.3 8.3a5.2 5.2 0 0 0 0 7.4M15.7 8.3a5.2 5.2 0 0 1 0 7.4M5.4 5.4a9.3 9.3 0 0 0 0 13.2M18.6 5.4a9.3 9.3 0 0 1 0 13.2"
      />
    </svg>
  );
}

export function ProgressDotsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="5" cy="12" r="1.8" />
      <circle cx="12" cy="12" r="1.8" opacity="0.6" />
      <circle cx="19" cy="12" r="1.8" opacity="0.3" />
    </svg>
  );
}

export function FlaskIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 3.5h5M10 3.5v6.2L5.8 17a2 2 0 0 0 1.7 3h9a2 2 0 0 0 1.7-3L14 9.7V3.5"
      />
      <path stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" d="M7.8 14.5h8.4" />
    </svg>
  );
}

export function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" d="M12 7.5V12l3.3 2" />
    </svg>
  );
}

export function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="M12 3.5 18.5 6v5.5c0 4.4-2.8 7.6-6.5 9-3.7-1.4-6.5-4.6-6.5-9V6Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.2l2 2 4-4.4"
      />
    </svg>
  );
}

export function ArchiveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" d="M4 5.5h16v3.4H4z" />
      <path
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="M5.5 8.9v9.1a.7.7 0 0 0 .7.7h11.6a.7.7 0 0 0 .7-.7V8.9"
      />
      <path stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" d="M10 12.6h4" />
    </svg>
  );
}

export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c-5.52 0-10 4.55-10 10.16 0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.61-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5.01 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.36c0-5.61-4.48-10.16-10-10.16Z" />
    </svg>
  );
}
