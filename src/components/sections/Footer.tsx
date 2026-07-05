import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Container from "@/components/ui/Container";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  Company: [
    { label: "Blog", href: "/blog" },
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#signup" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Status", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@vieent.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                V
              </div>
              <span className="text-lg font-semibold text-text-primary">
                Vieent
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
              Modern analytics platform for real-time insights, beautiful
              dashboards, and data-driven decisions.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-gray-100 hover:text-text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-3 text-sm font-semibold text-text-primary">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Vieent. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
