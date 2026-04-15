"use client";

import Link from "next/link";
import { Phone, Mail, Calendar, ArrowRight, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const actions = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with a revenue cycle expert — no wait, no scripts.",
    cta: "855-225-4467",
    href: "tel:+18552254467",
    gradient: "from-teal/20 to-emerald-500/10",
    iconBg: "bg-teal/[0.1] border-teal/[0.2]",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your details and we'll respond within a few hours.",
    cta: "Info@billingalign.com",
    href: "mailto:Info@billingalign.com",
    gradient: "from-indigo-500/20 to-purple-500/10",
    iconBg: "bg-indigo-500/[0.1] border-indigo-500/[0.2]",
  },
  {
    icon: Calendar,
    title: "Book a Meeting",
    description: "Schedule a free 30-min demo at a time that works for you.",
    cta: "Pick a time slot →",
    href: "/contact",
    gradient: "from-teal/15 to-cyan-500/10",
    iconBg: "bg-teal/[0.1] border-teal/[0.2]",
  },
];

export function CTABanner() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#070E1A]" />
      <div className="absolute inset-0 bg-gradient-to-br from-teal/[0.06] via-transparent to-indigo-500/[0.05]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="blob blob-teal w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <AnimatedSection className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal/25 bg-teal/[0.06] text-teal text-xs font-semibold tracking-wide uppercase mb-6">
            <Zap className="w-3 h-3" />
            Get Started Today
          </div>
          <h2
            className="font-display font-bold text-white leading-[1.08] mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
          >
            Ready to Stop Leaving{" "}
            <span className="gradient-text">Money on the Table?</span>
          </h2>
          <p className="text-[#64748B] text-base leading-[1.7]">
            Join 500+ practices. Reach us the way that works best for you.
          </p>
        </AnimatedSection>

        {/* Action cards */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">
          {actions.map((action, i) => {
            const Icon = action.icon;
            return (
              <AnimatedSection key={action.title} delay={i * 0.08}>
                <a
                  href={action.href}
                  className="group relative flex flex-col rounded-2xl p-7 border border-white/[0.07] overflow-hidden transition-all duration-300 hover:border-white/[0.15] hover:-translate-y-1 h-full"
                  style={{ background: "rgba(11,22,40,0.85)", backdropFilter: "blur(12px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }}
                >
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${action.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  {/* Hover bg */}
                  <div className="absolute inset-0 bg-teal/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  {/* Corner glow */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal/[0.06] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${action.iconBg} group-hover:shadow-[0_0_16px_rgba(0,201,177,0.2)] transition-all duration-300`}>
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <h3 className="font-display font-semibold text-white text-[1.0625rem] mb-2" style={{ letterSpacing: "-0.015em" }}>
                      {action.title}
                    </h3>
                    <p className="text-[#64748B] text-sm leading-[1.75] mb-5 flex-1 group-hover:text-[#94A3B8] transition-colors">
                      {action.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-teal text-sm font-semibold group-hover:text-white transition-colors">
                      {action.cta}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </a>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Main CTA button */}
        <AnimatedSection delay={0.3} className="flex justify-center">
          <Link href="/contact">
            <Button variant="glow" size="xl">
              Request a Free Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </AnimatedSection>

        <p className="text-center text-xs text-[#475569] mt-5">
          No contracts &middot; HIPAA compliant &middot; Setup in 48 hours
        </p>
      </div>
    </section>
  );
}