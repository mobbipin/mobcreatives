import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Work from "@/components/Works";

export default function Page() {
  return (
    <>
      <Header />
      <main className="h-screen text-[#283050]">
        <Hero />
        <About />
        <Services />
        <Team />
        <Work />
      </main>
    </>
  );
}
