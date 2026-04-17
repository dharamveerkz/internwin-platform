export function Certificate() {
  return (
    <section className="section-padding bg-grey-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-dark to-blue-deep rounded-3xl p-8 shadow-2xl">
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-syne font-black text-8xl text-white/5 rotate-[-30deg] select-none">
                  CERTIFICATE
                </span>
              </div>
              
              {/* Certificate Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="font-syne font-extrabold text-xl text-white">InternWin</div>
                    <div className="text-xs text-blue-glow">Verified Platform</div>
                  </div>
                  <div className="text-right text-xs text-grey-500">
                    ISO 27001 Certified<br />
                    Blockchain Secured
                  </div>
                </div>
                
                <div className="text-sm text-grey-400 mb-2">This certifies that</div>
                <div className="font-syne font-extrabold text-2xl text-orange-main mb-3">Priya Sharma</div>
                <div className="text-sm text-grey-400 mb-4 leading-relaxed">
                  has successfully completed the industry capstone project and demonstrated 
                  proficiency in the required competencies.
                </div>
                
                <div className="font-syne font-bold text-lg text-blue-glow mb-1">
                  Full-Stack Web Development
                </div>
                <div className="text-xs text-grey-500 mb-6">January 2026 • 1 Month Program</div>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl">
                      🪪
                    </div>
                    <div className="text-xs text-grey-500">
                      Verify at<br />
                      <span className="text-orange-main font-mono">internwin.com/verify/IW-2026-ABC123</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-white">Dr. Anil Kumar</div>
                    <div className="text-xs text-grey-500">Program Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-bright/10 border border-blue-bright/25 text-blue-main mb-4">
              Trusted Credentials
            </span>
            <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-blue-deep mb-4">
              Certificates That{" "}
              <span className="text-blue-main">Employers Trust</span>
            </h2>
            <p className="text-grey-600 text-lg mb-8">
              Every certificate is blockchain-verified and instantly checkable by hiring partners.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: "🔐", title: "Blockchain Secured", desc: "Tamper-proof credentials stored on distributed ledger" },
                { icon: "🔍", title: "Instant Verification", desc: "Employers verify authenticity in seconds via public URL" },
                { icon: "📊", title: "Skill Breakdown", desc: "Detailed competency report included with each certificate" },
              ].map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-main/10 flex items-center justify-center text-xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-deep">{feature.title}</h4>
                    <p className="text-grey-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}