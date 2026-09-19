"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

interface RepoData {
  name: string;
  description: string;
  language: string;
  html_url: string;
}

export default function ActiveProject() {
  const activeLink = process.env.NEXT_PUBLIC_ACTIVE_PROJECT_LINK;
  const [repoData, setRepoData] = useState<RepoData | null>(null);
  const [loading, setLoading] = useState(!!activeLink);

  useEffect(() => {
    if (!activeLink) return;

    // Extract owner and repo from github URL
    // e.g. https://github.com/zoolpher/some-repo
    try {
      const url = new URL(activeLink);
      const pathParts = url.pathname.split("/").filter(Boolean);
      if (pathParts.length >= 2 && url.hostname === "github.com") {
        const owner = pathParts[0];
        const repo = pathParts[1];

        fetch(`https://api.github.com/repos/${owner}/${repo}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.name) {
              setRepoData({
                name: data.name,
                description: data.description || "No description provided.",
                language: data.language || "Unknown",
                html_url: data.html_url,
              });
            }
          })
          .catch((err) => console.error("Error fetching repo:", err))
          .finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  }, [activeLink]);

  return (
    <section className="py-20 max-w-4xl mx-auto px-6 w-full text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full text-left"
      >
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 whitespace-nowrap">Active Projects</h3>
          <div className="h-[2px] bg-zinc-200 dark:bg-zinc-800 flex-1 rounded-full"></div>
        </div>

        {!activeLink ? (
          <p className="text-zinc-500 dark:text-zinc-400 text-left">No active projects currently.</p>
        ) : loading ? (
          <div className="p-8 text-center bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl animate-pulse">
            <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-2/3 mx-auto"></div>
          </div>
        ) : repoData ? (
          <div className="group relative p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl transition-all hover:shadow-lg dark:hover:border-zinc-700">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-xl font-medium text-zinc-800 dark:text-zinc-100 mb-2">
                  {repoData.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-medium rounded-full">
                    {repoData.language}
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Actively Developing
                  </span>
                </div>
              </div>
              <a
                href={repoData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              {repoData.description}
            </p>
            
            <a
              href={repoData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors group-hover:underline decoration-zinc-300 dark:decoration-zinc-600 underline-offset-4"
            >
              View Repository <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ) : (
          <div className="p-8 text-center bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/50 rounded-xl">
            <p className="text-red-500 dark:text-red-400">Failed to load active project repository data.</p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
