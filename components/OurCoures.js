import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import math from "../public/Courses/math.png";
import python from "../public/Courses/python.png";
import web from "../public/Courses/web.png";
import scratch  from "../public/Courses/scratch.png";

import ViewDetailedCurrForm from "./ViewDetailedCurrForm";

const courses = [
  {
    name: "",
    detail: "Math",
    img: math,
    fileLink: "/Courses",
  },
  {
    name: "",
    detail: "Python",
    img: python,
    fileLink: "/Courses",
    // fileLink: "https://pythoncurriculum.code-library.net/",
  },
  {
    name: "",
    detail: "Web Development",
    img: web,
    fileLink: "/Courses",
    // fileLink: "https://drive.google.com/file/d/1JUAdylFRpuSyfOzlXYNToumeEdP-FYrs/view?usp=sharing",
  },
  {
    name: "",
    detail: "Scratch",
    img: scratch ,
    fileLink: "/Courses",
    // fileLink: "https://drive.google.com/file/d/1JQblPVA71zWzFqA1ydh7ddM_fyrnoWJM/view?usp=sharing",
  },
];

const fadeUpAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CourseMenu() {
  const [detailedTopic, setDetailedTopic] = useState(null);

  const handleKnowMore = (course) => {
    setDetailedTopic({
      title: course.detail,
      grade: "",            
      pdfLink: course.fileLink,
    });
  };

  return (
    <section className="py-12 px-4 md:px-10 bg-[#E6E6FA]">
      <h2 className="text-3xl font-bold text-[#301934] mb-10 text-center">
        Discover Our Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-[#D8BFD8] rounded-lg shadow-md text-center w-72 sm:w-80 hover:shadow-lg transition-all duration-300"
            variants={fadeUpAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src={course.img}
              alt={course.detail}
              className="rounded-md w-full h-44 object-cover"
              width={300}
              height={200}
            />

            <div className="mt-4">
              <a
                href={course.fileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-purple-700 text-purple-700 mb-2 px-4 py-2 rounded-md text-sm font-semibold hover:bg-purple-100 transition"
              >
                Know More
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/Courses">
          <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-md font-semibold hover:bg-purple-100 transition">
            More Courses
          </button>
        </Link>
      </div>

      {/* Pop-up Form */}
      {/* {detailedTopic && (
        <ViewDetailedCurrForm
          topic={detailedTopic}
          onClose={() => setDetailedTopic(null)}
        />
      )} */}
    </section>
  );
}

// const CourseMenu = () => {
//   return (
//     <section className="py-12 px-4 md:px-10 bg-[#E6E6FA] text-center">
//       {/* <span className="text-green-500 text-lg font-semibold block mb-2">Offerings</span> */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-10">Discover Our Courses</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
//         {courses.map((course, index) => (
//           <motion.div
//             key={index}
//             className="bg-[#D8BFD8] rounded-lg shadow-md text-center w-72 sm:w-80  hover:shadow-lg transition-all duration-300"
//             variants={fadeUpAnimation}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <Image
//               src={course.img}
//               alt={course.name}
//               className="rounded-md w-full h-44 object-cover"
//               width={300}
//               height={200}
//             />

//             <div className="mt-4">
//               {/* <h3 className="text-md font-semibold text-gray-800 mb-4">{course.detail}</h3> */}

//               <Link
//                 target="_blank"
//                 className="inline-block border border-purple-700 text-purple-700 mb-2 px-4 py-2 rounded-md text-sm font-semibold hover:bg-purple-100 transition"
//               >
//                 Know More
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <div className="mt-10">
//         <Link href="/Courses">
//           <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-md font-semibold hover:bg-purple-100 transition">
//             More Courses
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default CourseMenu;
