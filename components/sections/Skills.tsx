"use client";

import { SKILLS } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Skills() {
  const { t } = useLanguage();

  const categories = {
    frontend: { title: t.skills.categories.frontend, icon: "🎨" },
    backend: { title: t.skills.categories.backend, icon: "⚙️" },
    languages: { title: t.skills.categories.languages, icon: "💻" },
    tools: { title: t.skills.categories.tools, icon: "🛠️" },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
            Skills & Technologies
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
            {t.skills.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(categories).map(([key, { title, icon }]) => {
            const categorySkills = SKILLS.filter(
              (skill) => skill.category === key,
            );
            return (
              <div
                key={key}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                    >
                      {skill.name}
                      {skill.level ? ` (${skill.level})` : ""}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
