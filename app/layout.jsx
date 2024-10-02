"use client";

import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const { theme, setTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("analytics");

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div
            className={`flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200 ${
              theme === "dark" ? "dark" : ""
            }`}
          >
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              closeSidebar={closeSidebar}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <div className="flex-1 flex flex-col overflow-hidden ${theme === 'dark'? 'dark' : '' }">
              <Topbar
                theme={theme}
                toggleTheme={toggleTheme}
                toggleSidebar={toggleSidebar}
              />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
