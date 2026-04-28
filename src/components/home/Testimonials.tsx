"use client";

import { Star, Quote, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote:
      "Switching to BillingAlign cut our denial rate from 12% to under 3% in the first 90 days. Their team is incredibly responsive.",
    name: "Dr. Sarah Mitchell",
    practice: "Family Practice",
    location: "Austin, TX",
    initials: "SM",
    gradient: "from-[#00DFC0]/40 to-sky-400/25",
    quoteColor: "text-[#00DFC0]/30 group-hover:text-[#00DFC0]/50",
  },
  {
    quote:
      "We were losing $40K/month to billing errors before BillingAlign. They fixed our revenue cycle completely within 60 days.",
    name: "Dr. James Okafor",
    practice: "Internal Medicine",
    location: "Chicago, IL",
    initials: "JO",
    gradient: "from-violet-500/40 to-rose-500/25",
    quoteColor: "text-violet-400/30 group-hover:text-violet-400/50",
  },
  {
    quote:
      "The real-time dashboard is a game changer. I can see exactly where every claim is at any point. Absolute transparency.",
    name: "Maria Chen",
    practice: "Pacific Orthopedics",
    location: "Seattle, WA",
    initials: "MC",
    gradient: "from-amber-400/40 to-orange-400/25",
    quoteColor: "text-amber-400/30 group-hover:text-amber-400/50",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-rose-400/25 bg-rose-400/[0.06] text-rose-400 text-[0.7rem] font-semibold tracking-widest uppercase mb-4">
            <span className="w-1 h-1 rounded-full bg-rose-400" />
            Testimonials
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2
              className="font-display font-bold text-white leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
            >
              Practices That Trust BillingAlign
            </h2>
            {/* Aggregate rating */}
            <div className="flex items-center gap-3 shrink-0 px-4 py-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02]">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <div className="h-4 w-px bg-white/[0.08]" />
              <div>
                <span className="text-white text-sm font-bold">4.9</span>
                <span className="text-[#64748B] text-xs ml-1">/ 5.0</span>
              </div>
              <div className="h-4 w-px bg-white/[0.08]" />
              <div className="flex items-center gap-1 text-[#64748B] text-xs">
                <TrendingUp className="w-3 h-3 text-amber-400" />
                500+ reviews
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <div className="group relative rounded-2xl p-7 h-full flex flex-col border border-white/[0.07] overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1 card-border-spin"
                style={{ background: "rgba(11,22,40,0.8)", backdropFilter: "blur(8px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }}>
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${t.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

                {/* Quote icon */}
                <Quote className={`w-6 h-6 mb-3 transition-colors ${t.quoteColor}`} />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#94A3B8] text-sm leading-[1.8] mb-6 flex-1 group-hover:text-[#B0BAC9] transition-colors">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center shrink-0 border border-white/[0.08]`}>
                    <span className="text-white text-xs font-bold font-display">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-[#64748B] text-xs">
                      {t.practice} &middot; {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

