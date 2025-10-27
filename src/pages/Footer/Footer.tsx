import React from 'react';

const Footer = () => {
    const logoSrc = "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760827265/hd_s_shmnfn.png";
    const bgImageSrc = "https://res.cloudinary.com/dqkczdjjs/image/upload/v1760817696/footer_Container_iwkz6a.png"; 

    return (
        <footer className="relative w-full mt-10 text-white overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" 
                style={{ backgroundImage: `url(${bgImageSrc})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 md:gap-y-12 lg:gap-8">

                    {/* Column 1: Logo */}
                    <div className="flex lg:ml-0 ml-10 items-center sm:justify-center md:justify-start lg:items-start lg:justify-start">
                        <div>
                            <img src={logoSrc} alt="Eastmond Villas Logo" className="h-16 w-auto rounded-full" />
                            <img className='mt-5' src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760983755/Frame_1000004348_e4uzeb.png" alt="" />
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="text-center sm:text-left md:text-left">
                        <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Quick Links</h4>
                        <ul className="space-y-2 md:space-y-3">
                            <li><a href="/" className="hover:text-teal-400 transition-colors duration-200">Home</a></li>
                            <li><a href="/about" className="hover:text-teal-400 transition-colors duration-200">About Us</a></li>
                            <li><a href="/list-with-us" className="hover:text-teal-400 transition-colors duration-200">List With Us</a></li>
                            <li><a href="/contact" className="hover:text-teal-400 transition-colors duration-200">Contact</a></li>
                            <li><a href="https://ricoholder-dashboard.netlify.app/admin-dashboard" className="hover:text-teal-400 transition-colors duration-200">Dashboard</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Address */}
                    <div className="text-center sm:text-left md:text-left">
                        <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Address</h4>
                        <div className="flex items-start justify-center sm:justify-start md:justify-start space-x-3">
                            <svg className="h-6 w-6 text-teal-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <p className="text-sm md:text-base">#65 Husbands Gardens,<br />St. James, Barbados BB 23042</p>
                        </div>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="text-center sm:text-left md:text-left">
                        <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Contact</h4>
                        <div className="space-y-2 md:space-y-3">
                            <div className="flex items-center justify-center sm:justify-start md:justify-start space-x-3">
                                <svg className="h-6 w-6 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06L6.222 10.27A10 10 0 0011.72 13.78l1.624-1.624a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.163 18 2 12.837 2 6V3z" />
                                </svg>
                                <p className="text-sm md:text-base">+1 (246) 233-EAST</p>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start md:justify-start space-x-3">
                                <svg className="h-6 w-6 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0018 4H2a2 2 0 00-.003 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <p className="text-sm md:text-base">info@eastmondvillas.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 5: Follow Us */}
                    <div className="text-center sm:text-left md:text-left">
                        <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Follow Us</h4>
                        <div className="flex items-center justify-center sm:justify-start md:justify-start space-x-4">
                            <a href="https://www.facebook.com/" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                              <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760826820/Frame_dccruw.png" alt="Facebook" />
                            </a>
                            <a  href="https://www.instagram.com/" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                               <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760826937/Frame_1_m7bui5.png" alt="Instagram" />
                            </a>
                            <a href="https://x.com/" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                              <img src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760826976/Frame_2_dmncqr.png" alt="Twitter" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Separator Line */}
                <hr className="border-gray-600 my-8 md:my-12" />

                {/* Copyright */}
                <div className="text-center text-gray-400 text-sm md:text-base">
                    &copy; {new Date().getFullYear()} Eastmond Villas. All Rights Reserved Worldwide.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
