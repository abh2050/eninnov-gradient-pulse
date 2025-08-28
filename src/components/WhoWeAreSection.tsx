import React from 'react';
import { Users, BarChart3, Settings, Star } from 'lucide-react';
import teamImage from '@/assets/team-holographic.jpg';

const WhoWeAreSection = () => {
  const expertiseAreas = [
    {
      icon: Settings,
      title: "Engineering Experts",
      description: "Advanced technical solutions for complex challenges"
    },
    {
      icon: BarChart3,
      title: "Data Analysts",
      description: "Transform data into actionable business insights"
    },
    {
      icon: Users,
      title: "Project Managers",
      description: "End-to-end project execution and delivery"
    },
    {
      icon: Star,
      title: "Top Talent",
      description: "Exceptional professionals driving innovation"
    }
  ];

  return (
    <section id="who-we-are" className="py-24 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold font-space gradient-text mb-6">
                Meet the ENINNOV Team
              </h2>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Our diverse team of specialists combines cutting-edge technical expertise 
                with proven industry experience to deliver exceptional results for our clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <div 
                  key={area.title}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-6 card-glow border border-border/50 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-accent rounded-lg p-3 glow-accent group-hover:scale-110 transition-smooth">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2 font-space">
                        {area.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-inter">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-soft">
              <img 
                src={teamImage} 
                alt="ENINNOV team working with advanced technology"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-accent rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-full blur-xl opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;