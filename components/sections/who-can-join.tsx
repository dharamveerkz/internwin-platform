import { eligibleDegrees, eligibleBranches } from "@/lib/constants";

export function WhoCanJoin() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* List */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-bright/10 border border-blue-bright/25 text-blue-main mb-4">
              Eligibility
            </span>
            <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-blue-deep mb-4">
              Who Can{" "}
              <span className="text-blue-main">Join?</span>
            </h2>
            <p className="text-grey-600 text-lg mb-8">
              InternWin is designed for students and fresh graduates ready to build industry-ready skills.
            </p>
            
            <div className="space-y-3 mb-8">
              {[
                "Students in final years of graduation",
                "Recent graduates (0-2 years experience)",
                "Career switchers looking to upskill",
                "Anyone passionate about technology",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-grey-50 border border-grey-200">
                  <div className="w-6 h-6 rounded-md bg-blue-main flex items-center justify-center text-white text-sm flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-grey-700">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Degree Tags */}
            <div>
              <h4 className="font-semibold text-blue-deep mb-3">Eligible Degrees</h4>
              <div className="flex flex-wrap gap-2">
                {eligibleDegrees.map((degree) => (
                  <span key={degree} className="px-3 py-1.5 text-sm font-medium rounded-lg bg-blue-main/10 text-blue-main border border-blue-main/20">
                    {degree}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="bg-gradient-to-br from-blue-dark to-blue-mid rounded-3xl p-8 text-center">
            <h3 className="font-syne font-extrabold text-2xl text-white mb-2">All Branches Welcome</h3>
            <p className="text-blue-glow mb-6">No prior coding experience required for beginner tracks</p>
            
            <div className="grid grid-cols-3 gap-3">
              {eligibleBranches.map((branch) => (
                <div key={branch} className="p-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-blue-bright/20 transition-colors cursor-default">
                  {branch}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}