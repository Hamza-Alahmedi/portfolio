"use client";

import { useState } from "react";
import { PROJECTS, type Project } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const { t } = useLanguage();

  const filters = [
    { key: "All", label: t.projects.filters.all },
    { key: "Client Projects", label: t.projects.filters.client },
    { key: "Academic & Personal", label: t.projects.filters.academic },
  ];

  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.type === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
            {t.projects.featured}
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
            {t.projects.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  filter === filterOption.key
                    ? "bg-blue-600 text-white shadow-sm hover:bg-blue-700"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t, locale } = useLanguage();

  const name = locale === "ar" ? project.name_ar || project.name : project.name;
  const description =
    locale === "ar"
      ? project.description_ar || project.description
      : project.description;
  const role = locale === "ar" ? project.role_ar || project.role : project.role;

  return (
    <div className="group flex flex-col h-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-xl">
      {/* Project Image Container */}
      {project.image ? (
        <div className="w-full h-56 overflow-hidden bg-gray-50 dark:bg-gray-900">
          <img
            src={project.image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="w-full h-56 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
          <svg
            className="w-20 h-20 text-gray-300 dark:text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Header with Title and Badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight flex-1">
            {name}
          </h3>
          <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 whitespace-nowrap">
            {locale === "ar"
              ? t.projects.filters[
                  project.type === "Client Projects" ? "client" : "academic"
                ]
              : project.type}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 dark:bg-gray-800 my-4" />

        {/* Role */}
        <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
          <span className="font-medium text-gray-600 dark:text-gray-400">
            {t.projects.role}:
          </span>{" "}
          {role}
        </p>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span className="group-hover/link:underline">
                {t.projects.viewLive}
              </span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group/link"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="group-hover/link:underline">Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
