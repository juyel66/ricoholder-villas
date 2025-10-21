import React, { useState } from "react";

// Define types for cleaner React code
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="mt-26 bg-white py-16 md:py-24 lg:py-28 container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out">
      <div>
        {/* Main Heading */}
        <h2 className="text-5xl md:text-4xl sm:text-3xl font-extrabold text-gray-900 text-center mb-16 md:mb-20 transition-all duration-500 ease-in-out">
          Let's Connect
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-500 ease-in-out">
          {/* LEFT COLUMN: Contact Form */}
          <div className="bg-white p-8 sm:p-6 md:p-10 rounded-3xl shadow-lg border border-gray-200 transition-all duration-500 ease-in-out">
            <p className="text-xl md:text-lg sm:text-base font-semibold text-gray-700 mb-6 transition-all duration-500 ease-in-out">
              Get In Touch
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg transition-all duration-500 ease-in-out"
                    placeholder="Alex"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email and Phone Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0018 4H2a2 2 0 00-.003 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg transition-all duration-500 ease-in-out"
                      placeholder="demo@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06L6.222 10.27A10 10 0 0011.72 13.78l1.624-1.624a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.163 18 2 12.837 2 6V3z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg transition-all duration-500 ease-in-out"
                      placeholder="Enter Your Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg transition-all duration-500 ease-in-out"
                  placeholder="Write Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <p className="text-center text-lg font-semibold text-green-600 bg-green-50 p-3 rounded-lg transition-all duration-500 ease-in-out">
                  Message Sent! We will get back to you shortly.
                </p>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center w-full px-6 py-3 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-500 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="transition-all duration-500 ease-in-out">
            <img
              src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760835086/Frame_1000004224_1_zrb6bg.png"
              alt="Contact illustration"
              className="w-full h-auto rounded-xl shadow-xl object-cover transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
