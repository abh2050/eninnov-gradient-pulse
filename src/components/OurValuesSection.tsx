import React from 'react';
import { Lightbulb, Award, Shield, Zap, CheckCircle } from 'lucide-react';

const OurValuesSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering solutions that push the boundaries of what's possible"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional quality in every project and interaction"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Building trust through transparency and ethical business practices"
    },
    {
      icon: Zap,
      title: "Empowerment",
      description: "Enabling teams and individuals to reach their full potential"
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Consistent delivery of results you can count on"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 particles-container">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space gradient-text mb-6">
            Our Values
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            The core principles that guide everything we do and drive our commitment 
            to delivering exceptional results for our clients.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group relative bg-card/60 backdrop-blur-md rounded-2xl p-8 card-glow border border-border/30 text-center hover:bg-card/80 transition-all duration-500"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-glow/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="bg-gradient-primary rounded-full p-6 w-fit mx-auto mb-6 glow-primary group-hover:glow-accent group-hover:scale-110 transition-smooth">
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-space text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                  {value.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;