import { Link } from "react-router-dom";

function ExcellenceSection() {
  return (
    <section id="excellence" className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Philosophy</p>
          <h2>Excellence is a practice.</h2>
          <p>
            Excellence isn&rsquo;t a destination. It&rsquo;s the continuous pursuit of doing things
            better.
          </p>
          <p>
            At Exalynt, that means understanding problems before reaching for solutions, building
            intentionally, learning from what we create, and continuously improving.
          </p>
          <p>
            Sometimes the result is a product. Sometimes it&rsquo;s an open-source project.
            Sometimes it&rsquo;s software built specifically for one organization. The common thread
            is thoughtfully using technology to solve meaningful problems.
          </p>
        </div>

        <blockquote className="definition-card definition-card-standalone">
          <p className="definition-word">excellence</p>
          <p className="definition-pos">noun</p>
          <p className="definition-body">
            The ongoing pursuit of doing worthwhile things exceptionally well.
          </p>
          <p className="definition-note">
            Not flawlessness. Not a destination. A standard we choose to pursue, learn from, and
            return to every day.
          </p>
        </blockquote>

        <blockquote className="pull-quote">
          We believe excellent software starts with understanding the problem &mdash; not assuming
          we already know the solution.
        </blockquote>

        <div className="cta-actions section-cta">
          <Link to="/philosophy" className="btn btn-secondary">
            Read Our Philosophy →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ExcellenceSection;
