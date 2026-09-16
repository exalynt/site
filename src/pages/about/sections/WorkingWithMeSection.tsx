import { Link } from "react-router-dom";

function WorkingWithMeSection() {
  return (
    <section className="section section-alt working-with-me">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Working with me</p>
          <h2>Select consulting &amp; contract work.</h2>
          <p>
            I am open to select consulting and contract work where thoughtful engineering, sound
            architecture, and experienced technical judgment can make a meaningful difference:
            software architecture, system design, backend/platform engineering, architecture
            reviews, difficult technical decisions, technical strategy, and engineering mentorship
            and guidance.
          </p>
        </div>
        <Link to="/contact" className="btn btn-secondary">
          Get in touch →
        </Link>
      </div>
    </section>
  );
}

export default WorkingWithMeSection;
