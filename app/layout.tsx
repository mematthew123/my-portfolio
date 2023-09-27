import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/ThemeContext";
import ThemeSwitch from "@/components/ThemeSwitch";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matthew Rhoads | Portfolio",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}