import { useEffect, useRef } from "react";

export default function LiquidEther({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let frame: number;
    let t = 0;

    const blobs = [
      { el: document.getElementById("blob-a"), x: 30, y: 30, r: 18, speedX: 0.18, speedY: 0.12, phase: 0 },
      { el: document.getElementById("blob-b"), x: 65, y: 20, r: 24, speedX: -0.12, speedY: 0.16, phase: 1.2 },
      { el: document.getElementById("blob-c"), x: 20, y: 60, r: 20, speedX: 0.14, speedY: -0.13, phase: 2.4 },
      { el: document.getElementById("blob-d"), x: 75, y: 65, r: 22, speedX: -0.16, speedY: -0.11, phase: 0.7 },
      { el: document.getElementById("blob-e"), x: 50, y: 45, r: 16, speedX: 0.11, speedY: 0.19, phase: 3.5 },
      { el: document.getElementById("blob-f"), x: 85, y: 40, r: 14, speedX: -0.19, speedY: 0.14, phase: 1.9 },
    ];

    function animate() {
      t += 0.008;
      blobs.forEach((b) => {
        if (!b.el) return;
        const nx = b.x + Math.sin(t * b.speedX * 10 + b.phase) * 14;
        const ny = b.y + Math.cos(t * b.speedY * 10 + b.phase) * 12;
        const nr = b.r + Math.sin(t * 0.7 + b.phase) * 3;
        b.el.setAttribute("cx", `${nx}%`);
        b.el.setAttribute("cy", `${ny}%`);
        b.el.setAttribute("r", `${nr}%`);
      });
      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <svg
        ref={svgRef}
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="ether-goo" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>

        <g filter="url(#ether-goo)" opacity="0.55">
          <circle id="blob-a" cx="30%" cy="30%" r="18%" fill="#90D6F9" />
          <circle id="blob-b" cx="65%" cy="20%" r="24%" fill="#A3E4FA" />
          <circle id="blob-c" cx="20%" cy="60%" r="20%" fill="#FFBCD9" />
          <circle id="blob-d" cx="75%" cy="65%" r="22%" fill="#FFA8C5" />
          <circle id="blob-e" cx="50%" cy="45%" r="16%" fill="#90D6F9" />
          <circle id="blob-f" cx="85%" cy="40%" r="14%" fill="#FFBCD9" />
        </g>
      </svg>
    </div>
  );
}
