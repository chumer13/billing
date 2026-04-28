"use client";

import { Eye, Award, Target, Headphones, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const differentiators = [
  {
    title: "Full Transparency",
    description: "Real-time dashboard access to every queue, every claim, every dollar. No black boxes.",
    icon: Eye,
    stat: "100%",
    statLabel: "Claim visibility",
  },
  {
    title: "Certified Coders",
    description: "Every claim submitted by our credentialed billing and coding professionals.",
    icon: Award,
    stat: "100%",
    statLabel: "Certified staff",
  },
  {
    title: "94%+ First-Pass Rate",
    description: "Our billing rule engine scrubs every claim against payer-specific rules before submission.",
    icon: Target,
    stat: "94%+",
    statLabel: "First-pass rate",
  },
  {
    title: "White-Glove Onboarding",
    description: "Dedicated implementation team gets you live in 48 hours with zero disruption to your practice.",
    icon: Headphones,
    stat: "48h",
    statLabel: "Time to go live",
  },
];

const cardAccents = [
  {
    stat: "text-[#00DFC0]", statGlow: "0 0 20px rgba(0,223,192,0.4)",
    iconBg: "bg-[#00DFC0]/[0.15]", iconBorder: "border-[#00DFC0]/30", icon: "text-[#00DFC0]",
    hoverBorder: "border-[#00DFC0]/25 group-hover:border-[#00DFC0]/60",
    bottomVia: "via-[#00DFC0]", topBar: "bg-[#00DFC0]",
    hoverShadow: "shadow-[0_0_12px_rgba(0,223,192,0.2)] group-hover:shadow-[0_0_24px_rgba(0,223,192,0.35)]",
    cardGlow: "rgba(0,223,192,0.07)",
  },
  {
    stat: "text-violet-400", statGlow: "0 0 20px rgba(139,92,246,0.4)",
    iconBg: "bg-violet-400/[0.15]", iconBorder: "border-violet-400/30", icon: "text-violet-400",
    hoverBorder: "border-violet-400/25 group-hover:border-violet-400/60",
    bottomVia: "via-violet-400", topBar: "bg-violet-400",
    hoverShadow: "shadow-[0_0_12px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]",
    cardGlow: "rgba(139,92,246,0.07)",
  },
  {
    stat: "text-amber-400", statGlow: "0 0 20px rgba(245,158,11,0.4)",
    iconBg: "bg-amber-400/[0.15]", iconBorder: "border-amber-400/30", icon: "text-amber-400",
    hoverBorder: "border-amber-400/25 group-hover:border-amber-400/60",
    bottomVia: "via-amber-400", topBar: "bg-amber-400",
    hoverShadow: "shadow-[0_0_12px_rgba(245,158,11,0.2)] group-hover:shadow-[0_0_24px_rgba(245,158,11,0.35)]",
    cardGlow: "rgba(245,158,11,0.07)",
  },
  {
    stat: "text-rose-400", statGlow: "0 0 20px rgba(244,63,94,0.4)",
    iconBg: "bg-rose-400/[0.15]", iconBorder: "border-rose-400/30", icon: "text-rose-400",
    hoverBorder: "border-rose-400/25 group-hover:border-rose-400/60",
    bottomVia: "via-rose-400", topBar: "bg-rose-400",
    hoverShadow: "shadow-[0_0_12px_rgba(244,63,94,0.2)] group-hover:shadow-[0_0_24px_rgba(244,63,94,0.35)]",
    cardGlow: "rgba(244,63,94,0.07)",
  },
];

const badges = [
  { label: "HIPAA Compliant", color: "border-[#00DFC0]/20 hover:border-[#00DFC0]/35 hover:bg-[#00DFC0]/[0.04]", icon: "text-[#00DFC0]" },
  { label: "Certified Coders", color: "border-violet-500/20 hover:border-violet-500/35 hover:bg-violet-500/[0.04]", icon: "text-violet-400" },
  { label: "HITECH Compliant", color: "border-amber-400/20 hover:border-amber-400/35 hover:bg-amber-400/[0.04]", icon: "text-amber-400" },
];

export function WhyUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#070E1A]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-violet-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-rose-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#00DFC0]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/[0.07] text-violet-400 text-[0.7rem] font-semibold tracking-widest uppercase mb-4">
            <span className="w-1 h-1 rounded-full bg-violet-400" />
            Why BillingAlign
          </div>
          <h2
            className="font-display font-bold text-white leading-[1.08]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
          >
            The BillingAlign Difference
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            const accent = cardAccents[i];
            return (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className={`group relative rounded-2xl p-6 border overflow-hidden transition-all duration-300 ${accent.hoverBorder} hover:-translate-y-2 card-border-spin`}
                  style={{ background: "rgba(11,22,40,0.9)", boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05)` }}>
                  {/* Always-visible colored top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${accent.topBar} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />
                  {/* Corner ambient glow */}
                  <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500" style={{ background: accent.cardGlow.replace('0.07','0.5') }} />
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${accent.bottomVia}/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className={`text-[1.75rem] font-display font-extrabold mb-1 leading-none ${accent.stat}`}
                    style={{ textShadow: accent.statGlow }}>
                    {item.stat}
                  </div>
                  <div className="text-[0.7rem] text-[#64748B] uppercase tracking-wider mb-5">{item.statLabel}</div>

                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center mb-4 transition-all ${accent.iconBg} ${accent.iconBorder} ${accent.hoverShadow}`}>
                    <Icon className={`w-[1.125rem] h-[1.125rem] ${accent.icon}`} />
                  </div>
                  <h3 className="font-semibold text-white text-[0.9375rem] mb-2" style={{ letterSpacing: "-0.01em" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-[1.7] group-hover:text-[#94A3B8] transition-colors">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Compliance badges */}
        <AnimatedSection delay={0.2} className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border bg-white/[0.02] transition-all duration-200 cursor-default ${badge.color}`}
            >
              <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${badge.icon}`} />
              <span className="text-[#94A3B8] text-xs font-medium">{badge.label}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
