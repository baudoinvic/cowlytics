import React from "react";
import {
  Stethoscope,
  Activity,
  Syringe,
  ClipboardCheck,
  Truck,
  Users,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Health Examinations",
      description:
        "Comprehensive health checks and diagnostic services to ensure your cattle's wellbeing.",
      features: [
        "Physical examinations",
        "Disease screening",
        "Health certificates",
      ],
    },
    {
      icon: Activity,
      title: "Health Monitoring",
      description:
        "Advanced monitoring systems to track your cattle's vital signs and health metrics.",
      features: [
        "Real-time tracking",
        "Health alerts",
        "Performance analytics",
      ],
    },
    {
      icon: Syringe,
      title: "Vaccination Programs",
      description:
        "Customized vaccination schedules to protect your livestock from common diseases.",
      features: [
        "Disease prevention",
        "Immunity boosters",
        "Scheduled programs",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Nutrition Planning",
      description:
        "Expert nutritional guidance to optimize your cattle's diet and growth.",
      features: [
        "Diet optimization",
        "Growth tracking",
        "Feed recommendations",
      ],
    },
    {
      icon: Truck,
      title: "Mobile Services",
      description:
        "On-farm veterinary services bringing expert care directly to your location.",
      features: ["Farm visits", "Emergency calls", "Convenient scheduling"],
    },
    {
      icon: Users,
      title: "Consultation",
      description:
        "Professional advice on cattle management, breeding, and farm operations.",
      features: ["Expert guidance", "Best practices", "Problem solving"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cattle care services designed to keep your livestock
            healthy, productive, and thriving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
