import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "../../../icons";

export function EstimatesModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div className="contact-modal-overlay" onMouseDown={onClose}>
      <div
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="estimates-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button type="button" className="contact-modal-close" onClick={onClose} aria-label="Close">
          <CloseIcon className="contact-modal-close-icon" />
        </button>
        <p className="eyebrow">Estimates</p>
        <h2 id="estimates-modal-title">Why don&rsquo;t we quote the whole project?</h2>
        <p>
          Software development is a process of discovery. At the beginning of an engagement, we
          understand the problem less than we will after we&rsquo;ve built something and
          you&rsquo;ve had an opportunity to use it &mdash; so a whole-project estimate would lock
          in assumptions before that learning happens.
        </p>
        <p>
          Traditional projects try to manage that uncertainty by predicting the future in detail. We
          manage it differently: capacity limits how much is invested, and short iterations limit
          how long we go before reconsidering the direction. Instead of one large commitment based
          on early assumptions, we make a series of smaller, informed decisions based on what we
          know now.
        </p>
        <blockquote className="pull-quote">
          We don&rsquo;t reduce risk by predicting the future. We reduce it by limiting the size of
          the bet.
        </blockquote>
      </div>
    </div>,
    document.body,
  );
}
