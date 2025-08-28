import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from 'lucide-react';

const ClosingSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-accent rounded-full p-6 glow-accent">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold font-space gradient-text mb-8">
            Partner with ENINNOV
          </h2>

          {/* Subtext */}
          <p className="text-xl lg:text-2xl text-foreground/90 font-inter leading-relaxed mb-12 max-w-3xl mx-auto">
            Unlock engineering innovation, reliable project delivery, and access to 
            exceptional talent that will transform your business and drive sustainable growth.
          </p>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">50+</div>
              <p className="text-muted-foreground font-inter">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-muted-foreground font-inter">Expert Support</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">100%</div>
              <p className="text-muted-foreground font-inter">Client Satisfaction</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="lg" className="text-xl px-12 py-6 h-auto">
            Contact Us Today
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>

          {/* Additional Info */}
          <p className="text-sm text-muted-foreground font-inter mt-6">
            Ready to transform your business? Let's discuss your project today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;