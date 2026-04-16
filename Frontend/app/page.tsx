import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import DashboardPreview from "@/components/home/DashboardPreview";
import RideTegoSection from "@/components/home/RideTegoSection";

export default function Home() {
  return (
    <>

      <Hero />
      <div className="max-w-7xl mx-auto px-6">
        <Features />
        <HowItWorks />
        <DashboardPreview />
      </div>

      <RideTegoSection />

    </>
  );
}
