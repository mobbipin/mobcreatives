import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Page() {
  return (
    <>
      <Header />
      <main className="h-screen">
        <Hero />
        <About />
      </main>
    </>
  );
}
