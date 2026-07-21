import { Header } from "../../components/Header";
import { PrimaryCTA } from "../../components/PrimaryCTA";
import { DemoLinks } from "../../components/DemoLinks";
import { PortfolioGallery } from "../../components/PortfolioGallery";
import { Footer } from "../../components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute right-[-15%] top-[35%] h-[360px] w-[360px] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[340px] w-[340px] rounded-full bg-fuchsia-700/10 blur-[120px]" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-10 sm:py-14">
        <Header />
        <PrimaryCTA />
        <DemoLinks />
        <PortfolioGallery />
        <Footer />
      </div>
    </main>
  );
}
