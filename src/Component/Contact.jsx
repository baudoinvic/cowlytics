import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20  text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-500">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Ready to provide the best care for your cattle? Contact us today for
            professional veterinary services and consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-500">Phone</h3>
            <p className="text-gray-500">(555) 123-4567</p>
            <p className="text-gray-500">(555) 987-6543</p>
          </div>

          <div className="text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-500">Email</h3>
            <p className="text-gray-500">info@cowcare.com</p>
            <p className="text-gray-500">emergency@cowcare.com</p>
          </div>

          <div className="text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-500">
              Location
            </h3>
            <p className="text-gray-500">123 Farm Road</p>
            <p className="text-gray-500">Rural County, ST 12345</p>
          </div>

          <div className="text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-500">Hours</h3>
            <p className="text-gray-500">Mon-Fri: 7AM-6PM</p>
            <p className="text-gray-500">24/7 Emergency</p>
          </div>
        </div>

        <div className="bg-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Request a Consultation
          </h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Enter your phone"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Service Needed
              </label>
              <select className="w-full px-4 py-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                <option>Select a service</option>
                <option>Health Examination</option>
                <option>Vaccination</option>
                <option>Emergency Care</option>
                <option>Consultation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Tell us about your cattle care needs..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
