import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-screen-xl mx-auto px-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
                            <li><a href="#" className="hover:text-yellow-500">Destinations</a></li>
                            <li><a href="#" className="hover:text-yellow-500">Services</a></li>
                            <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
                            <li><a href="/terms" className="hover:text-yellow-500">Privecy && Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="mb-2">123 Travel St, Cityville, Country</p>
                        <p className="mb-2">Phone: +123 456 789</p>
                        <p>Email: info@travelwebsite.com</p>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-yellow-500">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="mb-4">Subscribe to get the latest travel news and updates.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-3 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                            <button className="p-3 bg-yellow-500 text-black rounded-r-md hover:bg-yellow-600">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center">
                    <p>&copy; 2025 TravelWebsite. All Rights Reserved.</p>
                    <p>&copy; This Demo site developed by "Shabbir Ahamed"</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
