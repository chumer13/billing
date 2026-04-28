"use client";

import { CalendarCheck, Cog, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Schedule Your Free Consultation",
    description: "We learn about your practice, specialties, payer mix, and pain points to design a custom solution.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "We Handle the Setup",
    description: "Our team manages credentialing, onboarding, and system integration. Go live in as little as 48 hours.",
    icon: Cog,
  },
  {
    number: "03",
    title: "Watch Revenue Grow",
    description: "Real-time reporting, faster payments, and fewer denials, all managed by your dedicated team.",
    icon: Rocket,
  },
];

const stepAccents = [
  {
    text: "text-[#00DFC0]",
    ringBg: "bg-[#00DFC0]/[0.18]", ringBorder: "border-[#00DFC0]/50",
    ringGlow: "shadow-[0_0_10px_rgba(0,223,192,0.3)] group-hover:shadow-[0_0_16px_rgba(0,223,192,0.5)]",
    iconBg: "bg-[#00DFC0]/[0.15]", iconBorder: "border-[#00DFC0]/30",
    iconGlow: "shadow-[0_0_8px_rgba(0,223,192,0.2)] group-hover:shadow-[0_0_18px_rgba(0,223,192,0.4)]",
    hoverBorder: "border-[#00DFC0]/25 group-hover:border-[#00DFC0]/50",
    topBar: "bg-[#00DFC0]",
    cardGlow: "rgba(0,223,192,0.06)",
  },
  {
    text: "text-violet-400",
    ringBg: "bg-violet-400/[0.18]", ringBorder: "border-violet-400/50",
    ringGlow: "shadow-[0_0_10px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_16px_rgba(139,92,246,0.5)]",
    iconBg: "bg-violet-400/[0.15]", iconBorder: "border-violet-400/30",
    iconGlow: "shadow-[0_0_8px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_18px_rgba(139,92,246,0.4)]",
    hoverBorder: "border-violet-400/25 group-hover:border-violet-400/50",
    topBar: "bg-violet-400",
    cardGlow: "rgba(139,92,246,0.06)",
  },
  {
    text: "text-amber-400",
    ringBg: "bg-amber-400/[0.18]", ringBorder: "border-amber-400/50",
    ringGlow: "shadow-[0_0_10px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_16px_rgba(245,158,11,0.5)]",
    iconBg: "bg-amber-400/[0.15]", iconBorder: "border-amber-400/30",
    iconGlow: "shadow-[0_0_8px_rgba(245,158,11,0.2)] group-hover:shadow-[0_0_18px_rgba(245,158,11,0.4)]",
    hoverBorder: "border-amber-400/25 group-hover:border-amber-400/50",
    topBar: "bg-amber-400",
    cardGlow: "rgba(245,158,11,0.06)",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-400/25 bg-sky-400/[0.06] text-sky-400 text-[0.7rem] font-semibold tracking-widest uppercase mb-4">
            <span className="w-1 h-1 rounded-full bg-sky-400" />
            How It Works
          </div>
          <h2
            className="font-display font-bold text-white leading-[1.08]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
          >
            Get Started in 3 Simple Steps
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-[3.25rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px hidden md:block overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#00DFC0]/50 via-violet-400/50 to-amber-400/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            const accent = stepAccents[i];
            return (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className={`group relative rounded-2xl p-8 border overflow-hidden transition-all duration-300 ${accent.hoverBorder} hover:-translate-y-2 card-border-spin`}
                  style={{ background: `rgba(11,22,40,0.9)`, boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05), 0 0 0 0 ${accent.cardGlow}` }}>
                  {/* Always-visible colored top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${accent.topBar} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />
                  {/* Ambient corner glow */}
                  <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-80" style={{ background: accent.cardGlow.replace('0.06', '0.3') }} />

                  <div className="flex items-center justify-between mb-6 mt-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${accent.ringBg} ${accent.ringBorder} ${accent.ringGlow}`}>
                        <span className={`text-[0.65rem] font-bold ${accent.text}`}>{step.number}</span>
                      </div>
                      <span className="text-[0.7rem] font-bold tracking-[0.15em] text-[#475569] uppercase">
                        Step {step.number}
                      </span>
                    </div>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 ${accent.iconBg} ${accent.iconBorder} ${accent.iconGlow}`}>
                      <Icon className={`w-5 h-5 ${accent.text}`} />
                    </div>
                  </div>

                  <h3
                    className="font-semibold text-white mb-3"
                    style={{ fontSize: "1.0625rem", letterSpacing: "-0.015em" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-[1.75] group-hover:text-[#94A3B8] transition-colors">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
