import Head from "next/head";
import TandC from "../components/TandC"
import { useState, useEffect } from "react";
import Register from '../components/Register';
const Pricing = () => {
    const [showRegister, setShowRegister] = useState(false);
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>Affordable Pricing Plans | Get Started Today</title>
                <meta name="description" content="Explore our affordable pricing plans for online coaching and premium services. Choose from free, individual, and corporate plans." />
                <meta name="keywords" content="pricing, plans, online coaching, affordable, best subscription, membership, SaaS pricing" />
                <meta name="author" content="Your Brand Name" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Affordable Pricing Plans" />
                <meta property="og:description" content="Choose the perfect plan for your needs with our free, individual, and corporate pricing options." />
                <meta property="og:image" content="/assets/pricing-banner.png" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            {/* Pricing Section */}
            <section className="mt-16 py-20 px-6 lg:px-24 bg-gray-100">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-teal-600">Affordable Pricing</h2>
                    <p className="text-4xl font-bold text-teal-600">Choose Your Best Plan 144 Sessions</p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
                    {/* Free Plan */}
                    <div className="p-6 bg-white shadow-md rounded-lg text-center border-2 border-transparent hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <h3 className="text-lg text-gray-500">Premium</h3>
                        <p className="text-3xl font-bold text-gray-900"> $ 1999 </p>
                        <p className="text-3xl font-bold text-gray-900 line-through"> $ 2855</p>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>✅ 30% Discount</li>
                            <li>✅ 100% Upfront</li>
                            <li>✅ Course Switching Option</li>
                            <li>✅ Customer Support on Priority </li>
                            <li>✅ Email Support </li>
                        </ul>
                        <button onClick={() => setShowRegister(true)} className="mt-6 px-6 py-3 border rounded-lg text-teal-600 border-teal-600 hover:bg-teal-100 transition">
                            Buy Now
                        </button>
                    </div>

                    {/* Individual Plan */}
                    <div className="p-6 bg-white shadow-md rounded-lg text-center border-2 border-transparent hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <span className="absolute top-3 right-3 bg-blue-500 text-white text-sm px-3 py-1 rounded-lg">Platinum</span>
                        <h3 className="text-lg text-gray-500">👤 Pelatinum</h3>
                        <p className="text-3xl font-bold text-gray-900">$ 2299 </p>
                        <p className="text-3xl font-bold text-gray-900 line-through">$ 2875 </p>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>✅ 20% Discount</li>
                            <li>✅ 40% Down Payment $920</li>
                            <li>✅ Customer Support on Priority</li>
                            <li>✅ Email Support </li>

                        </ul>
                        <button onClick={() => setShowRegister(true)} className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
                            Buy Now
                        </button>
                    </div>

                    {/* Corporate Plan */}
                    <div className="p-6 bg-white shadow-md rounded-lg text-center border-2 border-transparent hover:border-teal-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <h3 className="text-lg text-gray-500">🏢 Basic</h3>
                        <p className="text-3xl font-bold text-gray-900">$ 2499 </p>
                        <p className="text-3xl font-bold text-gray-900 line-through">$ 3010 </p>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>✅ Components-driven system</li>
                            <li>✅ Sales-boosting landing pages</li>
                            <li>✅ Awesome Feather icons pack</li>
                            <li>✅ Themed into 3 different styles</li>
                        </ul>
                        <button onClick={() => setShowRegister(true)} className="mt-6 px-6 py-3 border rounded-lg text-teal-600 border-teal-600 hover:bg-teal-100 transition">
                            Buy Now
                        </button>
                    </div>
                </div>


                {/* CTA Section */}
                <div className="mt-16 bg-gray-900 text-white text-center p-10 rounded-lg">
                    <h3 className="text-2xl font-semibold">Online coaching lessons for remote learning.</h3>
                    <p className="mt-3 text-gray-300 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <button onClick={() => setShowRegister(true)} className="mt-5 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
                        Start Learning Now
                    </button>
                </div>
            </section>

            {/* Structured Data (SEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Pricing Plans",
                        "description": "Explore our affordable pricing plans for online coaching and premium services.",
                        "offers": [
                            {
                                "@type": "Offer",
                                "priceCurrency": "USD",
                                "price": "0",
                                "category": "Free Plan",
                            },
                            {
                                "@type": "Offer",
                                "priceCurrency": "USD",
                                "price": "24",
                                "category": "Individual Plan",
                            },
                            {
                                "@type": "Offer",
                                "priceCurrency": "USD",
                                "price": "12",
                                "category": "Corporate Plan",
                            }
                        ]
                    }),
                }}
            />
            <TandC />

            <Register isOpen={showRegister} onClose={() => setShowRegister(false)} />
        </>
    );
};

export default Pricing;
