"use client";


import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from '@/components/ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="py-4 px-4 lg:px-8 fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold gradient-text">Muhammad Afzal</a>
        
        <div className="flex items-center gap-2">
          {/* Theme toggle button */}
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          
          {/* Mobile menu button */}
          <Button 
            variant="outline" 
            size="icon" 
            className="lg:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#experience" className="text-foreground hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          <Button asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background shadow-lg p-4 lg:hidden flex flex-col gap-4 border-b animate-fade-in">
            <a href="#about" className="text-foreground hover:text-primary transition-colors p-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors p-2" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors p-2" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#experience" className="text-foreground hover:text-primary transition-colors p-2" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors p-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button asChild className="w-full">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Hire Me</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
