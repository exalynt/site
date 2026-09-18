import { useEffect, useRef, useState } from "react";
import HeroSection from "./sections/HeroSection";
import HowWeHelpSection from "./sections/HowWeHelpSection";
import PricingSection from "./sections/PricingSection";
import HowWeWorkSection from "./sections/HowWeWorkSection";
import LaunchSection from "./sections/LaunchSection";
import FaqSection from "./sections/FaqSection";
import CtaSection from "./sections/CtaSection";

const JUMP_LINKS = [
  { to: "#how-we-help", label: "What we build" },
  { to: "#pricing", label: "Pricing" },
  { to: "#how-we-work", label: "How we work" },
  { to: "#launch", label: "Launch & hosting" },
  { to: "#faq", label: "FAQ" },
];

function WorkWithUs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setNavVisible(!entry.isIntersecting));
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={heroRef}>
        <HeroSection />
      </div>

      <div className="page-with-jump-nav">
        <nav
          className={`section-jump-nav${navVisible ? " is-visible" : ""}`}
          aria-label="Jump to a section on this page"
        >
          <div className="container section-jump-nav-inner">
            {JUMP_LINKS.map(({ to, label }) => (
              <a href={to} key={to}>
                {label}
              </a>
            ))}
          </div>
        </nav>

        <HowWeHelpSection />
        <PricingSection />
        <HowWeWorkSection />
        <LaunchSection />
        <FaqSection />
        <CtaSection />
      </div>
    </>
  );
}

export default WorkWithUs;
