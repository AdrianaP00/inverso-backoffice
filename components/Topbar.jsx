"use client";

import { Menu, Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Topbar = ({ toggleSidebar, theme, toggleTheme }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-800 border-b-4 border-yellow-500">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-gray-500 focus:outline-none lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <div className="flex items-center">
        <Switch
          checked={theme}
          onCheckedChange={toggleTheme}
          className="mr-2"
        />
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-gray-300" />
        ) : (
          <Sun className="h-5 w-5 text-yellow-500" />
        )}
        <Button
          onClick={() => setIsLoggedIn(false)}
          className="ml-4 bg-yellow-500 text-white hover:bg-yellow-600"
        >
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Topbar;
