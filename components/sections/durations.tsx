import { durationOptions } from "@/lib/constants";

export function Durations() {
  const durationDetails = {
    "15-days": { emoji: "🚀", desc: "Quick skill sprint for immediate impact" },
    "1-month": { emoji: "🎯", desc: "Balanced depth for portfolio-ready projects" },
    "6-months": { emoji: "🏆", desc: "Comprehensive capstone for career transformation" },
  };

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-bright/10 border border-blue-bright/25 text-blue-main mb-4">
            Flexible Programs
          </span>
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl text-blue-deep mb-4">
            Choose Your{" "}
            <span className="text-blue-main">Timeline</span>
          </h2>
          <p className="text-grey-600 text-lg">
            Programs designed to fit your schedule and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {durationOptions.slice(1).map((duration) => {
            const details = durationDetails[duration.value as keyof typeof durationDetails];
            return (
              <div
                key={duration.value}
                className="p-6 rounded-2xl border-2 border-grey-200 hover:border-blue-main hover:bg-gradient-to-br hover:from-blue-dark hover:to-blue-mid transition-all cursor-pointer group text-center"
              >
                <div className="text-4xl mb-3">{details?.emoji}</div>
                <div className="font-syne font-extrabold text-2xl text-blue-deep group-hover:text-white mb-1">
                  {duration.label}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-main group-hover:text-blue-glow mb-3">
                  {duration.value.replace("-", " ")}
                </div>
                <p className="text-grey-600 group-hover:text-white/80 text-sm mb-4">
                  {details?.desc}
                </p>
                <span className="inline-block px-4 py-2 rounded-lg bg-grey-100 group-hover:bg-white/20 text-grey-700 group-hover:text-white text-sm font-semibold transition-colors">
                  Explore →
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}