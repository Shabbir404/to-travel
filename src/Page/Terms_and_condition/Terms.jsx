import logo from '../../assets/BlackLogo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
const Terms = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            {/* header */}
            <div className='w-10/12 mx-auto'>
                {/* Desktop View */}
                <div className='hidden md:flex'>
                    <div className='mt-2'>
                        <Link to='/'>
                            <img className='h-32 w-60' src={logo} alt="" />
                        </Link>
                    </div>
                    <div className='mt-12 space-x-12 text-font flex ml-auto'>
                        <div className='mt-2'>
                            <Link className='ml-16 text-black'>Destination</Link>
                            <Link className='ml-16 text-black'>Blog</Link>
                            <Link className='ml-16 text-black'>Contact</Link>
                        </div>
                        <div>
                            <button className='bg-yellow-500 text-black rounded px-8 py-2'>Login</button>
                        </div>
                    </div>
                </div>

                {/* Mobile View */}
                <div>
                    <div className='flex items-center justify-between md:hidden'>
                        <Link>
                            <img className='w-48 h-20' src={logo} alt="" />
                        </Link>
                        <button
                            className='text-black text-2xl'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            ☰
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div>
                            <div className='md:hidden bg-black bg-opacity-90 mt-2 p-4'>
                                <Link className='block text-black py-2'>Destination</Link>
                                <Link className='block text-black py-2'>Blog</Link>
                                <Link className='block text-black py-2'>Contact</Link>
                                <button className='bg-yellow-500 text-black rounded px-8 py-2 mt-2 w-full'>Login</button>
                            </div>
                        </div>
                    )}
                </div>
                <hr />
            </div>
            {/* header end */}

            < div >
                <div className="min-h-screen bg-gray-100 p-6">
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy and Data Collection Policy</h1>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-semibold">1. Introduction</h2>
                            <p>
                                At our booking site, we respect and value your privacy. This Privacy Policy explains how we collect, use, and protect
                                your personal information when you use our website and services.
                            </p>

                            <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
                            <p>
                                We collect the following types of information when you use our services:
                            </p>
                            <ul className="list-disc pl-6">
                                <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details.</li>
                                <li><strong>Booking Information:</strong> Date and time of service bookings, location preferences, and service choices.</li>
                                <li><strong>Device Information:</strong> IP address, browser type, operating system, and other technical information.</li>
                                <li><strong>Cookies:</strong> We use cookies to improve your experience and provide better services.</li>
                            </ul>

                            <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
                            <p>
                                We use the information we collect in the following ways:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>To process and confirm your bookings and payments.</li>
                                <li>To send you booking confirmations, reminders, and customer service updates.</li>
                                <li>To improve our website, services, and user experience.</li>
                                <li>To communicate with you about promotional offers, updates, and newsletters (if you've opted in).</li>
                                <li>To comply with legal obligations and resolve disputes.</li>
                            </ul>

                            <h2 className="text-2xl font-semibold">4. Data Security</h2>
                            <p>
                                We take the security of your personal data seriously. We use industry-standard security measures to protect your information
                                from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the Internet
                                or method of electronic storage is 100% secure.
                            </p>

                            <h2 className="text-2xl font-semibold">5. Sharing Your Information</h2>
                            <p>
                                We do not sell, rent, or share your personal information with third parties except in the following cases:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>With service providers who assist in operating the website and processing payments.</li>
                                <li>If required by law or in response to a legal request (e.g., a subpoena or court order).</li>
                                <li>With your consent, for example, if you sign up for promotional offers or third-party services.</li>
                            </ul>

                            <h2 className="text-2xl font-semibold">6. Cookies and Tracking Technologies</h2>
                            <p>
                                Our website uses cookies to enhance your experience. Cookies are small text files placed on your device that allow us to
                                recognize you and improve our services. You can manage or disable cookies through your browser settings.
                            </p>

                            <h2 className="text-2xl font-semibold">7. Data Retention</h2>
                            <p>
                                We retain your personal data only as long as necessary for the purposes outlined in this Privacy Policy or as required
                                by law. When your information is no longer needed, we will securely delete or anonymize it.
                            </p>

                            <h2 className="text-2xl font-semibold">8. Your Rights</h2>
                            <p>
                                You have the right to access, correct, update, or delete your personal information. You may also opt out of receiving
                                promotional emails or notifications from us at any time.
                            </p>

                            <h2 className="text-2xl font-semibold">9. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy and Data Collection Policy from time to time. If any significant changes are made, we will
                                notify you through email or by posting a notice on our website.
                            </p>

                            <h2 className="text-2xl font-semibold">10. Contact Us</h2>
                            <p>
                                If you have any questions or concerns about this Privacy Policy or the way we handle your personal data, please contact us
                                at privacy@bookingsite.com.
                            </p>
                        </section>

                        <div className="mt-8 text-center">
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                                I Agree to the Privacy and Data Collection Policy
                            </button>
                        </div>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </div>
    );
};

export default Terms;