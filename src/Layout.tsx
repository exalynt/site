import { Link, Outlet } from "react-router-dom";
import { GitHubIcon, LinkedInIcon, Mark, MoonIcon, SunIcon } from "./icons";
import { useTheme } from "./useTheme";

const LINKEDIN_URL = "https://www.linkedin.com/in/john-peterson-dev/";
const GITHUB_URL = "https://github.com/john-peterson-g17";

const NAV_LINKS = [
  { to: "/engineering", label: "Engineering" },
  { to: "/writing", label: "Writing" },
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
            {NAV_LINKS.map(({ to, label }) => (
              <Link to={to} key={to}>
                {label}
              </Link>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label="John Peterson on GitHub"
              title="View on GitHub"
            >
              <GitHubIcon className="icon-link-icon" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label="John Peterson on LinkedIn"
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
            {NAV_LINKS.map(({ to, label }) => (
              <Link to={to} key={to}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="footer-meta">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="icon-link icon-link-footer"
              aria-label="John Peterson on GitHub"
              title="View on GitHub"
            >
              <GitHubIcon className="icon-link-icon" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="icon-link icon-link-footer"
              aria-label="John Peterson on LinkedIn"
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
