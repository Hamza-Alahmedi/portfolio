import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { PERSONAL_INFO } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.bio,
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Portfolio",
    "Web Development",
    PERSONAL_INFO.name,
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  openGraph: {
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.bio,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${cairo.className}`}>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
