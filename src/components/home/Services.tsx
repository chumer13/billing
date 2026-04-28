"use client";

import Link from "next/link";
import {
  TrendingUp, FileText, Code2, ShieldCheck, BadgeCheck, LayoutDashboard,
  ArrowRight, type LucideIcon
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const serviceCards: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Revenue Cycle Management",
    description: "Full end-to-end RCM from claim submission to payment posting and reporting.",
    icon: TrendingUp,
  },
  {
    title: "Medical Billing Services",
    description: "Transparent billing with real-time tracking and 1M+ payer network access.",
    icon: FileText,
  },
  {
    title: "Medical Coding",
    description: "Certified coders for CPT, ICD-10, and HCPCS across 50+ specialties.",
    icon: Code2,
  },
  {
    title: "Denial Management",
    description: "Root-cause analysis and automated appeals to permanently reduce denials.",
    icon: ShieldCheck,
  },
  {
    title: "Physician Credentialing",
    description: "Full enrollment with all major payers to prevent payment delays.",
    icon: BadgeCheck,
  },
  {
    title: "Practice Management",
    description: "Integrated scheduling, staff management, and real-time analytics dashboards.",
    icon: LayoutDashboard,
  },
];

const serviceAccents = [
  { iconBg: "bg-[#00DFC0]/[0.18]", iconBorder: "border-[#00DFC0]/40", iconHoverBg: "group-hover:bg-[#00DFC0]/[0.28]", iconHoverBorder: "group-hover:border-[#00DFC0]/60", iconColor: "text-[#00DFC0]", titleHover: "group-hover:text-[#00DFC0]", learnMore: "text-[#00DFC0]", featuredBg: "rgba(0,223,192,0.05)", topBar: "from-[#00DFC0]/60 via-[#00DFC0] to-[#00DFC0]/60", leftBar: "bg-[#00DFC0]", cardGlow: "rgba(0,223,192,0.08)" },
  { iconBg: "bg-sky-400/[0.18]", iconBorder: "border-sky-400/40", iconHoverBg: "group-hover:bg-sky-400/[0.28]", iconHoverBorder: "group-hover:border-sky-400/60", iconColor: "text-sky-400", titleHover: "group-hover:text-sky-400", learnMore: "text-sky-400", featuredBg: "", topBar: "", leftBar: "bg-sky-400", cardGlow: "rgba(56,189,248,0.08)" },
  { iconBg: "bg-violet-400/[0.18]", iconBorder: "border-violet-400/40", iconHoverBg: "group-hover:bg-violet-400/[0.28]", iconHoverBorder: "group-hover:border-violet-400/60", iconColor: "text-violet-400", titleHover: "group-hover:text-violet-400", learnMore: "text-violet-400", featuredBg: "", topBar: "", leftBar: "bg-violet-400", cardGlow: "rgba(139,92,246,0.08)" },
  { iconBg: "bg-rose-400/[0.18]", iconBorder: "border-rose-400/40", iconHoverBg: "group-hover:bg-rose-400/[0.28]", iconHoverBorder: "group-hover:border-rose-400/60", iconColor: "text-rose-400", titleHover: "group-hover:text-rose-400", learnMore: "text-rose-400", featuredBg: "", topBar: "", leftBar: "bg-rose-400", cardGlow: "rgba(244,63,94,0.08)" },
  { iconBg: "bg-amber-400/[0.18]", iconBorder: "border-amber-400/40", iconHoverBg: "group-hover:bg-amber-400/[0.28]", iconHoverBorder: "group-hover:border-amber-400/60", iconColor: "text-amber-400", titleHover: "group-hover:text-amber-400", learnMore: "text-amber-400", featuredBg: "", topBar: "", leftBar: "bg-amber-400", cardGlow: "rgba(245,158,11,0.08)" },
  { iconBg: "bg-lime-400/[0.18]", iconBorder: "border-lime-400/40", iconHoverBg: "group-hover:bg-lime-400/[0.28]", iconHoverBorder: "group-hover:border-lime-400/60", iconColor: "text-lime-400", titleHover: "group-hover:text-lime-400", learnMore: "text-lime-400", featuredBg: "", topBar: "", leftBar: "bg-lime-400", cardGlow: "rgba(163,230,53,0.08)" },
];

export function Services() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/[0.06] text-violet-400 text-[0.7rem] font-semibold tracking-widest uppercase mb-4">
            <span className="w-1 h-1 rounded-full bg-violet-400" />
            What We Do
          </div>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2
                className="font-display font-bold text-white leading-[1.08] mb-3"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
              >
                Everything Your Revenue Cycle Needs
              </h2>
              <p className="text-[#64748B] text-base leading-[1.7] max-w-lg">
                From claim submission to collections, we handle every step with certified experts and proven processes.
              </p>
            </div>
            <Link
              href="/services"
              className="group text-sm text-violet-400 hover:text-white transition-colors flex items-center gap-2 shrink-0 font-medium"
            >
              View all 21 services
              <span className="w-6 h-6 rounded-full border border-violet-400/30 flex items-center justify-center group-hover:bg-violet-400/10 transition-colors">
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </AnimatedSection>

        {/* Bento grid */}
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#00DFC0]/30 via-violet-400/40 to-amber-400/30" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.04)" }}>
            {serviceCards.map((service, i) => {
              const Icon = service.icon;
              const accent = serviceAccents[i];
              const isFeatured = i === 0;
              return (
                <AnimatedSection key={service.title} delay={Math.min(i, 3) * 0.06}>
                  <div
                    className="group relative p-8 h-full transition-all duration-300 cursor-pointer overflow-hidden card-border-spin hover:-translate-y-1"
                    style={{ background: isFeatured ? accent.featuredBg || "rgba(11,22,40,0.95)" : "rgba(11,22,40,0.95)" }}
                  >
                    {/* Always-visible colored left bar */}
                    <div className={`absolute top-0 left-0 bottom-0 w-[3px] ${accent.leftBar} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                    {/* Ambient card glow from top-left */}
                    <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-500" style={{ background: accent.cardGlow.replace('0.08','0.6') }} />
                    {isFeatured && (
                      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accent.topBar}`} />
                    )}

                    <div className="relative z-10">
                      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${accent.iconBg} ${accent.iconBorder} ${accent.iconHoverBg} ${accent.iconHoverBorder}`}>
                        <Icon className={`w-5 h-5 ${accent.iconColor}`} />
                      </div>
                      <h3
                        className={`font-semibold text-white mb-2.5 transition-colors duration-200 ${accent.titleHover}`}
                        style={{ fontSize: "1.0625rem", letterSpacing: "-0.01em" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[#64748B] text-sm leading-[1.75] group-hover:text-[#94A3B8] transition-colors duration-200">
                        {service.description}
                      </p>
                      <div className={`mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-70 transition-all duration-200 text-xs font-medium ${accent.learnMore}`}>
                        Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
