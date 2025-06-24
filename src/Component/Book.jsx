// import React, { useState } from "react";
// import {
//   ArrowLeft,
//   Calendar,
//   Clock,
//   User,
//   Phone,
//   Mail,
//   MapPin,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Book = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     farmLocation: "",
//     serviceType: "",
//     preferredDate: "",
//     preferredTime: "",
//     cattleCount: "",
//     additionalInfo: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Appointment booking submitted:", formData);
//     // Handle form submission here
//     alert(
//       "Thank you! Your appointment request has been submitted. We will contact you within 24 hours to confirm."
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm sticky top-0 z-50">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             <Link
//               to="/"
//               className="flex items-center space-x-2 text-green-600 hover:text-green-700"
//             >
//               <ArrowLeft className="w-5 h-5" />
//               <span>Back to Home</span>
//             </Link>
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">CC</span>
//               </div>
//               <span className="text-xl font-bold text-gray-800">CowCare</span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-gray-800 mb-4">
//               Schedule Your Consultation
//             </h1>
//             <p className="text-xl text-gray-600">
//               Book a professional consultation for your cattle's health and
//               wellness needs.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Form */}
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <User className="w-4 h-4 inline mr-2" />
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                       placeholder="Enter your full name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <Mail className="w-4 h-4 inline mr-2" />
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                       placeholder="Enter your email"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <Phone className="w-4 h-4 inline mr-2" />
//                       Phone Number *
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                       placeholder="(555) 123-4567"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <MapPin className="w-4 h-4 inline mr-2" />
//                       Farm Location *
//                     </label>
//                     <input
//                       type="text"
//                       name="farmLocation"
//                       value={formData.farmLocation}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                       placeholder="City, State"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Service Type *
//                   </label>
//                   <select
//                     name="serviceType"
//                     value={formData.serviceType}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   >
//                     <option value="">Select a service</option>
//                     <option value="health-examination">
//                       Health Examination
//                     </option>
//                     <option value="vaccination">Vaccination Program</option>
//                     <option value="nutrition-planning">
//                       Nutrition Planning
//                     </option>
//                     <option value="health-monitoring">
//                       Health Monitoring Setup
//                     </option>
//                     <option value="consultation">General Consultation</option>
//                   </select>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <Calendar className="w-4 h-4 inline mr-2" />
//                       Preferred Date *
//                     </label>
//                     <input
//                       type="date"
//                       name="preferredDate"
//                       value={formData.preferredDate}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       <Clock className="w-4 h-4 inline mr-2" />
//                       Preferred Time *
//                     </label>
//                     <select
//                       name="preferredTime"
//                       value={formData.preferredTime}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     >
//                       <option value="">Select time</option>
//                       <option value="8:00 AM">8:00 AM</option>
//                       <option value="10:00 AM">10:00 AM</option>
//                       <option value="12:00 PM">12:00 PM</option>
//                       <option value="2:00 PM">2:00 PM</option>
//                       <option value="4:00 PM">4:00 PM</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Number of Cattle
//                   </label>
//                   <input
//                     type="number"
//                     name="cattleCount"
//                     value={formData.cattleCount}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     placeholder="Approximate number"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Additional Information
//                   </label>
//                   <textarea
//                     name="additionalInfo"
//                     value={formData.additionalInfo}
//                     onChange={handleInputChange}
//                     rows={4}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     placeholder="Any specific concerns or requirements..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
//                 >
//                   Book Appointment
//                 </button>
//               </form>
//             </div>

//             {/* Info Panel */}
//             <div className="space-y-8">
//               <div className="bg-green-50 rounded-xl p-8">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                   What to Expect
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
//                     <p className="text-gray-700">
//                       Professional assessment of your cattle's health
//                     </p>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
//                     <p className="text-gray-700">
//                       Customized care recommendations
//                     </p>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
//                     <p className="text-gray-700">
//                       On-farm visit by certified veterinarians
//                     </p>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
//                     <p className="text-gray-700">
//                       Follow-up support and monitoring
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-lg p-8">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">
//                   Contact Information
//                 </h3>
//                 <div className="space-y-3">
//                   <div className="flex items-center space-x-3">
//                     <Phone className="w-5 h-5 text-green-600" />
//                     <span className="text-gray-700">(555) 123-4567</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <Mail className="w-5 h-5 text-green-600" />
//                     <span className="text-gray-700">info@cowcare.com</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <MapPin className="w-5 h-5 text-green-600" />
//                     <span className="text-gray-700">
//                       Serving farms across the region
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Book;

import React from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-bold text-gray-800">CowCare</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Schedule Your Consultation
            </h1>
            <p className="text-xl text-gray-600">
              Book a professional consultation for your cattle's health and
              wellness needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form (Static) */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Farm Location *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                    <option>Select a service</option>
                    <option>Health Examination</option>
                    <option>Vaccination Program</option>
                    <option>Nutrition Planning</option>
                    <option>Health Monitoring Setup</option>
                    <option>General Consultation</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Preferred Time *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                      <option>Select time</option>
                      <option>8:00 AM</option>
                      <option>10:00 AM</option>
                      <option>12:00 PM</option>
                      <option>2:00 PM</option>
                      <option>4:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Cattle
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Approximate number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Any specific concerns or requirements..."
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Book Appointment
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="space-y-8">
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      Professional assessment of your cattle's health
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      Customized care recommendations
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      On-farm visit by certified veterinarians
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">
                      Follow-up support and monitoring
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">info@cowcare.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      Serving farms across the region
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

