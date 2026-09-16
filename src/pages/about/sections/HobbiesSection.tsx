const HOBBIES = [
  "Family time",
  "Video games with friends and family",
  "Reading",
  "Hiking",
  "Camping",
  "Mountain biking",
  "Golf",
  "Pickleball",
];

function HobbiesSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Beyond the code</p>
          <h2>When I&rsquo;m not creating</h2>
          <p>I&rsquo;m usually with family, reading, or outside.</p>
        </div>
        <ul className="hobby-list">
          {HOBBIES.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HobbiesSection;
