import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Blog } from "@/components/sections/blog";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Mobile Header (Hidden on md/lg desktop and laptop screens) */}
      <Header />

      {/* Fixed Sidebar for laptop and desktop screens */}
      <Sidebar />

      {/* Main Content Area (Displayed and scrollable on laptop/desktop) */}
      <main className="md:ml-64 lg:ml-72 xl:ml-80 min-h-screen px-6 sm:px-10 lg:px-16 xl:px-20 max-w-6xl">
        <Hero />
        {/* <About /> */}
        <Projects />
        <Blog />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
