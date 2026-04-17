"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Search, Bell, Menu, X, Sun, Moon, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    {
      label: "Internships",
      href: "#courses",
      dropdown: [
        { label: "15 Days Sprint", href: "/internships/15-days" },
        { label: "1 Month Immersion", href: "/internships/1-month" },
        { label: "6 Months Capstone", href: "/internships/6-months" },
        { label: "By Tech Stack", href: "/internships/tech" },
      ],
    },
    { label: "Skill Bootcamps", href: "/bootcamps" },
    { label: "Placements", href: "/placements" },
    { label: "Doubt Session", href: "/doubts" },
    {
      label: "Resources",
      href: "#resources",
      dropdown: [
        { label: "Blogs", href: "/blog" },
        { label: "Free Workshops", href: "/workshops" },
      ],
    },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
          isScrolled || isMobileMenuOpen
            ? "bg-blue-deep/95 backdrop-blur-xl border-b border-blue-bright/10"
            : "bg-transparent"
        )}
      >
        <div className="container h-16 md:h-17 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-main to-orange-main flex items-center justify-center font-syne font-extrabold text-white text-lg shadow-lg shadow-orange-main/30 group-hover:shadow-orange-main/50 transition-shadow">
              IW
            </div>
            <span className="font-syne font-extrabold text-xl text-white tracking-tight">
              Intern<span className="text-orange-main">Win</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-white bg-blue-bright/15"
                      : "text-grey-400 hover:text-white hover:bg-blue-bright/10"
                  )}
                >
                  {link.label}
                  {link.dropdown && <span className="ml-1 text-xs">▾</span>}
                </Link>
                
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-1 w-56 py-2 bg-blue-dark/95 backdrop-blur-xl border border-blue-bright/15 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl shadow-blue-deep/50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-grey-300 hover:text-white hover:bg-blue-main/20 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-lg text-grey-400 hover:text-white hover:bg-blue-bright/10 transition-colors"
              aria-label="Search"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-lg text-grey-400 hover:text-white hover:bg-blue-bright/10 transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="w-4.5 h-4.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute w-4.5 h-4.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            {/* Notifications */}
            <button className="relative p-2.5 rounded-lg text-grey-400 hover:text-white hover:bg-blue-bright/10 transition-colors" aria-label="Notifications">
              <Bell className="w-4.5 h-4.5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-main rounded-full animate-pulse" />
            </button>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2 ml-2">
              <Button variant="ghost" size="sm" className="text-grey-300">
                <User className="w-4 h-4 mr-1.5" />
                Log in
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-orange-main to-orange-light hover:shadow-orange-main/35">
                Sign up
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-blue-bright/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-blue-deep/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative h-full overflow-y-auto px-6 py-20">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-3 text-lg font-medium text-grey-300 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-1 space-y-1 pb-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block py-2 text-sm text-grey-400 hover:text-white transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-blue-bright/10 space-y-3">
                <Button variant="outline" className="w-full justify-center" size="lg">
                  Log in
                </Button>
                <Button className="w-full justify-center bg-gradient-to-r from-orange-main to-orange-light" size="lg">
                  Sign up free
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div className="absolute inset-0 bg-blue-deep/80 backdrop-blur-sm" onClick={() => setIsSearchOpen(false)} />
          <div className="relative w-full max-w-2xl bg-blue-dark border border-blue-bright/20 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 p-4 border-b border-blue-bright/10">
              <Search className="w-5 h-5 text-grey-400" />
              <input
                type="text"
                placeholder="Search courses, skills, or topics..."
                className="flex-1 bg-transparent text-white placeholder-grey-500 outline-none text-lg"
                autoFocus
                onKeyDown={(e) => e.key === "Escape" && setIsSearchOpen(false)}
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1.5 rounded-lg text-grey-400 hover:text-white hover:bg-blue-bright/10"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              <p className="text-sm text-grey-500 px-2 mb-3">Recent searches</p>
              {/* Search results would be populated here dynamically */}
              <div className="space-y-2">
                {["Web Development", "AI/ML", "Data Science"].map((term) => (
                  <button
                    key={term}
                    className="w-full text-left px-3 py-2 rounded-lg text-grey-300 hover:bg-blue-bright/10 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}