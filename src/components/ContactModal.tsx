import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, CopyIcon, LinkedInIcon, MailIcon } from "../icons";
import { EXALYNT_LINKEDIN_URL } from "../constants";
import { ContactModalContext } from "../useContactModal";

const CONTACT_EMAIL = "john.peterson@exalynt.com";
const TOAST_DURATION_MS = 2200;

async function copyToClipboard(text: string) {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = useCallback(() => setIsOpen(true), []);
  const closeContactModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ openContactModal }), [openContactModal]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeContactModal();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeContactModal]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      {isOpen && createPortal(<ContactModal onClose={closeContactModal} />, document.body)}
    </ContactModalContext.Provider>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => clearTimeout(toastTimeoutRef.current);
  }, []);

  const handleCopyEmail = useCallback(async () => {
    try {
      await copyToClipboard(CONTACT_EMAIL);
      setShowToast(true);
      clearTimeout(toastTimeoutRef.current);
      toastTimeoutRef.current = setTimeout(() => setShowToast(false), TOAST_DURATION_MS);
    } catch {
      // Clipboard access denied or unavailable; the mailto link still works.
    }
  }, []);

  return (
    <div className="contact-modal-overlay" onMouseDown={onClose}>
      <div
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button type="button" className="contact-modal-close" onClick={onClose} aria-label="Close">
          <CloseIcon className="contact-modal-close-icon" />
        </button>
        <p className="eyebrow">Get in touch</p>
        <h2 id="contact-modal-title">Let&rsquo;s talk.</h2>
        <p>Reach out by email or send a message on LinkedIn &mdash; whichever works for you.</p>
        <div className="contact-methods">
          <div className="contact-method-email">
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
              <MailIcon className="btn-icon" />
              Email {CONTACT_EMAIL}
            </a>
            <button
              type="button"
              className="contact-copy-btn"
              onClick={handleCopyEmail}
              aria-label="Copy email address to clipboard"
              title="Copy email address"
            >
              <CopyIcon className="contact-copy-icon" />
            </button>
          </div>
          <a
            href={EXALYNT_LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <LinkedInIcon className="btn-icon" />
            Message on LinkedIn
          </a>
        </div>
        {showToast && (
          <div className="contact-toast" role="status">
            Email address copied to clipboard.
          </div>
        )}
      </div>
    </div>
  );
}
