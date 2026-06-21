"use client";

export default function AnimatedBackground() { 
    const particles = [
  { left: "10%", top: "20%", delay: "1s", duration: "10s" },
  { left: "25%", top: "70%", delay: "3s", duration: "12s" },
  { left: "40%", top: "35%", delay: "2s", duration: "9s" },
  { left: "55%", top: "80%", delay: "5s", duration: "14s" },
  { left: "70%", top: "25%", delay: "4s", duration: "11s" },
  { left: "85%", top: "60%", delay: "6s", duration: "13s" },
  { left: "15%", top: "90%", delay: "2s", duration: "15s" },
  { left: "35%", top: "10%", delay: "7s", duration: "10s" },
  { left: "60%", top: "45%", delay: "3s", duration: "12s" },
  { left: "90%", top: "15%", delay: "1s", duration: "11s" },
];
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Grid */}
      <div className="absolute inset-0 ai-grid opacity-20"></div>

      {/* Glow Orbs */}

      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>
      <div className="aurora aurora3"></div>

      {/* Floating Particles */}

      {particles.map((particle, i) => (
  <span
    key={i}
    className="particle"
    style={{
      left: particle.left,
      top: particle.top,
      animationDelay: particle.delay,
      animationDuration: particle.duration,
    }}
  />
))}
    </div>
  );
}