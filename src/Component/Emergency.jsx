// import React from 'react'

// const Emergency = () => {
//   return (
//     <div>Emergency</div>
//   )
// }

// export default Emergency

import React from "react";
import {
  ArrowLeft,
  Phone,
  Clock,
  AlertTriangle,
  MapPin,
  Heart,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const Emergency = () => {
  const emergencyContacts = [
    {
      title: "Emergency Hotline",
      phone: "(555) 911-HELP",
      description: "24/7 immediate emergency response",
      available: "Available 24/7",
    },
    {
      title: "Mobile Vet Unit",
      phone: "(555) 123-4567",
      description: "Rapid on-site emergency care",
      available: "Available 24/7",
    },
    {
      title: "After Hours Clinic",
      phone: "(555) 987-6543",
      description: "Emergency clinic for critical cases",
      available: "Evenings & Weekends",
    },
  ];

  const emergencyTypes = [
    {
      icon: Heart,
      title: "Critical Health Issues",
      symptoms: [
        "Difficulty breathing",
        "Severe injuries",
        "Sudden collapse",
        "Excessive bleeding",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Disease Outbreaks",
      symptoms: [
        "Multiple cattle affected",
        "Rapid spread of symptoms",
        "High fever",
        "Loss of appetite",
      ],
    },
    {
      icon: Shield,
      title: "Poisoning/Contamination",
      symptoms: [
        "Suspected poisoning",
        "Contaminated feed/water",
        "Neurological symptoms",
        "Sudden deaths",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center space-x-2 text-red-100 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-bold">CowCare Emergency</span>
            </div>
          </div>
        </div>
      </header>

      {/* Emergency Banner */}
      <div className="bg-red-500 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <AlertTriangle className="w-8 h-8" />
            <h1 className="text-3xl font-bold">EMERGENCY SERVICES</h1>
            <AlertTriangle className="w-8 h-8" />
          </div>
          <p className="text-xl">
            24/7 Emergency Veterinary Care for Your Cattle
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Emergency Contacts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Emergency Contacts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center border-l-4 border-red-500"
              >
                <Phone className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {contact.title}
                </h3>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-2xl font-bold text-red-600 hover:text-red-700 block mb-2"
                >
                  {contact.phone}
                </a>
                <p className="text-gray-600 mb-2">{contact.description}</p>
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {contact.available}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* When to Call Emergency */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            When to Call Emergency Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {emergencyTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {type.title}
                </h3>
                <ul className="space-y-2">
                  {type.symptoms.map((symptom, symptomIndex) => (
                    <li
                      key={symptomIndex}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Preparation Tips */}
        <div className="bg-yellow-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Emergency Preparation Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Before an Emergency
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    Keep emergency contact numbers readily available
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    Maintain a first aid kit for livestock
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    Know your farm's exact location and access routes
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    Keep medical records and vaccination history updated
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                During an Emergency
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    Stay calm and assess the situation
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    Call emergency services immediately
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    Isolate affected animals if possible
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">
                    Follow veterinarian instructions precisely
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Service Coverage Area
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Our emergency veterinary services cover a 50-mile radius from our
            main clinic.
          </p>
          <p className="text-gray-700">
            Response times vary based on location and weather conditions. Rural
            areas may experience longer response times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Emergency;