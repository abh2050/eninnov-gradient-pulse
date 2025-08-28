import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center animated-gradient particles-container overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        {/* Company Name */}
        <div className="mb-6">
          <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold font-space gradient-text mb-4 tracking-tight">
            ENINNOV
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl lg:text-2xl text-muted-foreground font-space">
            <span>Engineering</span>
            <Sparkles className="w-6 h-6 text-accent" />
            <span>Innovation</span>
            <Sparkles className="w-6 h-6 text-accent" />
            <span>Solution</span>
          </div>
        </div>

        {/* Tagline */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl lg:text-2xl xl:text-3xl text-foreground/90 leading-relaxed font-inter font-light">
            Your Trusted Partner in{' '}
            <span className="gradient-text font-medium">Engineering Innovation</span>, 
            Practical Solutions, and{' '}
            <span className="gradient-text font-medium">Exceptional Talent</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
            Get in Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="hero-outline" size="lg" className="text-lg px-8 py-4 h-auto">
            Learn More
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground">
          <span className="text-sm mb-2 font-inter">Scroll to explore</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-accent to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;