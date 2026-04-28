"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  solutions: {
    title: "Solutions",
    links: [
      { label: "Revenue Cycle Management", href: "/services" },
      { label: "Medical Billing", href: "/services" },
      { label: "Medical Coding", href: "/services" },
      { label: "Credentialing", href: "/services" },
      { label: "Practice Management", href: "/services" },
      { label: "EHR", href: "/services" },
      { label: "Telehealth", href: "/services" },
    ],
  },
  whoWeServe: {
    title: "Who We Serve",
    links: [
      { label: "Small Practices", href: "/who-we-serve" },
      { label: "Large Groups", href: "/who-we-serve" },
      { label: "Health Systems", href: "/who-we-serve" },
      { label: "Billing Companies", href: "/who-we-serve" },
      { label: "Academic Institutions", href: "/who-we-serve" },
    ],
  },

  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Careers", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/about" },
      { label: "Terms of Service", href: "/about" },
    ],
  },
};

const socialLinks = [
  { icon: Mail, href: "mailto:Info@billingalign.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070E1A]">
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Main footer */}
      <div className="container mx-auto py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-5">
              <Image src="/logo.svg" alt="BillingAlign" width={180} height={40} className="h-9 w-auto" />
            </Link>

            <p className="text-sm text-[#64748B] leading-[1.75] mb-6 max-w-[220px]">
              Full-service medical billing and revenue cycle management for 50+ healthcare specialties.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2 mb-7">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-[#64748B] hover:text-white hover:border-teal/30 hover:bg-teal/[0.06] transition-all duration-200"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
              <a
                href="https://www.linkedin.com/company/billingalign"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-[#64748B] hover:text-white hover:border-teal/30 hover:bg-teal/[0.06] transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Contact info */}
            <div className="space-y-2">
              <a href="mailto:Info@billingalign.com" className="flex items-center gap-2 text-sm text-[#64748B] hover:text-teal transition-colors">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                Info@billingalign.com
              </a>
              <a href="tel:+18552254467" className="flex items-center gap-2 text-sm text-[#64748B] hover:text-teal transition-colors">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                855-225-4467
              </a>
              <div className="flex items-start gap-2 text-sm text-[#64748B]">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>1712 Pioneer Ave, Suite 500<br />Cheyenne, WY 82001</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-white/60 mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#64748B] hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/[0.05]">
        <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#475569]">
            &copy; 2026 BillingAlign, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-[#64748B] font-medium">All systems operational</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-teal/20 bg-teal/[0.04]">
              <div className="w-1.5 h-1.5 rounded-full bg-teal" />
              <span className="text-[11px] text-teal font-medium">HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
