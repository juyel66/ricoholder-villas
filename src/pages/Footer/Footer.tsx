import React from 'react';

const Footer = () => {
    // Dummy logo image URL
    const logoSrc = "public/images/hd_svg_logo.png"; // Placeholder logo
    // Background image URL (REPLACE with your actual image path if it's local)
    const bgImageSrc = "public/images/footer.png"; 

    return (
        <footer className="relative w-full mt-10 text-white overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${bgImageSrc})` }}
            >
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-00 opacity-80"></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 md:gap-y-16 lg:gap-8">
                    {/* Column 1: Logo */}
                    <div className="flex items-center lg:items-start justify-center lg:justify-start">
                        <img src={logoSrc} alt="Eastmond Villas Logo" className="h-16 w-auto" />
                     
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Home</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">About Us</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">List With Us</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Address */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold mb-6">Address</h4>
                        <div className="flex items-start justify-center md:justify-start space-x-3">
                            <svg className="h-6 w-6 text-teal-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <p>#65 Husbands Gardens,<br />St. James, Barbados BB 23042</p>
                        </div>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold mb-6">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-center justify-center md:justify-start space-x-3">
                                <svg className="h-6 w-6 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06L6.222 10.27A10 10 0 0011.72 13.78l1.624-1.624a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.163 18 2 12.837 2 6V3z" />
                                </svg>
                                <p>+1 (246) 233-EAST</p>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-3">
                                <svg className="h-6 w-6 text-teal-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0018 4H2a2 2 0 00-.003 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <p>info@eastmondvillas.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 5: Follow Us */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
                        <div className="flex items-center justify-center md:justify-start space-x-4">
                            <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.002 3.792.043 1.052.044 1.706.208 2.227.418.558.216.965.495 1.348.878.384.383.664.79.88 1.348.21.52.374 1.175.418 2.227.04.99.043 1.344.043 3.792s-.002 2.784-.043 3.792c-.044 1.052-.208 1.706-.418 2.227-.216.558-.495.965-.878 1.348-.383.384-.79.664-1.348.88-.52.21-1.175.374-2.227.418-.99.04-1.344.043-3.792.043s-2.784-.002-3.792-.043c-1.052-.044-1.706-.208-2.227-.418-.558-.216-.965-.495-1.348-.878-.384-.383-.664-.79-.88-1.348-.21-.52-.374-1.175-.418-2.227-.04-.99-.043-1.344-.043-3.792s.002-2.784.043-3.792c.044-1.052.208-1.706.418-2.227.216-.558.495-.965.878-1.348.383-.384.79-.664.88-1.348.21-.52.374-1.175.418-2.227.04-.99.043-1.344.043-3.792s-.002-2.784-.043-3.792c-.044-1.052-.208-1.706-.418-2.227-.216-.558-.495-.965-.878-1.348C4.303 3.056 3.896 2.777 3.338 2.56c-.52-.21-1.175-.374-2.227-.418C.123 2.002-.231 2-.693 2h-.03zM12 4.076c-3.257 0-5.924 2.667-5.924 5.924s2.667 5.924 5.924 5.924 5.924-2.667 5.924-5.924-2.667-5.924-5.924-5.924zm0 2c2.14 0 3.924 1.784 3.924 3.924s-1.784 3.924-3.924 3.924-3.924-1.784-3.924-3.924 1.784-3.924 3.924-3.924z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.297 3.334c-.28.163-.61.272-.942.325-.333.053-.666.08-1.002.08-2.022 0-3.666-1.644-3.666-3.666C2.687 1.64 4.331 0 6.353 0c.932 0 1.78.36 2.417.962L10.038 2.107l1.268-1.145c.636-.59 1.484-.952 2.416-.952 2.022 0 3.666 1.644 3.666 3.666 0 2.022-1.644 3.666-3.666 3.666-.336 0-.669-.027-1.002-.08-.332-.053-.662-.162-.942-.325l-.946-.549-.946.549zM12 6.666c-1.396 0-2.684.567-3.626 1.602l-1.468 1.608L12 18.002l4.622-7.126-1.468-1.608C14.684 7.233 13.396 6.666 12 6.666z"/>
                                    <path d="M12 21.334c-2.43 0-2.784-.002-3.792-.043-1.052-.044-1.706-.208-2.227-.418-.558-.216-.965-.495-1.348-.878-.384-.383-.664-.79-.88-1.348-.21-.52-.374-1.175-.418-2.227-.04-.99-.043-1.344-.043-3.792s.002-2.784.043-3.792c.044-1.052.208-1.706.418-2.227.216-.558.495-.965.878-1.348.383-.384.79-.664.88-1.348.21-.52.374-1.175.418-2.227.04-.99.043-1.344.043-3.792s-.002-2.784-.043-3.792c-.044-1.052-.208-1.706-.418-2.227-.216-.558-.495-.965-.878-1.348C4.303 3.056 3.896 2.777 3.338 2.56c-.52-.21-1.175-.374-2.227-.418C.123 2.002-.231 2-.693 2h-.03zM12 4.076c-3.257 0-5.924 2.667-5.924 5.924s2.667 5.924 5.924 5.924 5.924-2.667 5.924-5.924-2.667-5.924-5.924-5.924zm0 2c2.14 0 3.924 1.784 3.924 3.924s-1.784 3.924-3.924 3.924-3.924-1.784-3.924-3.924 1.784-3.924 3.924-3.924z" clipRule="evenodd" />
                                    <path d="M12 6.666c-1.396 0-2.684.567-3.626 1.602l-1.468 1.608L12 18.002l4.622-7.126-1.468-1.608C14.684 7.233 13.396 6.666 12 6.666z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.872v-7.872h-2.731v-2h2.731v-2.13c0-2.723 1.657-4.223 4.128-4.223 1.18 0 2.294.215 2.294.215v2.549h-1.3c-1.349 0-1.769.839-1.769 1.722V12h3.097l-.493 2h-2.604v7.872C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Separator Line */}
                <hr className="border-gray-700 my-12" />

                {/* Copyright */}
                <div className="text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} all rights reserved by Eastmodvillas.
                </div>
            </div>
        </footer>
    );
};

export default Footer;