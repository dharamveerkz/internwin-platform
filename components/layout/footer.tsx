import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FooterColumn } from "@/types";

export function Footer() {
  const columns: FooterColumn[] = [
    {
      title: "Programs",
      links: [
        { label: "15-Day Sprint", href: "/internships/15-days" },
        { label: "1-Month Immersion", href: "/internships/1-month" },
        { label: "6-Month Capstone", href: "/internships/6-months" },
        { label: "Skill Bootcamps", href: "/bootcamps" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Press", href: "/press" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Refund Policy", href: "/refund" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact Sales", href: "/contact" },
        { label: "Partner With Us", href: "/partners" },
        { label: "Student Success", href: "/success" },
      ],
    },
  ];

  return (
    <footer className="bg-blue-deep text-grey-400 py-14 md:py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-main to-orange-main flex items-center justify-center font-syne font-extrabold text-white text-sm">
                IW
              </div>
              <span className="font-syne font-extrabold text-lg text-white">
                Intern<span className="text-orange-main">Win</span>
              </span>
            </Link>
            <p className="text-sm mb-4">
              Empowering students with industry-ready internships and verified
              credentials.
            </p>
            <div className="flex gap-2">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Youtube, href: "#", label: "YouTube" },
                { Icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 py-6 border-t border-white/10 mb-8">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-blue-glow" />
            <a
              href="tel:+919876543210"
              className="hover:text-white transition-colors text-sm"
            >
              +91 98765 43210
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-blue-glow" />
            <a
              href="mailto:support@internwin.com"
              className="hover:text-white transition-colors text-sm"
            >
              support@internwin.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-blue-glow" />
            <span className="text-sm">Bangalore, India</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} InternWin Platform. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-xs">
              Not-for-Profit Initiative
            </Badge>
            <Link href="/verify" className="hover:text-white transition-colors">
              Verify Certificate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
