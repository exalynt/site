import { Link } from "react-router-dom";
import { BranchIcon, LiveSignalIcon, PeopleIcon } from "../../../icons";

const OFFERINGS = [
  {
    icon: LiveSignalIcon,
    title: "Products",
    tagline: "Software Exalynt builds and operates for you.",
    body: "We identify problems shared by many organizations and build solutions to them, then offer those solutions as hosted products that Exalynt runs, maintains, and supports.",
    cta: "Explore Products",
    to: "/projects",
  },
  {
    icon: BranchIcon,
    title: "Open Source",
    tagline: "Tools and libraries released for anyone to use.",
    body: "Some of what we build is released under open licenses — free to inspect, self-host, and contribute to, with no dependency on Exalynt to keep it running.",
    cta: "Explore Open Source",
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

        <div className="project-grid offering-grid">
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
