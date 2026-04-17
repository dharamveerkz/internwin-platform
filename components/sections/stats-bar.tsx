"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/constants";
import { formatNumber } from "@/lib/utils";

export function StatsBar() {
  return (
    <div className="bg-gradient-to-r from-blue-dark to-blue-mid py-8 md:py-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-syne font-extrabold text-3xl md:text-4xl text-white">
                {formatNumber(stat.value)}
                {stat.suffix && <span className="text-orange-main">{stat.suffix}</span>}
              </div>
              <div className="text-blue-glow text-sm md:text-base font-medium mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}