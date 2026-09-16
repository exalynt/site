import { Link } from "react-router-dom";

function KeepImprovingSection() {
  return (
    <section id="keep-improving" className="idea-section surface-dark deep">
      <div className="container idea-inner">
        <h2>Excellence compounds.</h2>
        <p>
          We will make mistakes. Some ideas will fail. Technologies will change. The problems in
          front of us will change.
        </p>
        <p className="idea-lead-in">The pursuit remains the same:</p>
        <p className="idea-cycle">Learn. Build. Reflect. Improve. Help others. Repeat.</p>
        <p>Each cycle should leave us a little better than where we started.</p>
        <div className="cta-actions idea-actions">
          <Link to="/about" className="btn btn-secondary">
            About
          </Link>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default KeepImprovingSection;
