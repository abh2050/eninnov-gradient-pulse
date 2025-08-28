import React from 'react';
import { Cpu, Factory, Monitor, Building, TrendingUp, Cog, Users } from 'lucide-react';

const WhoWeServeSection = () => {
  const clientTypes = [
    {
      icon: Cpu,
      title: "Semiconductor",
      description: "Advanced chip design and manufacturing optimization"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industrial automation and process improvement"
    },
    {
      icon: Monitor,
      title: "Technology",
      description: "Software solutions and digital transformation"
    },
    {
      icon: Building,
      title: "Civic Institutions",
      description: "Public sector innovation and modernization"
    }
  ];

  const idealClient = [
    {
      icon: TrendingUp,
      title: "Efficiency Seekers",
      description: "Leaders looking to optimize operations and reduce costs"
    },
    {
      icon: Cog,
      title: "Automation Adopters",
      description: "Organizations ready to embrace automated solutions"
    },
    {
      icon: Users,
      title: "Talent Acquirers",
      description: "Companies seeking exceptional engineering talent"
    }
  ];

  const triggerPoints = [
    "Scaling operations beyond current capacity",
    "Adopting automation and AI technologies",
    "Solving complex engineering bottlenecks",
    "Need for specialized technical expertise",
    "Digital transformation initiatives",
    "Improving operational efficiency"
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space gradient-text mb-6">
            Who We Serve
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            We partner with forward-thinking organizations across industries to drive 
            innovation and achieve exceptional results.
          </p>
        </div>

        <div className="space-y-24">
          {/* Target Clients */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold font-space text-center mb-12">
              Our <span className="gradient-text">Target Clients</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientTypes.map((client, index) => (
                <div 
                  key={client.title}
                  className="bg-card/80 backdrop-blur-sm rounded-xl p-6 card-glow border border-border/50 text-center group"
                >
                  <div className="bg-gradient-primary rounded-lg p-4 w-fit mx-auto mb-4 glow-primary group-hover:scale-110 transition-smooth">
                    <client.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3 font-space">
                    {client.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-inter">
                    {client.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal Referral */}
          <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold font-space text-center mb-12">
              Our <span className="gradient-text">Ideal Partners</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {idealClient.map((ideal, index) => (
                <div 
                  key={ideal.title}
                  className="text-center group"
                >
                  <div className="bg-gradient-accent rounded-full p-6 w-fit mx-auto mb-6 glow-accent group-hover:scale-110 transition-smooth">
                    <ideal.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3 font-space text-lg">
                    {ideal.title}
                  </h4>
                  <p className="text-muted-foreground font-inter">
                    {ideal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Trigger Points */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50">
            <h3 className="text-2xl lg:text-3xl font-bold font-space text-center mb-12">
              Key <span className="gradient-text">Trigger Points</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {triggerPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 group"
                >
                  <div className="bg-gradient-primary rounded-full p-2 mt-1 glow-primary group-hover:scale-110 transition-smooth">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;