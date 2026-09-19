"use client";

import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";

const certificates = [
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "Verified Skill",
    link: process.env.NEXT_PUBLIC_CERT_SQL_ADVANCED,
    image: "/hackerrank-sql-advanced.svg",
    downloadLink: "/hackerrank-sql-advanced.pdf",
    downloadName: "Aryan_Kumar_Mahto_SQL_Advanced_Certificate.pdf",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "Verified Skill",
    link: process.env.NEXT_PUBLIC_CERT_SQL_INTERMEDIATE,
    image: "/hackerrank-sql-intermediate.svg",
    downloadLink: "/hackerrank-sql-intermediate.pdf",
    downloadName: "Aryan_Kumar_Mahto_SQL_Intermediate_Certificate.pdf",
  },
  {
    title: "CS401: Operating Systems",
    issuer: "Saylor Academy",
    date: "Issued Sep 2026 · Credential ID: 3049554561AM",
    link: process.env.NEXT_PUBLIC_CERT_OS_SAYLOR,
    image: "/saylor-os-certificate.svg",
    downloadLink: "/saylor-os-certificate.pdf",
    downloadName: "Aryan_Kumar_Mahto_Operating_Systems_Certificate.pdf",
  },
];

export default function Certificates() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 whitespace-nowrap">Certifications</h3>
          <div className="h-[2px] bg-zinc-200 dark:bg-zinc-800 flex-1 rounded-full"></div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-zinc-200 dark:hover:border-zinc-700"
            >
              <div className="relative w-full h-48 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center border-b border-zinc-100 dark:border-zinc-800 group">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x250?text=Certificate+Image+Missing";
                  }}
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h4 className="text-base font-medium text-zinc-800 dark:text-zinc-100 mb-2 leading-snug">{cert.title}</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium mb-1">{cert.issuer}</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-4">{cert.date}</p>
                
                <div className="mt-auto flex gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-medium rounded-md transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View
                    </a>
                  )}
                  {cert.downloadLink && (
                    <a 
                      href={cert.downloadLink} 
                      download={cert.downloadName} 
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-medium rounded-md transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
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
