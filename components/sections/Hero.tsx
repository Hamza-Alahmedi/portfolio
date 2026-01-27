"use client";

import { PERSONAL_INFO } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";

export function Hero() {
  const { t, locale } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-100/50 to-blue-100/50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-auto lg:py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">
              {t.hero.greeting}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {locale === "ar" ? PERSONAL_INFO.name_ar : PERSONAL_INFO.name}
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              {locale === "ar" ? PERSONAL_INFO.title_ar : PERSONAL_INFO.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <p
              className="text-sm text-gray-500 dark:text-gray-400 mb-12"
              dir={locale === "ar" ? "rtl" : "ltr"}
            >
              📍{" "}
              {locale === "ar"
                ? PERSONAL_INFO.location_ar
                : PERSONAL_INFO.location}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm"
              >
                {t.hero.cta.projects}
              </button>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                {t.hero.cta.contact}
              </button>
              <a
                href={`/cv/cv-${locale}.pdf`}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  {t.hero.downloadCV}
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right Visual Mockup - Linear Style */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-md group"
              style={{ perspective: "1000px" }}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Card with Tilt */}
              <div className="relative rounded-2xl border border-gray-200/60 dark:border-gray-800 bg-white dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden shadow-2xl dark:shadow-2xl">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200/50 dark:border-gray-800 bg-gradient-to-r from-gray-50 to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-mono ml-3">
                      developer.ts
                    </p>
                  </div>
                </div>

                {/* Code Content */}
                <div
                  className="p-6 font-mono text-xs lg:text-sm overflow-hidden bg-white dark:bg-gray-900"
                  dir="ltr"
                >
                  <div className="space-y-3 text-gray-800 dark:text-gray-300">
                    {/* Line 1 */}
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <span className="text-gray-400 dark:text-gray-700 select-none w-6 text-right flex-shrink-0">
                        1
                      </span>
                      <span>
                        <span className="text-purple-600 dark:text-purple-400">
                          const
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {" "}
                          developer ={" "}
                        </span>
                        <span className="text-green-600 dark:text-green-400">
                          {"{"}
                        </span>
                      </span>
                    </motion.div>

                    {/* Line 2 */}
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <span className="text-gray-400 dark:text-gray-700 select-none w-6 text-right flex-shrink-0">
                        2
                      </span>
                      <span className="ml-2">
                        <span className="text-blue-600 dark:text-blue-400">
                          name
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          :{" "}
                        </span>
                        <span className="text-amber-600 dark:text-amber-400">
                          "Hamza Alahmedi"
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          ,
                        </span>
                      </span>
                    </motion.div>

                    {/* Line 3 */}
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <span className="text-gray-400 dark:text-gray-700 select-none w-6 text-right flex-shrink-0">
                        3
                      </span>
                      <span className="ml-2">
                        <span className="text-blue-600 dark:text-blue-400">
                          role
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          :{" "}
                        </span>
                        <span className="text-amber-600 dark:text-amber-400">
                          "Full-Stack Developer"
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          ,
                        </span>
                      </span>
                    </motion.div>

                    {/* Line 4 */}
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <span className="text-gray-400 dark:text-gray-700 select-none w-6 text-right flex-shrink-0">
                        4
                      </span>
                      <span className="ml-2">
                        <span className="text-blue-600 dark:text-blue-400">
                          expertise
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          : [
                        </span>
                        <span className="text-amber-600 dark:text-amber-400">
                          "React"
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          ,{" "}
                        </span>
                        <span className="text-amber-600 dark:text-amber-400">
                          "TypeScript"
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          ,{" "}
                        </span>
                      </span>
                    </motion.div>

                    {/* Line 5 */}
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <span className="text-gray-400 dark:text-gray-700 select-none w-6 text-right flex-shrink-0">
                        5
                      </span>
                      <span className="ml-6">
                        <span className="text-amber-600 dark:text-amber-400">
                          "Next.js"
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          ,{" "}
                        </span>
                        <span className="text-amber-600 dark:text-amber-400">
                          "Node.js"
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          ],
                        </span>
                      </span>
                    </motion.div>

                    {/* Line 6 */}
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    >
                      <span className="text-gray-400 dark:text-gray-700 select-none w-6 text-right flex-shrink-0">
                        6
                      </span>
                      <span className="ml-2">
                        <span className="text-blue-600 dark:text-blue-400">
                          passion
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          :{" "}
                        </span>
                        <span className="text-amber-600 dark:text-amber-400">
                          "Building elegant solutions"
                        </span>
                      </span>
                    </motion.div>

                    {/* Line 7 */}
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0, duration: 0.5 }}
                    >
                      <span className="text-gray-400 dark:text-gray-700 select-none w-6 text-right flex-shrink-0">
                        7
                      </span>
                      <span>
                        <span className="text-green-600 dark:text-green-400">
                          {"}"}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          ;
                        </span>
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Footer Accent */}
                <div className="h-px bg-gradient-to-r from-transparent via-blue-400/20 dark:via-blue-500/10 to-transparent" />
              </div>

              {/* Floating Animation Ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-blue-400/20 dark:border-blue-500/10 pointer-events-none"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Desktop Only */}
        <motion.div
          className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <svg
            className="w-6 h-6 text-gray-400 dark:text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
