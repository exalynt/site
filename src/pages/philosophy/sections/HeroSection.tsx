function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="section-intro">
            <p className="eyebrow">The philosophy</p>
            <h1>What does excellent software engineering look like?</h1>
            <p>
              Excellence is the ongoing pursuit of doing worthwhile things exceptionally well. It
              requires standards &mdash; a real bar worth reaching for &mdash; while recognizing
              that the pursuit of improvement never truly ends.
            </p>
            <p>
              This page is the closest thing Exalynt has to a manifesto: not a final word, but a
              working description of what the practice of excellent engineering looks like.
            </p>
          </div>
        </div>
        <blockquote className="definition-card">
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
      </div>
    </section>
  );
}

export default HeroSection;
