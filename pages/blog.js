import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import Register from '../components/Register';
import { useState } from 'react';

import top from "../public/Blog/top.png"
import python from "../public/Blog/python.jpg"
import web from "../public/Blog/web.jpg"
import math from "../public/Blog/math.jpg"
import kinder from "../public/Blog/kinder.jpg"

export default function BlogSection() {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    // Add this inside your existing BlogSection component
    const handleOpenRegister = () => {
        setIsRegisterOpen(true);
    };

    const handleCloseRegister = () => {
        setIsRegisterOpen(false);
    };

    const blogs = [
        { name: "Mathematics", image: math, link: "/Blogs/BlogMaths" },
        { name: "Web Development", image: web, link: "/Blogs/BlogWeb" },
        { name: "Python", image: python, link: "/Blogs/BlogPython" },
    ];
    return (
        <>
            <Head>
                <title>Why Swift UI Should Be on the Radar of Every Mobile Developer</title>
                <meta name="description" content="Discover why Swift UI is essential for mobile developers. Learn more about its features and advantages in mobile development." />
                <meta name="keywords" content="Swift UI, Mobile Development, UI Design, Apple, Programming" />
            </Head>
            <section className="bg-[#EEF5FF]  py-12 px-6 md:px-16 lg:px-24">
                <div className="max-w-6xl mt-28 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-gray-600 text-sm">By Themadbrains in <span className="text-green-600 font-semibold">inspiration</span></p>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#2D3A55] mt-2">Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
                        <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <button
                            onClick={handleOpenRegister}
                            className="mt-6 bg-[#1DBF73] text-white px-6 py-3 rounded-md font-medium hover:bg-[#16a062] transition duration-300"
                        >
                            Start learning now
                        </button>
                    </div>
                    <div className="relative w-full h-64 md:h-80">
                        <Image src={top} alt="Swift UI Blog" layout="fill" objectFit="cover" className="rounded-md" />
                    </div>
                </div>
            </section>

            <section className="py-12 px-6 md:px-16 lg:px-24">
                <h2 className="text-2xl font-semibold text-[#E8F5E9] mb-6">
                    Reading Blog List
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <div className="relative w-full h-52 md:h-60 rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                                <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-md text-sm font-medium">
                                    {item.name}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <Register isOpen={isRegisterOpen} onClose={handleCloseRegister} />
        </>
    );
}
