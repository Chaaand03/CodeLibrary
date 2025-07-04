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
                <title>Code-Library Blogs list</title>
                <meta name="description" content="Discover why Swift UI is essential for mobile developers. Learn more about its features and advantages in mobile development." />
                <meta name="keywords" content="Swift UI, Mobile Development, UI Design, Apple, Programming" />
            </Head>
            <section className="bg-gradient-to-br from-[#EDE9FE] to-[#F3E8FF] py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold text-[#301934] mb-4 leading-tight">
              Learn Beyond Classrooms With Our Expert Blogs
            </h1>
            <p className="text-lg text-[#4B3869] mb-6">
              Dive deep into concepts that matter. Explore interactive articles, student tips, and coding insights written by our top mentors.
            </p>
            <button
              onClick={handleOpenRegister}
              className="bg-[#6B21A8] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#5A189A] transition duration-300"
            >
              Start Learning Now
            </button>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image src={top} alt="Blog Banner" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
      </section>

            <section className="py-12 px-6 bg-white md:px-16 lg:px-24">
                <h2 className="text-3xl font-semibold mb-6 text-[#301934] text-center py-8">
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
