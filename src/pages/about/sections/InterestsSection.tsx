const INTERESTS = [
  "Software architecture",
  "Distributed systems",
  "Backend engineering",
  "Platform engineering",
  "Observability",
  "Developer experience",
  "Engineering leadership",
  "Experimentation",
];

function InterestsSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">What I&rsquo;m interested in</p>
          <h2>Where I spend my attention.</h2>
        </div>
        <ul className="hobby-list">
          {INTERESTS.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default InterestsSection;
