import { Link } from "react-router-dom";
import { Mark } from "../../../icons";

function HeroSection() {
  return (
    <section id="top" className="hero">
      <Mark className="hero-watermark" />
      <div className="container hero-copy">
        <p className="eyebrow">Exalynt</p>
        <h1>Technology should solve problems.</h1>
        <p className="lede">
          Exalynt builds custom software, software products, and open-source tools that solve
          practical problems. We help organizations automate workflows, connect systems, and build
          applications &mdash; from understanding the problem through development and operation.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Discuss Your Project →
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            Explore Products & Open Source →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
