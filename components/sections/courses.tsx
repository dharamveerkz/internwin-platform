"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Course, DurationValue } from "@/types";
import { cn, formatNumber } from "@/lib/utils";
import { courses, durationOptions } from "@/lib/constants";

export function Courses() {
  const [activeDuration, setActiveDuration] = useState<DurationValue>("all");

  const filteredCourses = activeDuration === "all"
    ? courses
    : courses.filter((c) => c.duration === activeDuration);

  const thumbnailStyles: Record<Course["thumbnail"], string> = {
    blue: "from-blue-dark to-blue-mid",
    "orange-blue": "from-blue-deep to-blue-mid",
    dark: "from-slate-900 to-slate-800",
  };

  return (
    <section id="courses" className="section-padding bg-grey-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <Badge className="mb-4" variant="outline">
            Explore Programs
          </Badge>
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl text-blue-deep mb-4">
            Learn by Building{" "}
            <span className="text-blue-main">Real Projects</span>
          </h2>
          <p className="text-grey-600 text-lg">
            Choose from industry-designed internships with hands-on projects, 
            mentor support, and verified certification.
          </p>
        </div>

        {/* Duration Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {durationOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveDuration(option.value)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all",
                activeDuration === option.value
                  ? "bg-blue-main text-white shadow-lg shadow-blue-main/25"
                  : "bg-white text-grey-600 border border-grey-200 hover:border-blue-main hover:text-blue-main"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDuration}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="group h-full flex flex-col overflow-hidden border-grey-200 hover:border-blue-glow hover:shadow-xl hover:shadow-blue-main/10 transition-all duration-300 hover:-translate-y-1">
                  {/* Thumbnail */}
                  <div className={cn(
                    "relative h-36 flex items-center justify-center bg-gradient-to-br",
                    thumbnailStyles[course.thumbnail]
                  )}>
                    {course.isFree && (
                      <Badge className="absolute top-3 left-3 bg-green-500/90 text-white border-0">
                        Free
                      </Badge>
                    )}
                    <Badge variant="secondary" className="absolute top-3 right-3 bg-orange-main text-white border-0 text-xs">
                      {course.duration.replace("-", " ")}
                    </Badge>
                    <span className="text-5xl opacity-80">{course.icon}</span>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-main mb-1.5">
                      {course.domain}
                    </div>
                    <h3 className="font-syne font-bold text-lg text-blue-deep leading-tight group-hover:text-blue-main transition-colors">
                      {course.name}
                    </h3>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {course.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-medium rounded bg-grey-100 text-grey-600"
                        >
                          {tag}
                        </span>
                      ))}
                      {course.tags.length > 3 && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded bg-grey-100 text-grey-500">
                          +{course.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-grey-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration.replace("-", " ")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-orange-main fill-orange-main" />
                        <span>{course.rating} ({formatNumber(course.reviews)})</span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-grey-100">
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <span className="font-syne font-extrabold text-lg text-blue-deep">
                          {course.isFree ? "Free" : `₹${course.price.toLocaleString()}`}
                        </span>
                        {course.originalPrice && (
                          <span className="ml-2 text-sm text-grey-400 line-through">
                            ₹{course.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <Button size="sm" className="group/btn">
                        Enroll
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Programs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}