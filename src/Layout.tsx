import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { CloseIcon, GitHubIcon, LinkedInIcon, Mark, MenuIcon, MoonIcon, SunIcon } from "./icons";
import { useTheme } from "./useTheme";
import { EXALYNT_BLOG_URL, EXALYNT_GITHUB_URL, EXALYNT_LINKEDIN_URL } from "./constants";
import { ContactModalProvider } from "./components/ContactModal";
import { useContactModal } from "./useContactModal";

const NAV_LINKS = [
  { to: "/work-with-us", label: "Custom Software" },
  { to: "/projects", label: "Products & Open Source" },
  { to: "/about", label: "About" },
];

const FOOTER_LINKS = [
  { to: "/", label: "Home" },
  { to: "/work-with-us", label: "Custom Software" },
  { to: "/projects", label: "Products & Open Source" },
  { to: "/about", label: "About" },
  { to: "/philosophy", label: "Philosophy" },
  { to: EXALYNT_BLOG_URL, label: "Blog", external: true },
];

function GetInTouchButton({ className }: { className?: string }) {
  const { openContactModal } = useContactModal();
  return (
    <button type="button" className={className} onClick={openContactModal}>
      Get in touch
    </button>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <SunIcon className="theme-toggle-icon" />
      ) : (
        <MoonIcon className="theme-toggle-icon" />
      )}
    </button>
  );
}

function LayoutContent() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(location.pathname);

  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const navTabIndex = menuOpen ? undefined : -1;

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            <Mark className="brand-mark" />
            <span>EXALYNT</span>
          </Link>
          <nav className="site-nav">
            {NAV_LINKS.map(({ to, label }) => (
              <Link to={to} key={to}>
                {label}
              </Link>
            ))}
            <a
              href={EXALYNT_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label="Exalynt on GitHub"
              title="View on GitHub"
            >
              <GitHubIcon className="icon-link-icon" />
            </a>
            <a
              href={EXALYNT_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label="Exalynt on LinkedIn"
              title="Connect on LinkedIn"
            >
              <LinkedInIcon className="icon-link-icon" />
            </a>
            <ThemeToggle />
            <GetInTouchButton className="btn btn-primary btn-sm" />
            <button
              type="button"
              className="nav-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <CloseIcon className="nav-toggle-icon" />
              ) : (
                <MenuIcon className="nav-toggle-icon" />
              )}
            </button>
          </nav>
        </div>

        <div id="mobile-nav" className={`mobile-nav${menuOpen ? " is-open" : ""}`}>
          <div className="mobile-nav-content" aria-hidden={!menuOpen}>
            <nav className="container mobile-nav-links">
              {NAV_LINKS.map(({ to, label }) => (
                <Link to={to} key={to} tabIndex={navTabIndex} onClick={closeMenu}>
                  {label}
                </Link>
              ))}
            </nav>
            <div className="container mobile-nav-footer">
              <a
                href={EXALYNT_GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="icon-link"
                aria-label="Exalynt on GitHub"
                title="View on GitHub"
                tabIndex={navTabIndex}
              >
                <GitHubIcon className="icon-link-icon" />
              </a>
              <a
                href={EXALYNT_LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="icon-link"
                aria-label="Exalynt on LinkedIn"
                title="Connect on LinkedIn"
                tabIndex={navTabIndex}
              >
                <LinkedInIcon className="icon-link-icon" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer surface-dark deep">
        <div className="container footer-statement">
          <p>
            <strong>Exalynt Engineering</strong>
            <br />
            Pursue excellence. Learn continuously. Build things that matter.
          </p>
        </div>
        <div className="container footer-inner">
          <Link to="/" className="brand brand-footer">
            <Mark className="brand-mark" />
            <span>EXALYNT</span>
          </Link>
          <nav className="footer-nav">
            {FOOTER_LINKS.map(({ to, label, external }) =>
              external ? (
                <a href={to} target="_blank" rel="noreferrer" key={to}>
                  {label}
                </a>
              ) : (
                <Link to={to} key={to}>
                  {label}
                </Link>
              ),
            )}
            <GetInTouchButton className="footer-nav-btn" />
          </nav>
          <div className="footer-meta">
            <a
              href={EXALYNT_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="icon-link icon-link-footer"
              aria-label="Exalynt on GitHub"
              title="View on GitHub"
            >
              <GitHubIcon className="icon-link-icon" />
            </a>
            <a
              href={EXALYNT_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="icon-link icon-link-footer"
              aria-label="Exalynt on LinkedIn"
              title="Connect on LinkedIn"
            >
              <LinkedInIcon className="icon-link-icon" />
            </a>
            <p className="copyright">© 2026 Exalynt Engineering.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function Layout() {
  return (
    <ContactModalProvider>
      <LayoutContent />
    </ContactModalProvider>
  );
}

export default Layout;
