"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { specialties } from "@/lib/specialties-data";
import {
  ArrowRight, type LucideIcon,
  Stethoscope, Heart, Activity, Bone, Sparkles,
  Brain, SmilePlus, CircleDot, Scan, Scissors,
  Clock, Baby, Users, Pill, Eye,
  Radiation, Zap, Wind, Ear, Flame,
  Footprints, Syringe, Dumbbell, AlignVerticalSpaceAround
} from "lucide-react";

const specialtyIconMap: Record<string, LucideIcon> = {
  Stethoscope, Heart, Activity, Bone, Sparkles,
  Brain, SmilePlus, CircleDot, Scan, Scissors,
  Clock, Baby, Users, Pill, Eye,
  Radiation, Zap, Wind, Ear, Flame,
  Footprints, Syringe, Dumbbell, AlignVerticalSpaceAround,
};

export function Specialties() {
  const displaySpecialties = specialties.slice(0, 20);

  return (
    <section className="py-20 bg-[#070E1A]">
      <div className="container mx-auto">
        <AnimatedSection className="mb-10">
          <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-lime-400 mb-3">
            Specialties
          </p>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2
              className="font-display font-bold text-white leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.025em" }}
            >
              Built for Your Specialty
            </h2>
            <Link
              href="/who-we-serve"
              className="text-[0.875rem] text-[#94A3B8] hover:text-white transition-colors group flex items-center gap-1.5 shrink-0"
            >
              And 30+ more
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="border border-[#1E3A5F] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-[#1E3A5F]">
            {displaySpecialties.map((spec, i) => {
              const Icon = specialtyIconMap[spec.iconName] ?? Stethoscope;
              return (
                <AnimatedSection key={spec.name} delay={Math.min(i, 4) * 0.04}>
                  <div className="bg-[#070E1A] flex items-center gap-3 px-5 py-4 group hover:bg-[#0F1E35] hover:border-teal/10 transition-all duration-200 h-full cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-lime-400/[0.07] border border-lime-400/[0.1] flex items-center justify-center shrink-0 group-hover:bg-lime-400/[0.13] group-hover:border-lime-400/20 group-hover:shadow-[0_0_8px_rgba(132,204,22,0.15)] transition-all duration-200">
                      <Icon className="w-3.5 h-3.5 text-lime-400" />
                    </div>
                    <span className="text-sm text-[#94A3B8] group-hover:text-white transition-colors truncate">
                      {spec.name}
                    </span>
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
