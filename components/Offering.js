// "use client"; // Enable Framer Motion in Next.js App Router
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import twoboy from "../public/Image/two-students.jpg"
import basicmath from "../public/Courses/basicmath.jpg"
import basicmath2 from "../public/Courses/basicmath2.jpg"
import science from "../public/Courses/science.jpg"
import history from "../public/Courses/history.jpg"

const courses = [
  {
    name: "GRADE - 1",
    detail: "Basic literacy, numeracy",
    img: basicmath,
    fileLink: "https://drive.google.com/file/d/1AmnliWJZYACIuVim_sVcrgU_agGfFKIM/view?usp=sharing",
  },
  {
    name: "GRADE - 2",
    detail: "Reading, simple math",
    img: basicmath2,
    fileLink: "https://drive.google.com/file/d/1z6hJ5lJaBjoBrCvyNm4-puuqI8I9JAOq/view?usp=sharing",
  },
  {
    name: "GRADE - 3",
    detail: "Science introduction, expanded reading",
    img: science,
    fileLink: "https://drive.google.com/file/d/1mfW-0FsE-RPQsYnfQm1p7LJC9mJrRxGt/view?usp=sharing",
  },
  {
    name: "GRADE - 4",
    detail: "Multiplication, grammar basics",
    img:  history,
    fileLink: "https://drive.google.com/file/d/1au_euVqoPyltcqmOdPW_kic85NbC6yDW/view?usp=sharing",
  },
];

const fadeUpAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CourseMenu = () => {
  return (
    <section className="menu section container mx-auto px-6 py-6 text-center">
      <span className="text-green-500 text-lg font-semibold">Offerings</span>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Check Out Courses</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          // In the grid layout section, update the motion.div className:
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-green-500"
            variants={fadeUpAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Course Image */}
            <Link href={course.fileLink} target="_blank">
              <Image src={course.img} alt={course.name} width={250} height={250} className="rounded-lg" />
            </Link>

            {/* Course Details */}
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{course.name}</h3>
            <p className="text-gray-600 text-sm">{course.detail}</p>

            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-4">
              <Link href={course.fileLink} target="_blank" className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition">
                <i className="bx bx-file-blank"></i> View
              </Link>
              {/* <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-400 transition">
                <i className="bx bx-cart-alt"></i> Add
              </button> */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* More Button */}
      <div className="mt-8">
        <Link href="/Courses">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
            More Courses
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CourseMenu;
