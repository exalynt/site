import { useEffect, useRef, useState } from "react";
import HeroSection from "./sections/HeroSection";
import HowWeHelpSection from "./sections/HowWeHelpSection";
import StartSmallSection from "./sections/StartSmallSection";
import PricingSection from "./sections/PricingSection";
import HowWeBuildSection from "./sections/HowWeBuildSection";
import WhyNotEstimatesSection from "./sections/WhyNotEstimatesSection";
import ControlSection from "./sections/ControlSection";
import OwnershipSection from "./sections/OwnershipSection";
import ClientDataSection from "./sections/ClientDataSection";
import CtaSection from "./sections/CtaSection";

const JUMP_LINKS = [
  { to: "#how-we-help", label: "What we build" },
  { to: "#start-small", label: "Getting started" },
  { to: "#pricing", label: "Pricing" },
  { to: "#how-we-build", label: "Process" },
  { to: "#ownership", label: "Ownership & support" },
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
        <StartSmallSection />
        <PricingSection />
        <HowWeBuildSection />
        <WhyNotEstimatesSection />
        <ControlSection />
        <OwnershipSection />
        <ClientDataSection />
        <CtaSection />
      </div>
    </>
  );
}

export default WorkWithUs;
