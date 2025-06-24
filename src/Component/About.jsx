import React from "react";
import { Award, Users, Clock, MapPin } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Happy Farmers" },
    { icon: Clock, number: "24/7", label: "Emergency Support" },
    { icon: MapPin, number: "50+", label: "Farms Served" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-green-50 to-green-100"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Dedicated to Cattle Health & Wellness
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For over 15 years, CowCare has been the trusted partner for
                farmers and ranchers across the region. Our team of experienced
                veterinarians and animal health specialists are committed to
                providing the highest quality care for your cattle.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that healthy cattle are the foundation of a
                successful farming operation. That's why we combine traditional
                veterinary expertise with modern technology to deliver
                comprehensive care solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Cattle in natural environment"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-green-600 text-white rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
