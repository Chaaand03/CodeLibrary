import Image from "next/image";
import Link from "next/link";

const Courses = () => {
  const courses = [
    {
      name: "Python",
      image: "/Image/python.jpg",
      fileLink: "https://drive.google.com/file/d/1yrK6HPIxwbwzfP-pIe2Iyy5iWGFiys89/view?usp=sharing",
      price: "$250",
    },
    {
      name: "Web Development",
      image: "/Image/WebImage.png",
      fileLink: "https://drive.google.com/file/d/1DpkC3mgLdyTp-qPf2KQ86-cuaB0Xugrb/view?usp=sharing",
      price: "$250",
    },
  ];

  return (
    <section className="mt-[100px] bg-slate-600 px-4 sm:px-8 lg:px-16 xl:px-32 py-10 ">
      {/* Heading */}
      <div className="text-center">
        <span className="text-lg font-bold text-green-600 uppercase tracking-wider">
          Courses We Offer
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
          Programming Courses
        </h2>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 justify-center items-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 rounded-md shadow-md hover:shadow-lg text-center border border-gray-200 bg-white w-full md:w-[400px] lg:w-[450px] mx-auto transition-transform duration-300 hover:scale-105"
          >
            <Link href={course.fileLink} target="_blank">
              <Image
                src={course.image}
                alt={course.name}
                width={200}
                height={200}
                className="mx-auto rounded-lg transition-transform duration-300 hover:scale-110"
              />
            </Link>
            <h3 className="text-xl font-bold text-gray-800 mt-4">{course.name}</h3>
            <p className="text-gray-600 text-lg font-medium mt-2">{course.price}</p>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <Link
                href={course.fileLink}
                target="_blank"
                className="bg-green-500 text-white px-4 py-2 rounded-lg text-lg font-medium hover:bg-green-600 transition"
                aria-label={`Download ${course.name} file`}
              >
                📄 File
              </Link>
              {/* Uncomment if you want an "Add to Cart" button */}
              {/* <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-medium hover:bg-blue-600 transition"
                aria-label={`Add ${course.name} to cart`}
              >
                🛒 Add to Cart
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
