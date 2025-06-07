import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useState, useEffect } from "react";
import Register from '../components/Register';
import RocketPart from '../components/RocketPart';
import aboutPage from '../public/Image/aboutPage.png'
// import Register from '../components/Register';
import aboutNew from '../public/Image/aboutNew.png'

export default function AboutSection() {
    const [showRegister, setShowRegister] = useState(false);

    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>About Us - Code.LIBRARY</title>
                <meta
                    name="description"
                    content="Code.LIBRARY is a leading coding and math academy offering 1:1 live sessions, structured programs, and expert tutoring for students."
                />
                <meta
                    name="keywords"
                    content="coding academy, math tutoring, 1:1 sessions, online learning, programming courses, Code.LIBRARY"
                />
                <meta name="author" content="Code.LIBRARY" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="bg-white">
                <section className="bg-[#f5f5fa] py-5 px-4 md:px-10">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                            Personalized Learning for Math,<br />
                            Coding, and Competitive Exams
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base max-w-3xl mx-auto mb-8">
                            At Code LIBRARY, we offer engaging 1:1 live sessions in math, coding, and competitive exam coaching (SAT, ACT, SCRATCH, AP Physics). Our structured programs boost creativity, problem-solving skills, and real-world confidence.
                        </p>

                        {/* Replace with actual image later */}
                        <div className="w-full rounded-lg overflow-hidden shadow-md max-w-4xl mx-auto">
                            <Image
                                src={aboutPage} // Replace with your real image path
                                alt="Learning"
                                width={1200}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section>
                {/* About Us Section */}
                <div className="bg-[#EDE9FE]">
                <section className=" max-w-7xl mx-auto px-4 sm:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-black text-3xl sm:text-4xl font-bold">
                                About Us
                            </h2>
                            <h3 className="mt-8 text-2xl sm:text-3xl font-bold text-gray-800">
                                Empowering Next Gen with Personalized Education
                            </h3>
                            <p className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed">
                                At Code.LIBRARY, we offer 1:1 live sessions in math, coding, and competitive exam coaching (SAT, ACT,
                                SCRATCH, AP Physics). Our 30-session structured programs are tailored to each student's learning style,
                                ensuring they stay engaged and motivated throughout their journey. We focus on making learning fun and
                                interactive, helping students develop essential real-world skills, build confidence, and become problem
                                solvers. Our expert tutors create a supportive, creative environment that encourages critical thinking and
                                personal growth.
                            </p>
                            <button
                                className="mt-6 border-2 border-[#3a116f] text-[#3a116f] font-semibold px-6 py-3 rounded-md hover:bg-[#3a116f] hover:text-white transition"
                                onClick={() => setShowRegister(true)}
                            >
                                Join Us
                            </button>
                        </div>

                        {/* Right Side - Image Placeholder */}
                        <div className="w-full h-64 md:h-80 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                            <Image
                                src={aboutNew} // Replace with your real image path
                                alt="Learning"
                                width={1200}
                                height={700}
                                className="w-full h-auto object-cover mt-6 rounded-lg"
                            />
                        </div>
                    </div>
                </section>
                </div>

                {/* Mission Section */}
                <section className="bg-white py-16 px-4 md:px-10 text-center">
                    <h2 className="text-3xl font-bold text-[#301934] mb-10">Our Mission</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
                        {[
                            {
                                title: "Promote Code Reusability",
                                desc: "Build a library of tested, reusable components to streamline development time.",
                            },
                            {
                                title: "Ensure Quality",
                                desc: "Improve review process to maintain high standards in our code library.",
                            },
                            {
                                title: "Global Community",
                                desc: "Connect developers worldwide through knowledge sharing and collaboration.",
                            },
                            {
                                title: "Open Source",
                                desc: "Foster open-source contributions and community-driven development.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#EFE3EF] rounded-xl p-6 shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="font-bold text-md text-[#301934] mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-700">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Impact Section */}
                <section className="py-16 px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#301934] mb-10">Our Impact</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { number: "12,000+", label: "Programs Attended" },
                            { number: "45,000+", label: "Active Developers" },
                            { number: "70+", label: "Countries Reached" },
                            { number: "500+", label: "Community Contributors" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#EFE3EF] rounded-xl p-6 shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="text-xl font-bold text-[#301934]">{item.number}</h3>
                                <p className="text-sm text-gray-700">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Meet Our Team */}
                <section className="bg-white py-16 text-center">
                    <h2 className="text-3xl font-bold text-[#301934] mb-5">Meet Our Team</h2>
                    <div className="bg-[#EDE9FE] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-5 mx-auto py-20 justify-items-center ">
                        {[
                            { name: "Bhawana Thakare", title: "Academic Counselor", image: "/Image/Bhawana.png" },
                            { name: "Kavya Vihan", title: "Academic Counselor", image: "/Image/Kavaya.png" },
                        ].map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-28 h-28 object-cover rounded-full mb-3"
                                />
                                <p className="font-bold text-gray-800 text-lg sm:text-xl">{member.title}</p>
                                <p className="text-[#301934]">{member.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Meet Our Tutors */}
                <section className="bg-white   text-center">
                    <h2 className=" text-3xl font-bold text-[#301934] mb-10">Meet Our Tutors</h2>
                    <div className="bg-[#EDE9FE] w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 p-5 mx-auto py-20">
                        {[
                            { name: "Vidhi Kanoria", title: "Scratch Tutor", image: "/Image/Vidhi.png" },
                            { name: "Janani", title: "Scratch Tutor", image: "/Image/Janani.png" },
                            { name: "Keshav Bajpai", title: "Math Tutor", image: "/Image/Kashav.png" },
                            { name: "Mayukh Jana", title: "Math Tutor", image: "/Image/jana.png" },
                            { name: "Umangi", title: "Scratch Mentor", image: "/Image/Umangi.png" },
                            { name: "Sanya Batra", title: "Math Tutor", image: "/Image/Sayana.png" },
                        ].map((tutor, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={tutor.image}
                                    alt={tutor.name}
                                    className="w-28 h-28 object-cover rounded-full mb-3"
                                />
                                <p className="font-bold text-gray-800 text-center text-lg sm:text-xl">{tutor.title}</p>
                                <p className="text-[#301934]">{tutor.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Register Modal */}
                <Register isOpen={showRegister} onClose={() => setShowRegister(false)} />
            </div>
            {/* <RocketPart /> */}
        </>
    );
}
