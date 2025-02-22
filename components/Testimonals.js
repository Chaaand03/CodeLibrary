"use client";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import imaga from "../public/Courses/imga.png";

import imge from "../public/Courses/imge.png";
import imgf from "../public/Courses/imgf.png";
import imgg from "../public/Courses/imgg.png";
import igmh from "../public/Courses/igmh.png";
import imgi from "../public/Courses/imgi.png";

const testimonials = [
    {
        name: "Bulkin Simons",
        feedback: "This is the best platform for learning online!",
        image: imaga,
    },
    {
        name: "Emma Watson",
        feedback: "The lessons are very detailed and easy to understand.",
        image: imgg,
    },
    {
        name: "David Miller",
        feedback: "Great support from the instructors and mentors!",
        image: imgi,
    },
    {
        name: "Sophia Brown",
        feedback: "I improved my skills quickly thanks to these lessons.",
        image: igmh,
    },
    {
        name: "Sophia Brown",
        feedback: "I improved my skills quickly thanks to these lessons.",
        image: imge,
    },
    {
        name: "Sophia Brown",
        feedback: "I improved my skills quickly thanks to these lessons.",
        image: imgf,
    },
];

const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper && prevRef.current && nextRef.current) {
            swiper.navigation.update();
        }
    }, [swiper]);

    return (
        <div className="bg-blue-200 py-16  relative">
            <h2 className="text-center text-3xl font-bold mb-12 text-gray-900">
                What our students have to say
            </h2>

            <div className="relative max-w-6xl mx-auto px-4">
                {/* Custom Navigation Buttons */}
                <button
                    ref={prevRef}
                    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-teal-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-teal-700 z-20"
                >
                    ⬅
                </button>
                <button
                    ref={nextRef}
                    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-teal-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-teal-700 z-20"
                >
                    ➡
                </button>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Navigation]}
                    onSwiper={setSwiper}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="relative"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={180}
                                    height={180}
                                    className="mx-auto mb-4 rounded-full"
                                />
                                <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                                <p className="text-gray-600 mt-2 text-sm">{testimonial.feedback}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
