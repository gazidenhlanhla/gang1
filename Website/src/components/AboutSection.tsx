
import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All our operations prioritize safety with certified equipment and trained professionals'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Premium LPG gas supply meeting all South African safety standards and regulations'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to providing exceptional service and support'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Round-the-clock emergency services for all your urgent gas supply needs'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="gradient-text">EPG Gas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading LPG gas supplier in Johannesburg, committed to delivering safe, reliable, and efficient gas solutions to homes and businesses across South Africa.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Your Trusted Gas Partner Since 2010
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              EPG Gas has been serving the Johannesburg community for over a decade, providing premium LPG gas solutions to residential, commercial, and industrial clients. Our commitment to safety, quality, and customer satisfaction has made us the preferred choice for thousands of customers across the region.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in LPG gas cylinder refilling, distribution, emergency deliveries, and comprehensive gas system installations. Our team of certified professionals ensures that every service meets the highest safety standards while providing exceptional value to our customers.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">EPG</span>
                  </div>
                  <p className="text-gray-600 font-medium">Professional LPG Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
