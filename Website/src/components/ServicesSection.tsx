
import React from 'react';
import { Truck, Home, Settings, Shield, Clock, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: 'Gas Cylinder Delivery',
      description: 'Fast and reliable LPG cylinder delivery service across Johannesburg and surrounding areas. Same-day delivery available.',
      features: ['Same-day delivery', 'Various cylinder sizes', 'Scheduled deliveries', 'Emergency service']
    },
    {
      icon: Settings,
      title: 'Gas Cylinder Refilling',
      description: 'Professional gas cylinder refilling services with safety checks and quality assurance for all cylinder types.',
      features: ['Safety certified', 'Quality testing', 'All cylinder types', 'Quick turnaround']
    },
    {
      icon: Home,
      title: 'Home Installation',
      description: 'Complete LPG gas system installation for residential properties including safety inspections and certifications.',
      features: ['Certified installation', 'Safety inspection', 'System maintenance', 'Compliance certificates']
    },
    {
      icon: Shield,
      title: 'Commercial Supply',
      description: 'Bulk LPG gas supply solutions for restaurants, hotels, factories, and other commercial establishments.',
      features: ['Bulk supply contracts', 'Regular deliveries', 'Industrial solutions', 'Custom pricing']
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock emergency gas supply service for urgent situations and critical business operations.',
      features: ['24/7 availability', 'Emergency response', 'Critical supply backup', 'Priority service']
    },
    {
      icon: Phone,
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance services for gas systems, safety inspections, and technical support.',
      features: ['Regular maintenance', 'Safety inspections', 'Technical support', 'System upgrades']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive LPG gas solutions designed to meet all your residential, commercial, and industrial needs with the highest safety standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Gas Solution?</h3>
          <p className="text-xl mb-8 opacity-90">
            Contact our experts for personalized LPG gas solutions tailored to your specific requirements.
          </p>
          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
