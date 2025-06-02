"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import sat from "../public/Courses/sat.png";
import amc6 from "../public/Courses/amc6.png";
import amc8 from "../public/Courses/amct8.png";
import amc10 from "../public/Courses/amc10.png";
import amc12 from "../public/Courses/amc12.png";
import act from "../public/Courses/act.png";
import phy from "../public/Courses/phy.png";

import Sat from "../pages/CompetitiveExams/Sat";
// import AMC6 from "../components/Copi/AMC6";
// import AMC8 from "../components/Copi/AMC8";

const courses = [
  {
    name: "GRADE-8+",
    detail: "SAT",
    img: sat,
    path: "/CompetitiveExams/Sat",
  },
  {
    name: "GRADE - 4,5",
    detail: "AMC6",
    img: amc6,
    path: "/CompetitiveExams/AMC6",
  },
  {
    name: "GRADE - 6,7",
    detail: "AMC8",
    img: amc8,
   path: "/CompetitiveExams/AMC8",
  },
  {
    name: "GRADE - 8,9",
    detail: "AMC10",
    img: amc10,
    path: "/CompetitiveExams/AMC10",
  },
  {
    name: "GRADE - 10,11",
    detail: "AMC12",
    img: amc12,
    path: "/CompetitiveExams/AMC12",
  },
  {
    name: "GRADE - 8+",
    detail: "ACT",
    img: act,
    path: "/CompetitiveExams/ACT",
  },
  {
    name: "GRADE - 10+",
    detail: "AP Physics",
    img: phy,
    path: "/CompetitiveExams/ApPhysics",
  },
];

const fadeUpAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CourseMenu = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine how many courses to show based on screen size
  const getCoursesToShow = () => {
    if (showAll) {
      return courses;
    }
    // Show 4 courses for one row (responsive: 1 on mobile, 2 on sm, 4 on md+)
    return courses.slice(0, 4);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="py-12 px-4 md:px-10 bg-[#f8f8ff] text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Competitive Exams</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
        {getCoursesToShow().map((course, index) => (
          <motion.div
            key={index}
            className="bg-[#D8BFD8] rounded-lg shadow-md text-center w-74 sm:w-80  hover:shadow-lg transition-all duration-300"
            variants={fadeUpAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src={course.img}
              alt={course.name}
              className="rounded-md w-full h-44 object-cover"
              width={300}
              height={200}
            />

            <div className="mt-4 mb-2">
              <p className="text-xs font-bold text-white bg-purple-600 inline-block px-3 py-1 rounded-full mb-2">
                {course.name}
              </p>
              <h3 className="text-md font-semibold text-gray-800 mb-4">{course.detail}</h3>

              <Link
                href={course.path}
                className="inline-block border border-purple-700 text-purple-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-purple-100 transition"
              >
                Know More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <button
          onClick={toggleShowAll}
          className="border border-purple-600 text-purple-600 px-6 py-3 rounded-md font-semibold hover:bg-purple-100 transition"
        >
          {showAll ? "Less Exams" : "More Exams"}
        </button>
      </div>
    </section>
  );
};

export default CourseMenu;
