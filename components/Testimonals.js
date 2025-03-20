"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Devansh",
    parentsname: "Scindia",
    grade: "Grade 3",
    session: "Matheamatics classes",
    country: "Germany",
    state: "Berlin",
    feedback:
      "We are very pleased with the online math classes! The instructors ensure that the lessons align with the German curriculum by incorporating the worksheets we provided, making the learning process seamless for my son. Highly recommended!",
    image: "/Courses/Devansh.jpg",
  },
  {
    name: "Reyansh",
    parentsname: "Venkat",
    grade: "Grade 1",
    session: "Mathematics  and Scratch classes",
    country: "USA",
    state: "Florida",
    feedback:
      "The exceptional expertise of Chandan Sir at the CodeLibrary have truly ignited my son's passion for mathematics and greatly enhanced his skills.",
    image: "/Courses/Reyansh.jpg",
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <div className="bg-blue-200 py-16 flex justify-center">
      <div className="max-w-4xl w-full px-6 relative">
        <h2 className="text-center text-4xl font-extrabold mb-10 text-gray-900">
          What Our Students Say
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg grid grid-cols-[auto,1fr] gap-4 sm:gap-8 items-center text-center sm:text-left">
                {/* Left Side: Image, Name, Parent Name */}
                <div className="flex flex-col items-center sm:items-start">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={150}
                    height={130}
                    className="rounded-t-full mb-4"
                  />
                  <h3 className="font-extrabold text-xl text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-700 text-lg font-bold">
                    Parent's Name : {testimonial.parentsname}
                  </p>
                  <p className="text-gray-700 text-lg font-bold">
                     {testimonial.country}, {testimonial.state}
                  </p>
                </div>

                {/* Right Side: Session, Grade, Feedback */}
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-lg text-gray-900">
                     {testimonial.session}
                  </p>
                  <p className="font-bold text-lg text-gray-900">
                     {testimonial.grade}
                  </p>
                  <p className="text-gray-800 text-base mt-2">
                    {testimonial.feedback}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-teal-700 transition duration-300"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
