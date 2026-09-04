import { Link, Outlet } from "react-router-dom";
import { GitHubIcon, LinkedInIcon, Mark, MoonIcon, SunIcon } from "./icons";
import { useTheme } from "./useTheme";
import { EXALYNT_BLOG_URL, EXALYNT_GITHUB_URL, EXALYNT_LINKEDIN_URL } from "./constants";

const NAV_LINKS = [
  { to: "/engineering", label: "Engineering" },
  { to: EXALYNT_BLOG_URL, label: "Blog", external: true },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

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

function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            <Mark className="brand-mark" />
            <span>EXALYNT</span>
          </Link>
          <nav className="site-nav">
            {NAV_LINKS.map(({ to, label, external }) =>
              external ? (
                <a href={to} target="_blank" rel="noreferrer" key={to}>
                  {label}
                </a>
              ) : (
                <Link to={to} key={to}>
                  {label}
                </Link>
              )
            )}
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
            <Link to="/contact" className="btn btn-primary btn-sm">
              Get in touch
            </Link>
          </nav>
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
            {NAV_LINKS.map(({ to, label, external }) =>
              external ? (
                <a href={to} target="_blank" rel="noreferrer" key={to}>
                  {label}
                </a>
              ) : (
                <Link to={to} key={to}>
                  {label}
                </Link>
              )
            )}
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

export default Layout;
