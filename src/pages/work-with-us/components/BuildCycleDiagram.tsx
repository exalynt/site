import { arc } from "d3-shape";
import type { CSSProperties } from "react";
import { useId, useMemo, useState } from "react";

export interface BuildCycleStep {
  num: string;
  title: string;
  body: string;
}

const OUTER_RADIUS = 28;
const INNER_RADIUS = 18;
const TRACK_RADIUS = (OUTER_RADIUS + INNER_RADIUS) / 2;
const LABEL_RADIUS = OUTER_RADIUS + 5;
const POP_DISTANCE = 5;
const PAD_ANGLE = 0.045;
const CORNER_RADIUS = 1.6;

const ringArc = arc<{ startAngle: number; endAngle: number }>()
  .innerRadius(INNER_RADIUS)
  .outerRadius(OUTER_RADIUS)
  .cornerRadius(CORNER_RADIUS)
  .padAngle(PAD_ANGLE);

// Point relative to the diagram's center (angle: 0 = top, clockwise).
function radialPoint(angle: number, radius: number) {
  return { x: radius * Math.sin(angle), y: -radius * Math.cos(angle) };
}

export function BuildCycleDiagram({ steps }: { steps: BuildCycleStep[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const uid = useId();
  const stepCount = steps.length;
  const angleStep = (2 * Math.PI) / stepCount;

  const wedges = useMemo(
    () =>
      steps.map((step, i) => {
        const startAngle = i * angleStep;
        const endAngle = (i + 1) * angleStep;
        const midAngle = startAngle + angleStep / 2;
        const label = radialPoint(midAngle, LABEL_RADIUS);
        const pop = radialPoint(midAngle, POP_DISTANCE);
        return {
          ...step,
          d: ringArc({ startAngle, endAngle }) ?? "",
          labelX: label.x,
          labelY: label.y,
          popStyle: { "--pop-x": pop.x, "--pop-y": pop.y } as CSSProperties,
        };
      }),
    [steps, angleStep],
  );

  const active = steps[activeIndex];
  const detailId = `build-cycle-detail-${uid}`;

  return (
    <div className="build-cycle-interactive">
      <div className="build-cycle">
        <svg className="build-cycle-ring" viewBox="0 0 100 100">
          <g transform="translate(50, 50)">
            <circle r={TRACK_RADIUS} className="build-cycle-track" />
            {wedges.map((wedge, i) => (
              <g
                key={wedge.title}
                role="button"
                tabIndex={0}
                className={`build-cycle-step${i === activeIndex ? " is-active" : ""}`}
                style={wedge.popStyle}
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                aria-label={`Step ${wedge.num}: ${wedge.title}`}
                aria-describedby={detailId}
              >
                <path d={wedge.d} className="build-cycle-segment" />
                <text x={wedge.labelX} y={wedge.labelY - 2} className="build-cycle-step-num">
                  {wedge.num}
                </text>
                <text x={wedge.labelX} y={wedge.labelY + 5.5} className="build-cycle-step-title">
                  {wedge.title}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </div>

      <div className="build-cycle-detail" id={detailId} aria-live="polite">
        <span className="build-cycle-detail-num">Step {active.num}</span>
        <h3>{active.title}</h3>
        <p>{active.body}</p>
      </div>
    </div>
  );
}
