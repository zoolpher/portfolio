"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiGmail, SiLeetcode, SiMedium, SiX } from "react-icons/si";
import { Eye } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/views')
      .then(res => res.json())
      .then(data => {
        if (data && data.views > 0) {
          setViews(data.views);
        }
      })
      .catch(err => console.error("Error fetching views:", err));
  }, []);
  return (
    <section className="min-h-[80vh] flex flex-col justify-center max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-zinc-500 dark:text-zinc-400 font-medium mb-4 tracking-wide text-sm">
          Aryan Kumar Mahto (zoolpher) | Software Engineer
        </h2>
        <h1 className="text-4xl md:text-6xl font-semibold text-zinc-800 dark:text-zinc-100 mb-6 leading-tight">
          Building high-performance <br className="hidden md:block" />
          systems and core infrastructure.
        </h1>
        <div className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mb-10 leading-relaxed">
          <p className="mb-4 md:text-xl">
            I am a systems-focused software engineer. I build engines, parsers, shells, and network tools from scratch to deeply understand how systems work under the hood.
          </p>
          <ul className="space-y-2 text-base md:text-lg">
            <li>
              <strong className="text-zinc-700 dark:text-zinc-300 font-medium">Languages:</strong> C/C++, Python, MySQL, JavaScript, Rust
            </li>
            <li>
              <strong className="text-zinc-700 dark:text-zinc-300 font-medium">Core Concepts:</strong> Operating Systems, Networking, Databases, and low-level system architecture
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-4">
          {process.env.NEXT_PUBLIC_RESUME_LINK && (
            <a
              href={process.env.NEXT_PUBLIC_RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 rounded-lg font-medium transition-colors"
            >
              View Resume
            </a>
          )}
          <div className="flex items-center gap-5 md:border-l border-zinc-200 dark:border-zinc-800 md:pl-6">
            {process.env.NEXT_PUBLIC_GITHUB_LINK && (
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
            )}
            {process.env.NEXT_PUBLIC_LEETCODE_LINK && (
              <a
                href={process.env.NEXT_PUBLIC_LEETCODE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                <SiLeetcode className="w-6 h-6" />
                <span className="sr-only">LeetCode</span>
              </a>
            )}
            {process.env.NEXT_PUBLIC_MEDIUM_LINK && (
              <a
                href={process.env.NEXT_PUBLIC_MEDIUM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                <SiMedium className="w-6 h-6" />
                <span className="sr-only">Medium</span>
              </a>
            )}
            {process.env.NEXT_PUBLIC_X_LINK && (
              <a
                href={process.env.NEXT_PUBLIC_X_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                <SiX className="w-5 h-5" />
                <span className="sr-only">X (Twitter)</span>
              </a>
            )}
            {process.env.NEXT_PUBLIC_EMAIL && (
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${process.env.NEXT_PUBLIC_EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                <SiGmail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            )}
            {views !== null && (
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 md:border-l border-zinc-200 dark:border-zinc-800 md:pl-5 ml-1">
                <Eye className="w-5 h-5" />
                <span className="text-sm font-medium">{views}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
