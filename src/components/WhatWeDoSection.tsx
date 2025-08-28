import React from 'react';
import { Cog, Database, ClipboardList, UserCheck } from 'lucide-react';

const WhatWeDoSection = () => {
  const services = [
    {
      icon: Cog,
      title: "Engineering Consulting",
      description: "Advanced solutions tailored to semiconductor and industrial challenges.",
      features: ["System Optimization", "Process Engineering", "Technical Analysis", "Innovation Strategy"]
    },
    {
      icon: Database,
      title: "Data Modernization",
      description: "Analytics and AI tools to optimize decision-making.",
      features: ["Data Architecture", "Business Intelligence", "Predictive Analytics", "AI Implementation"]
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      description: "End-to-end planning, execution, and procurement support.",
      features: ["Strategic Planning", "Resource Management", "Risk Assessment", "Quality Assurance"]
    },
    {
      icon: UserCheck,
      title: "Staffing Services",
      description: "Top talent to power innovation and growth.",
      features: ["Technical Recruitment", "Talent Assessment", "Team Building", "Skills Development"]
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space gradient-text mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your business transformation 
            and drive sustainable growth through innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 card-glow border border-border/50 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="bg-gradient-primary rounded-xl p-4 w-fit mb-6 glow-primary group-hover:scale-110 transition-smooth">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold font-space text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-accent rounded-full glow-accent"></div>
                      <span className="text-sm text-muted-foreground font-inter">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;