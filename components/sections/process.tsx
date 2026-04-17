"use client";

import { motion } from "framer-motion";
import { steps } from "@/lib/constants";

export function Process() {
  return (
    <section className="section-padding bg-grey-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-bright/10 border border-blue-bright/25 text-blue-main mb-4">
            How It Works
          </span>
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl text-blue-deep mb-4">
            Your Path to{" "}
            <span className="text-blue-main">Career Success</span>
          </h2>
          <p className="text-grey-600 text-lg">
            A structured journey designed for maximum learning and placement outcomes.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-gradient-to-r from-blue-main via-orange-main to-blue-bright" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center group"
              >
                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-main to-blue-bright flex items-center justify-center text-white font-syne font-extrabold text-xl shadow-lg shadow-blue-main/30 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="font-syne font-bold text-lg text-blue-deep mb-2">{step.title}</h3>
                <p className="text-grey-600 text-sm px-4">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}