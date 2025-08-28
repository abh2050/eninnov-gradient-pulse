import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Who We Are', 'What We Do', 'Our Values', 'Who We Serve', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl lg:text-3xl font-bold font-space gradient-text">
              ENINNOV
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                className="text-sm font-medium text-muted-foreground hover:text-primary-glow transition-smooth relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero-outline" size="lg">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="block w-full h-0.5 bg-primary-glow"></span>
              <span className="block w-full h-0.5 bg-primary-glow"></span>
              <span className="block w-full h-0.5 bg-primary-glow"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;