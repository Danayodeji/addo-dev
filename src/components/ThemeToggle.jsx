import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';


const ThemeToggle = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
      if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
      }
    }

  return (
    <button 
      onClick={toggleTheme} 
      aria-label="Toggle theme" 
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-gray-900" />
      )}
    </button>
  ) 
}

export default ThemeToggle