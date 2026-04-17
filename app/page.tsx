import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { Courses } from "@/components/sections/courses";
import { WhyInternWin } from "@/components/sections/why-internwin";
import { Certificate } from "@/components/sections/certificate";
import { WhoCanJoin } from "@/components/sections/who-can-join";
import { Process } from "@/components/sections/process";
import { Durations } from "@/components/sections/durations";
import { Testimonials } from "@/components/sections/testimonials";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <Courses />
      <WhyInternWin />
      <Certificate />
      <WhoCanJoin />
      <Process />
      <Durations />
      <Testimonials />
      
      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-deep to-blue-dark">
        <div className="container text-center">
          <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-white mb-6">
            Ready to <span className="text-orange-main">Win</span> Your Career?
          </h2>
          <p className="text-grey-300 text-lg mb-10 max-w-2xl mx-auto">
            Join 50,000+ students who transformed their careers with hands-on internships 
            and verified credentials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-main to-orange-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-main/30 transition-all hover:-translate-y-0.5">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              Schedule Demo →
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}