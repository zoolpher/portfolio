"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "nut-shell-v2",
    description: "C++ Unix shell (v2): builtins, background jobs, error-safe redirection, Readline history - rebuilt from scratch with full understanding of every syscall involved.",
    tech: ["C++", "Systems", "Unix", "Syscalls"],
    github: "https://github.com/zoolpher/nut-shell-v2",
    live: "#",
  },
  {
    title: "sql-engine",
    description: "A lightweight SQL database engine built from scratch in C++ to explore database internals, query parsing, storage engines, indexing, and query execution step by step.",
    tech: ["C++", "Database", "Parsers", "Storage"],
    github: "https://github.com/zoolpher/sql-engine",
    live: "#",
  },
  {
    title: "net-scout",
    description: "Low-level network traffic metadata analyzer built in C++ using Npcap — captures live packets, parses Ethernet/IP/TCP headers, detects port scans, and extracts SNI.",
    tech: ["C++", "Networking", "Npcap", "Packet Analysis"],
    github: "https://github.com/zoolpher/net-scout",
    live: "#",
  },
  {
    title: "bnb-lens",
    description: "High-performance Binance WebSocket market data capture + Local Order Book in C++17.",
    tech: ["C++17", "WebSockets", "High-Performance", "Finance"],
    github: "https://github.com/zoolpher/bnb-lens",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 whitespace-nowrap">Projects</h3>
          <div className="h-[2px] bg-zinc-200 dark:bg-zinc-800 flex-1 rounded-full"></div>
        </div>
        
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-medium text-zinc-800 dark:text-zinc-100 mb-3">{project.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 md:mb-0">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 md:ml-6">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors flex items-center gap-2 text-sm">
                    <FaGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors flex items-center gap-2 text-sm">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
