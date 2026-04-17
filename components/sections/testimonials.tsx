"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="section-padding bg-grey-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-bright/10 border border-blue-bright/25 text-blue-main mb-4">
            Success Stories
          </span>
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl text-blue-deep mb-4">
            Loved by{" "}
            <span className="text-blue-main">50,000+ Students</span>
          </h2>
          <p className="text-grey-600 text-lg">
            Real outcomes from real learners who transformed their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-grey-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? "text-orange-main fill-orange-main" : "text-grey-300"}`}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-grey-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-main to-orange-main flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-blue-deep">{testimonial.author}</div>
                  <div className="text-sm text-grey-500">
                    {testimonial.role}
                    {testimonial.company && <span className="ml-1">@ {testimonial.company}</span>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}