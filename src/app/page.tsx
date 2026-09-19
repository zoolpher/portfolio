import Hero from "@/components/Hero";
import ActiveProject from "@/components/ActiveProject";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <Hero />
      <ActiveProject />
      <Projects />
      <Certificates />
      
      <footer className="py-10 text-center text-zinc-400 dark:text-zinc-500 text-sm border-t border-zinc-200 dark:border-zinc-800 mt-10">
        <p>© {new Date().getFullYear()} Aryan Kumar Mahto. All rights reserved.</p>
      </footer>
    </main>
  );
}
