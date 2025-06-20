
import React from 'react';
import { ArrowDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"></div>
        <div className="absolute -top-4 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Premium <span className="gradient-text">LPG Gas</span>
            <br />
            Solutions
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-in-left">
            Your trusted partner for safe, reliable, and efficient LPG gas supply across Johannesburg and surrounding areas
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-in-right">
            <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium">
              ✓ 24/7 Emergency Service
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium">
              ✓ Licensed & Certified
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium">
              ✓ Fastest Delivery
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-bounce-in">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-2" size={20} />
              Get Quote Now
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-105"
            >
              View Services
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90 animate-fade-in">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span className="font-medium">011 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span className="font-medium">info@epggas.co.za</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white opacity-60" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
