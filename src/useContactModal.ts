import { createContext, useContext } from "react";

export type ContactModalContextValue = {
  openContactModal: () => void;
};

export const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}
