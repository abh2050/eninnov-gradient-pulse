import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Who We Are',
    'What We Do', 
    'Our Values',
    'Who We Serve'
  ];

  const services = [
    'Engineering Consulting',
    'Data Modernization',
    'Project Management',
    'Staffing Services'
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold font-space gradient-text mb-4">
                ENINNOV
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed max-w-md">
                Your trusted partner in engineering innovation, practical solutions, 
                and exceptional talent. Transforming businesses through cutting-edge 
                technology and expertise.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-accent" />
                <span className="font-inter">contact@eninnov.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-inter">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-inter">Innovation District, Tech City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 font-space">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button className="text-muted-foreground hover:text-accent transition-colors font-inter">
                    {link}
                  </button>
                </li>
              ))}
              <li>
                <button className="text-muted-foreground hover:text-accent transition-colors font-inter">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 font-space">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button className="text-muted-foreground hover:text-accent transition-colors font-inter">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <button className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="text-muted-foreground hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </button>
            </div>

            {/* Copyright */}
            <p className="text-muted-foreground font-inter text-sm">
              © 2025 ENINNOV LLC. All rights reserved.
            </p>
          </div>
        </div>

        {/* Gradient Underline */}
        <div className="mt-8">
          <div className="h-1 bg-gradient-accent rounded-full glow-accent"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;