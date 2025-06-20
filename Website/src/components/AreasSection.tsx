
import React from 'react';
import { MapPin, Truck, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AreasSection = () => {
  const areas = [
    'Johannesburg CBD', 'Sandton', 'Randburg', 'Roodepoort', 'Soweto',
    'Alexandra', 'Midrand', 'Fourways', 'Rosebank', 'Parktown',
    'Melville', 'Braamfontein', 'Newtown', 'Observatory', 'Yeoville',
    'Germiston', 'Benoni', 'Boksburg', 'Brakpan', 'Springs',
    'Edenvale', 'Kempton Park', 'Tembisa', 'Katlehong', 'Vosloorus'
  ];

  const deliveryFeatures = [
    {
      icon: MapPin,
      title: 'Wide Coverage Area',
      description: 'Serving Johannesburg and surrounding municipalities with comprehensive coverage'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Same-day delivery available within our service areas'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Convenient delivery slots to fit your schedule'
    }
  ];

  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Service <span className="gradient-text">Areas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve customers across Johannesburg and the greater Gauteng region with reliable LPG gas delivery and services.
          </p>
        </div>

        {/* Delivery Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {deliveryFeatures.map((feature, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Areas Grid */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Areas We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer group"
              >
                <MapPin className="mx-auto mb-2 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" size={20} />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 text-blue-600" size={48} />
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Service Area Map</h4>
                  <p className="text-gray-600">Interactive map showing our complete service coverage</p>
                  <p className="text-sm text-gray-500 mt-2">Map integration available upon request</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
