import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection />
      {/* <GoogleForm /> */}
    </div>
  );
}
