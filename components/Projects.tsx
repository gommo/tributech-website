"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Robin.fm",
    description: "Podcast production sidekick for creators",
    image: "/screenshots/project-robinfm.png",
    url: "https://robin.fm",
  },
  {
    title: "Old World Rankings",
    description: "Tournament rankings for Warhammer: The Old World",
    image: "/screenshots/project-oldworldrankings.png",
    url: "https://oldworldrankings.com",
  },
  {
    title: "Personal Site",
    description: "Portfolio and thought leadership hub",
    image: "/screenshots/project-personalwebsite.png",
    url: "https://colingoudie.me",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            What We&apos;re Building
          </h2>
          <div className="h-1 w-16 bg-accent mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-surface border border-border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 hover:border-accent/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground-secondary">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
