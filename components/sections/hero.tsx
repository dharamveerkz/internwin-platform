"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-blue-deep overflow-hidden pt-20 md:pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(30,92,190,0.25)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_70%,rgba(249,115,22,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(13,33,68,0.8)_0%,transparent_80%)]" />
      </div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 container py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <Badge variant="outline" className="mb-7 bg-blue-bright/10 border-blue-bright/30 text-blue-glow gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-main animate-pulse" />
              <span className="text-sm font-medium">New: ABC Bank Credits Now Live</span>
            </Badge>

            <h1 className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight mb-5">
              Win Your Career with{" "}
              <em className="text-orange-main not-italic">Verified</em>{" "}
              <span className="gradient-text-blue">
                Internships
              </span>
            </h1>

            <p className="text-grey-400 text-lg md:text-xl leading-relaxed mb-9 max-w-lg">
              Build <strong className="text-blue-glow">real projects</strong>, earn{" "}
              <strong className="text-blue-glow">industry-recognized certificates</strong>, 
              and get <strong className="text-blue-glow">placed</strong> with our mentor-guided programs.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="group">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 md:gap-12">
              {[
                { value: "50K+", label: "Students Trained" },
                { value: "94", label: "Placement Rate", suffix: "%" },
                { value: "500+", label: "Hiring Partners" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-syne font-extrabold text-2xl md:text-3xl text-white">
                    {stat.value}
                    {stat.suffix && <span className="text-orange-main">{stat.suffix}</span>}
                  </div>
                  <div className="text-grey-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 right-0 p-6 rounded-2xl bg-gradient-to-br from-blue-main/30 to-blue-dark/70 backdrop-blur-xl border border-white/10 shadow-2xl"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-grey-400 mb-3">
                  Active Internship
                </div>
                <h3 className="font-syne font-bold text-xl text-white mb-2">
                  Full-Stack Web Development
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["React", "Node.js", "MongoDB"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-bright/15 text-blue-glow border border-blue-bright/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
                  <div className="h-full w-[68%] bg-gradient-to-r from-blue-bright to-orange-main rounded-full" />
                </div>
                <div className="text-xs text-grey-400">68% completed • 12 days left</div>
              </motion.div>

              {/* Floating Mini Card 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-8 top-64 w-[72%] p-4 rounded-xl bg-orange-main/15 border border-orange-main/20 backdrop-blur-sm"
              >
                <div className="text-xs text-grey-400 mb-1">Credits Earned</div>
                <div className="font-syne font-bold text-lg text-white">
                  420 <span className="text-orange-light">ABC</span>
                </div>
              </motion.div>

              {/* Floating Mini Card 2 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 top-76 w-[60%] p-4 rounded-xl bg-blue-bright/12 backdrop-blur-sm border border-blue-bright/20"
              >
                <div className="text-xs text-grey-400 mb-1">Next Session</div>
                <div className="font-syne font-bold text-white">Live in 2h 15m</div>
              </motion.div>

              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-bright/20 to-orange-main/20 rounded-3xl blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}