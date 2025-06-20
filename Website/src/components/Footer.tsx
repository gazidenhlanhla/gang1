
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Service Areas', href: '#areas' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Gas Cylinder Delivery',
    'Gas Cylinder Refilling',
    'Home Installation',
    'Commercial Supply',
    'Emergency Service',
    'Maintenance & Support'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">EPG</span>
              </div>
              <div className="text-xl font-bold">
                EPG <span className="text-orange-500">Gas</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for safe, reliable, and efficient LPG gas supply across Johannesburg and surrounding areas since 2010.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Phone size={16} className="mr-3 text-orange-500" />
                24/7 Emergency: 011 123 4567
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail size={16} className="mr-3 text-orange-500" />
                info@epggas.co.za
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-2">
                  <MapPin size={16} className="mr-3 text-orange-500" />
                  <span className="font-medium">Office Address</span>
                </div>
                <p className="text-gray-300 text-sm ml-7">
                  123 Main Street<br />
                  Johannesburg, 2000<br />
                  South Africa
                </p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Clock size={16} className="mr-3 text-orange-500" />
                  <span className="font-medium">Business Hours</span>
                </div>
                <p className="text-gray-300 text-sm ml-7">
                  Mon-Fri: 7:00 AM - 6:00 PM<br />
                  Saturday: 8:00 AM - 4:00 PM<br />
                  Sunday: Emergency Only
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 EPG Gas. All rights reserved. | Licensed LPG Gas Supplier
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Safety Guidelines</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
