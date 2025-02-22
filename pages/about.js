import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import officeImage1 from "../public/Image/aboutone.png"; //
import officeImage2 from "../public/Image/abouttwo.png"; //
import { useState } from "react";
import Register from "../components/Register";

export default function AboutUs() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className=" bg-gray-100 mt-28">
      {/* SEO Meta Tags */}
      <Head>
        <title>About Us - Weekend UX</title>
        <meta
          name="description"
          content="Weekend UX is a leading UI/UX Design Academy in Delhi, offering training in User Experience and Interface Design."
        />
        <meta
          name="keywords"
          content="UI/UX Design, User Interface, User Experience, UX Training, Weekend UX, Design Academy"
        />
        <meta name="author" content="Weekend UX" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* About Us Section */}
      <section className=" max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-green-700 text-3xl sm:text-4xl font-bold">
              About Us
            </h2>
            <h3 className="mt-8 text-2xl sm:text-3xl font-bold text-gray-800">
              <span className="text-yellow-500">CODE.LIBRARY</span> create the best
              courses for students.
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
            Our courses encourage students to think outside the box and explore innovative solutions to real-world problems. By embracing creativity and experimentation, students develop the confidence to tackle complex challenges.
            </p>
            {/* <p className="mt-3 text-gray-600 leading-relaxed">
              Our mission is to help students and professionals gain
              industry-ready UX/UI skills through top-tier courses. Join us in
              shaping a better design future!
            </p> */}

            {/* Join Us Button */}
            <button
              onClick={() => setShowRegister(true)}
              className="mt-6 er bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center gap-2 cursor-pointer"
            >
              Join Us →
            </button>
          </div>
          {/* Right Images Section */}
          <div className="relative w-full h-[320px] sm:h-[380px] flex justify-center items-center">
            {/* Background Shape */}
            <div className="absolute w-[70%] h-[70%] bg-gray-800 rounded-lg -z-10"></div>

            {/* Top Image */}
            <div className="absolute top-0 right-0 w-[55%] sm:w-[52%]">
              <Image
                src={officeImage1}
                alt="Modern office space"
                layout="responsive"
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Bottom Image */}
            <div className="absolute bottom-0 left-0 w-[55%] sm:w-[52%]">
              <Image
                src={officeImage2}
                alt="UX design session"
                layout="responsive"
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <Register isOpen={showRegister} onClose={() => setShowRegister(false)} />


      </section>
    </div>
  );
}
