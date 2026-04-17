"use client";

import { motion } from "framer-motion";
import { whyCards } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WhyInternWin() {
  return (
    <section className="section-padding bg-blue-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(30,92,190,0.15)_0%,transparent_70%)]" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-bright/10 border border-blue-bright/25 text-blue-glow mb-4">
            Why Choose Us
          </span>
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Built for Your{" "}
            <span className="gradient-text-orange">Success</span>
          </h2>
          <p className="text-grey-400 text-lg">
            We've reimagined internships to focus on outcomes, not just completion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {whyCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "p-6 rounded-2xl border transition-all hover:-translate-y-1",
                card.variant === "orange"
                  ? "bg-orange-main/5 border-orange-main/20 hover:border-orange-main/40"
                  : "bg-white/5 border-white/10 hover:border-blue-bright/30"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4",
                card.variant === "orange"
                  ? "bg-gradient-to-br from-orange-main to-orange-light"
                  : "bg-gradient-to-br from-blue-main to-blue-bright"
              )}>
                {card.icon}
              </div>
              <h3 className="font-syne font-bold text-lg text-white mb-2">{card.title}</h3>
              <p className="text-grey-400 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}