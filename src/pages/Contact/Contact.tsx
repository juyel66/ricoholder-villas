import React, { useState } from 'react';

const Contact = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log("Form Data Submitted:", formData); // Log all form values to console
        // You can add further logic here, e.g., send to API
        alert("Message Sent! Check console for data."); 
        // Optionally clear the form
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <section className="bg-white py-16 md:py-28 container mx-auto">
            <div className="  ">
                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16 md:mb-20">
                    Let's Connect
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* LEFT COLUMN: Contact Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
                        <p className="text-lg font-semibold text-gray-700 mb-6">Get In Touch</p>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        {/* Name Icon */}
                                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg"
                                        placeholder="Alex"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email and Phone Inputs (Side by Side) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            {/* Email Icon */}
                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0018 4H2a2 2 0 00-.003 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg"
                                            placeholder="demo@gmail.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone Input */}
                                <div>
                                    <label htmlFor="phone" className="sr-only">Phone</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            {/* Phone Icon */}
                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06L6.222 10.27A10 10 0 0011.72 13.78l1.624-1.624a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.163 18 2 12.837 2 6V3z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="tel" // Using type="tel" for better mobile keyboard experience
                                            name="phone"
                                            id="phone"
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg"
                                            placeholder="01845756776"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message Input */}
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4" // Roughly matches the visual height
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-lg"
                                    placeholder="Write Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center w-full px-6 py-3 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: Image with Decorative Accents */}
                    <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-3xl shadow-xl flex items-center justify-center">
                        <img 
                            src="/public/images/contactImage.png" // Placeholder image
                            alt="Professional woman in a luxury office setting"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        {/* Blue/Teal Decorative Accents (Adjust position/size as needed) */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-300 opacity-60 rounded-full blur-md lg:w-24 lg:h-24"></div>
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-teal-300 opacity-60 rounded-full blur-md lg:w-28 lg:h-28"></div>
                         <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-teal-500 rounded-tr-lg"></div>
                         <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-teal-500 rounded-bl-lg"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;