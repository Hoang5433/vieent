"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
              V
            </div>
            <span className="text-lg font-semibold text-text-primary">
              Vieent
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Get started</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex items-center justify-center p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-text-primary" />
            ) : (
              <Menu className="h-5 w-5 text-text-primary" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-gray-100 hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2 border-t border-border pt-2">
                  <Button variant="ghost" size="sm" className="w-full">
                    Log in
                  </Button>
                </li>
                <li>
                  <Button size="sm" className="w-full">
                    Get started
                  </Button>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
