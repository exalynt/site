import { Link } from "react-router-dom";
import { BracketsIcon, PeopleIcon } from "../../../icons";

const OFFERINGS = [
  {
    icon: BracketsIcon,
    title: "Products & Open Source",
    tagline: "Software built, operated, and shared in the open by Exalynt.",
    body: "We identify problems shared by many organizations, build solutions, and make those solutions available as products, hosted services, and open-source libraries and tools.",
    cta: "Explore Products & Open Source",
    to: "/projects",
  },
  {
    icon: PeopleIcon,
    title: "Custom Software & Consulting",
    tagline: "Have a problem you think technology could solve?",
    body: "Exalynt works directly with organizations to understand problems, explore possible solutions, and build custom software when it makes sense.",
    cta: "How We Work",
    to: "/work-with-us",
  },
];

function OfferingsSection() {
  return (
    <section id="what-we-do" className="section section-alt">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">How we work</p>
          <h2>Three ways we solve problems.</h2>
          <p>
            Software is our medium, not our mission. Exalynt solves problems through a few different
            models, depending on what the problem actually calls for.
          </p>
        </div>

        <div className="project-grid">
          {OFFERINGS.map(({ icon: Icon, title, tagline, body, cta, to }) => (
            <Link to={to} className="project-card offering-card" key={title}>
              <Icon className="offering-icon" />
              <h3>{title}</h3>
              <p className="offering-tagline">{tagline}</p>
              <p>{body}</p>
              <span className="offering-cta">{cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferingsSection;
