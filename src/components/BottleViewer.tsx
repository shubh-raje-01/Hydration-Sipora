import { motion } from "framer-motion";

export default function BottleViewer() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[1] flex items-center"
      aria-hidden="true"
      style={{ perspective: "900px", left: "38%", opacity: 0.28 }}
    >
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 14, ease: "linear", repeat: Infinity }}
        style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
        className="relative"
      >
        {/* Float animation wrapper */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Shadow under bottle */}
          <div
            className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 rounded-full opacity-20"
            style={{
              width: "90px",
              height: "18px",
              background: "#0F282F",
              filter: "blur(10px)",
            }}
          />

          {/* Bottle SVG — stylised flat with 3D depth via shadow & gradient */}
          <svg
            viewBox="0 0 120 360"
            width="200"
            height="560"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(-16px 24px 40px rgba(15,40,47,0.32)) drop-shadow(4px 8px 16px rgba(144,214,249,0.4))" }}
          >
            <defs>
              {/* Glass body gradient — light to dark teal-blue */}
              <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A3E4FA" stopOpacity="0.5" />
                <stop offset="30%" stopColor="#d0f4ff" stopOpacity="0.9" />
                <stop offset="65%" stopColor="#90D6F9" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0F282F" stopOpacity="0.55" />
              </linearGradient>

              {/* Liquid fill gradient */}
              <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#90D6F9" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#A3E4FA" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0F282F" stopOpacity="0.3" />
              </linearGradient>

              {/* Cap gradient */}
              <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1a3d47" />
                <stop offset="40%" stopColor="#2a5060" />
                <stop offset="100%" stopColor="#0F282F" />
              </linearGradient>

              {/* Neck gradient */}
              <linearGradient id="neckGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b8eeff" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#90D6F9" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#1a3d47" stopOpacity="0.7" />
              </linearGradient>

              <clipPath id="bottleClip">
                <path d="M32,90 Q30,85 30,80 L30,50 Q30,45 35,43 L45,40 L45,30 Q45,20 60,20 Q75,20 75,30 L75,40 L85,43 Q90,45 90,50 L90,80 Q90,85 88,90 Q100,95 100,110 L100,320 Q100,340 60,340 Q20,340 20,320 L20,110 Q20,95 32,90 Z" />
              </clipPath>
            </defs>

            {/* ── Bottle body ── */}
            <path
              d="M32,90 Q30,85 30,80 L30,50 Q30,45 35,43 L45,40 L45,30 Q45,20 60,20 Q75,20 75,30 L75,40 L85,43 Q90,45 90,50 L90,80 Q90,85 88,90 Q100,95 100,110 L100,320 Q100,340 60,340 Q20,340 20,320 L20,110 Q20,95 32,90 Z"
              fill="url(#bodyGrad)"
              stroke="#90D6F9"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />

            {/* Liquid fill — lower 60% */}
            <rect
              x="20" y="190" width="80" height="150"
              fill="url(#liquidGrad)"
              clipPath="url(#bottleClip)"
            />

            {/* Liquid surface ripple line */}
            <path
              d="M22,192 Q40,186 60,192 Q80,198 98,192"
              fill="none"
              stroke="#90D6F9"
              strokeWidth="1.5"
              strokeOpacity="0.7"
            />

            {/* Highlight — left side specular */}
            <ellipse cx="38" cy="200" rx="5" ry="80" fill="white" opacity="0.18" />

            {/* Highlight — center top */}
            <ellipse cx="52" cy="130" rx="4" ry="30" fill="white" opacity="0.22" />

            {/* Brand label area */}
            <rect x="28" y="155" width="64" height="70" rx="8"
              fill="#0F282F" fillOpacity="0.12"
              stroke="#90D6F9" strokeWidth="0.8" strokeOpacity="0.4"
            />
            <text
              x="60" y="180"
              textAnchor="middle"
              fill="#0F282F"
              fillOpacity="0.55"
              fontFamily="sans-serif"
              fontSize="10"
              fontWeight="bold"
              letterSpacing="3"
            >
              SIPORA
            </text>
            <text
              x="60" y="198"
              textAnchor="middle"
              fill="#0F282F"
              fillOpacity="0.35"
              fontFamily="sans-serif"
              fontSize="6"
              letterSpacing="1.5"
            >
              SCENT HYDRATION
            </text>

            {/* ── Neck ── */}
            <path
              d="M45,40 Q45,44 47,46 L47,80 Q47,84 32,90 L88,90 Q73,84 73,80 L73,46 Q75,44 75,40 Z"
              fill="url(#neckGrad)"
              stroke="#90D6F9"
              strokeWidth="0.8"
              strokeOpacity="0.5"
            />

            {/* ── Cap ── */}
            <rect x="40" y="14" width="40" height="28" rx="5"
              fill="url(#capGrad)"
              stroke="#2a5060"
              strokeWidth="1"
            />
            {/* Cap ridges */}
            {[18, 22, 26, 30, 34, 38].map((y) => (
              <line
                key={y} x1="40" y1={y} x2="80" y2={y}
                stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.12"
              />
            ))}
            {/* Cap highlight */}
            <rect x="42" y="16" width="14" height="24" rx="3"
              fill="white" fillOpacity="0.08"
            />

            {/* Bottom ellipse — 3D base */}
            <ellipse cx="60" cy="337" rx="40" ry="8"
              fill="#0F282F" fillOpacity="0.45"
              stroke="#90D6F9" strokeWidth="0.8" strokeOpacity="0.3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
