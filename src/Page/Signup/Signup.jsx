import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../assets/BlackLogo.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../Auth/firebase_config_init';
import { Bounce, ToastContainer, toast } from 'react-toastify';
const Signup = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const Navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                if (user) {
                    setLoading(true);  // Show spinner

                    // Simulate a delay (e.g., API call or any async task)
                    setTimeout(() => {
                        setLoading(false);
                        Navigate('/login');
                    }, 2000);
                }
                // ... 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (error) {
                    toast('Please provide a strong password');
                }
                console.log(errorCode, errorMessage);

                // ..
            });

    };

    return (
        <div>
            {
                loading && <div className='text-center mt-96'>
                    <span className="loading loading-infinity loading-lg"></span>
                </div>
            }
            {
                !loading &&
                <div>
                    <div>
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

                            {/* login form start */}

                            <div className="w-full p-4 md:p-0 mx-auto mt-5 md:w-4/12">
                                <div className="border-gray-200 border rounded-md">
                                    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                                        <h2 className="text-2xl font-bold ml-2 text-black mb-6">Sign Up</h2>
                                        <form onSubmit={handleSignUp}>
                                            {/* 1stName Input */}
                                            <div className="mb-4">
                                                <input
                                                    type="text"
                                                    name='name'
                                                    id="Name"
                                                    className="w-full p-2 bg-transparent text-gray-700 
                         placeholder-black border-b border-gray-300 
                         focus:border-yellow-500 focus:outline-none"
                                                    placeholder="First Name"
                                                    required
                                                />
                                            </div>

                                            {/*Email Input */}
                                            <div className="mb-4">
                                                <input
                                                    name='email'
                                                    type="email"
                                                    id="email"
                                                    className="w-full p-2 bg-transparent text-gray-700 
                         placeholder-black border-b border-gray-300 
                         focus:border-yellow-500 focus:outline-none"
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>

                                            {/* Password Input */}
                                            <div className="mb-4">
                                                <input
                                                    name='password'
                                                    type="password"
                                                    id="password"
                                                    className="w-full p-2 bg-transparent text-gray-700 
                         placeholder-black border-b border-gray-300 
                         focus:border-yellow-500 focus:outline-none"
                                                    placeholder="Password"
                                                    required
                                                />
                                            </div>

                                            {/* Remember Me Checkbox */}
                                            <div className="flex items-center mb-4 justify-between mt-8">
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        id="remember"
                                                        className="mr-2 "
                                                    />
                                                    <label htmlFor="remember" className="text-gray-600">Remember Me</label>
                                                </div>
                                            </div>


                                            {/* Login Button */}
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="w-full p-3 bg-orange-400 text-black  hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                >
                                                    Sign Up
                                                </button>
                                            </div>

                                        </form>
                                        {/* Create Account Option */}
                                        <div className="mt-4 text-center">
                                            <p className="text-sm text-gray-600">
                                                Have already an account?{' '}
                                                <Link to='/login' className="text-orange-400 hover:underline font-semibold">login</Link>
                                            </p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            {/* login form end */}
                            <div className='flex items-center md:w-4/12 mx-auto w-10/12 my-4'>
                                <hr className='flex-grow border-gray-400' />
                                <span class="mx-4 text-gray-800">or</span>
                                <hr class="flex-grow  border-gray-400" />
                            </div>
                            {/* login another */}
                            <div className='w-full p-10 md:p-0 mx-auto md:mt-5 md:w-4/12'>
                                <div className='flex  cursor-pointer hover:border-blue-500  p-2 text-2xl border-gray-400 rounded-full border'>
                                    <FaFacebook className='text-blue-500 text-4xl'></FaFacebook>
                                    <h1 className='ml-8 md:ml-20'>Continue with Facebook</h1>
                                </div>
                                <div className='flex  cursor-pointer hover:border-yellow-500 p-2 mt-3 text-2xl border-gray-400 rounded-full border'>
                                    <FcGoogle className='text-4xl'></FcGoogle>
                                    <h1 className='ml-10 md:ml-24'>Continue with Google</h1>
                                </div>
                            </div>
                            {/* login another end */}
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Footer></Footer>
                    </div>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Bounce}
                    />
                </div>
            }

        </div>


    );
};

export default Signup;