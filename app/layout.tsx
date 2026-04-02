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
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.bio,
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: `${PERSONAL_INFO.name} - Portfolio`,
    images: [
      {
        url: "/favicon.svg",
        width: 160,
        height: 160,
        alt: `${PERSONAL_INFO.name} - Full Stack Developer`,
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.bio,
    creator: PERSONAL_INFO.name,
    images: ["/favicon.svg"],
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
