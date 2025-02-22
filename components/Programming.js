import Image from "next/image";
import Link from "next/link";

const Courses = () => {
  const courses = [
    {
      name: "Python",
      image: "/assets/img/python_logo.png",
      fileLink: "https://drive.google.com/file/d/1yrK6HPIxwbwzfP-pIe2Iyy5iWGFiys89/view?usp=sharing",
      price: "$250",
    },
    {
      name: "Web Development",
      image: "/assets/img/web_logo.png",
      fileLink: "https://drive.google.com/file/d/1DpkC3mgLdyTp-qPf2KQ86-cuaB0Xugrb/view?usp=sharing",
      price: "$250",
    },
  ];

  return (
    <section className="mt-20 mb-20 px-6 lg:px-16 xl:px-32">
      <div className="text-center">
        <span className="text-lg font-medium text-green-600 uppercase tracking-wider">
          Courses We Offer
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Programming Courses
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200"
          >
            <Link href={course.fileLink} target="_blank">
              <Image
                src={course.image}
                alt={course.name}
                width={180}
                height={180}
                className="mx-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{course.name}</h3>
            <p className="text-gray-600 text-lg font-medium mt-1">{course.price}</p>

            <div className="flex justify-center gap-4 mt-4">
              <Link
                href={course.fileLink}
                target="_blank"
                className="bg-green-500 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-green-600 transition"
                aria-label={`Download ${course.name} file`}
              >
                📄 File
              </Link>
              {/* <button
                className="bg-blue-500 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-blue-600 transition"
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
