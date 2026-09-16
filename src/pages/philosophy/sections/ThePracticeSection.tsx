import { TrajectoryLine } from "../../../icons";

const PRACTICE = [
  {
    num: "04",
    title: "Care about the craft",
    body: "Engineering is a profession and a craft worth doing well. Care about clarity, simplicity, maintainability, reliability, thoughtful architecture, and communication. That said, avoid turning craft into dogma — rules about “clean code” matter less than judgment and context.",
  },
  {
    num: "05",
    title: "Own the outcome",
    body: "Excellent engineers take responsibility for the work, especially when it goes wrong. Mistakes should not be hidden or treated primarily as opportunities to assign blame. Own it, understand it, fix what needs fixing, and improve the system — or your own judgment — so the lesson compounds.",
  },
  {
    num: "06",
    title: "Be willing to fail",
    body: "Engineering contains uncertainty. Trying only things that are guaranteed to work limits learning and innovation. Thoughtful experimentation is valuable even when the result is failure — a failed idea that teaches something important is not necessarily wasted work.",
  },
  {
    num: "07",
    title: "Exercise judgment",
    body: "There is rarely one universally correct architecture, technology, pattern, or practice. Excellent engineers understand tradeoffs and choose solutions based on the problem and its context — not trends, ideology, résumé value, or technical novelty.",
  },
  {
    num: "08",
    title: "Lift others",
    body: "Engineering excellence should improve more than software. Share knowledge, mentor, listen, give useful feedback, and help teammates succeed. Care about the users affected by the work. There is real satisfaction in making the people around you — and the systems they depend on — a little better.",
  },
];

function ThePracticeSection() {
  return (
    <section id="the-practice" className="section section-alt">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">The practice</p>
          <h2>What excellence asks of us day to day.</h2>
          <p>
            These are the habits that turn the idea of excellence into how the work actually gets
            done.
          </p>
        </div>

        <TrajectoryLine className="practice-trajectory" />

        <ol className="approach-list">
          {PRACTICE.map(({ num, title, body }) => (
            <li key={title}>
              <span className="approach-num">{num}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ThePracticeSection;
