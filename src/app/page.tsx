import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Works from "@/components/Works";
import Articles from "@/components/Articles";
import Customers from "@/components/Customers";
import Meeting from "@/components/Meeting";

export default function Page() {
  return (
    <>
      <Header />
      <main className="h-screen text-[#283050]">
        <Hero />
        <About />
        <Services />
        <Team />
        <Works />
        <Articles />
        <Customers />
        <Meeting />
      </main>
    </>
  );
}
