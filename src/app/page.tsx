import Hero from "@/components/sections/Hero";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ClientDashboard from "@/components/ClientDashboard";
import Testimonials from "@/components/sections/Testimonials";
import LogoStrip from "@/components/sections/LogoStrip";
import BlogSection from "@/components/sections/BlogSection";
import SignupForm from "@/components/sections/SignupForm";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <ClientDashboard />
      <Testimonials />
      <LogoStrip />
      <BlogSection />
      <SignupForm />
    </>
  );
}
