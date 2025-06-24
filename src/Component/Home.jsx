import React from "react";
import { ArrowRight, Shield, Heart, Clock } from "lucide-react";
import Services from "./Services";
import About from "./About";

const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-green-50 to-green-100 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Expert Care for Your
                <span className="text-green-600 block">Cattle</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional veterinary services, health monitoring, and
                comprehensive care solutions for your livestock. Your cattle's
                health is our priority.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all">
                Emergency Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800">24/7 Protection</h3>
                <p className="text-sm text-gray-600">
                  Round-the-clock monitoring
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800">
                  Compassionate Care
                </h3>
                <p className="text-sm text-gray-600">
                  Gentle, expert treatment
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Quick Response</h3>
                <p className="text-sm text-gray-600">Fast emergency service</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Healthy cattle in pasture"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🐄</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">500+ Cattle</p>
                  <p className="text-sm text-gray-600">Successfully Treated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <div className="">
        <About />
      </div>
    </section>
  );
};

export default Home;
