import Head from 'next/head';
import { useState } from 'react';
import Menu from "../components/Menu"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const lessons = [
        { image: '/lesson1.jpg', title: 'AWS Certified Solutions Architect', instructor: 'Lina', progress: 'Lesson 5 of 7' },
        { image: '/lesson2.jpg', title: 'AWS Certified Solutions Architect', instructor: 'Lina', progress: 'Lesson 5 of 7' },
        { image: '/lesson3.jpg', title: 'AWS Certified Solutions Architect', instructor: 'Lina', progress: 'Lesson 5 of 7' },
        { image: '/lesson3.jpg', title: 'AWS Certified Solutions Architect', instructor: 'Lina', progress: 'Lesson 5 of 7' },
        { image: '/lesson3.jpg', title: 'AWS Certified Solutions Architect', instructor: 'Lina', progress: 'Lesson 5 of 7' },
        { image: '/lesson3.jpg', title: 'AWS Certified Solutions Architect', instructor: 'Lina', progress: 'Lesson 5 of 7' },
        { image: '/lesson3.jpg', title: 'AWS Certified Solutions Architect', instructor: 'Lina', progress: 'Lesson 5 of 7' },
    ];

    const categories = [
        { icon: '✏️', title: 'Design' },
        { icon: '💻', title: 'Development' },
        { icon: '💻', title: 'Development' },
        { icon: '💼', title: 'Business' },
        { icon: '📢', title: 'Marketing' },
        { icon: '📷', title: 'Photography' },
        { icon: '🎭', title: 'Acting' },
        { icon: '💼', title: 'Business' },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 3 >= lessons.length ? 0 : prevIndex + 3
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 3 < 0 ? Math.max(lessons.length - 3, 0) : prevIndex - 3
        );
    };

    const visibleLessons = lessons.slice(currentIndex, currentIndex + 3);

    return (
        <>
            <Head>
                <title>Online Courses | Learn & Grow</title>
                <meta name="description" content="Discover top online courses in design, development, business, and more. Upgrade your skills and learn from industry experts." />
                <meta name="keywords" content="online courses, e-learning, development, business, design, marketing, photography, AWS certification" />
            </Head>
            <div className="mt-28 bg-[#FFFFF] min-h-screen p-8">
                <h2 className="text-2xl text-[#E0F7FA] font-bold mb-4">Welcome back, ready for your next lesson?</h2>
                <div className="relative">
                    <div className="flex gap-4">
                        {visibleLessons.map((lesson, index) => (
                            <div key={index} className="w-1/3 p-3 bg-[#F5F5F5] shadow-md">
                                <img src={lesson.image} alt={lesson.title} className="w-full h-40 object-cover rounded-lg" />
                                <h3 className="mt-2 text-lg text-black font-semibold">{lesson.title}</h3>
                                <p className="text-sm text-gray-900">{lesson.instructor}</p>
                                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">{lesson.progress}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end mt-4 gap-2">
                        <button onClick={prevSlide} className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
                            <FaArrowLeft />
                        </button>
                        <button onClick={nextSlide} className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <Menu />

                <h2 className="text-2xl font-bold mt-8">Choice favourite course from top category</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                    {categories.map((category, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
                            <div className="text-3xl mb-2">{category.icon}</div>
                            <h3 className="text-lg text-black font-semibold">{category.title}</h3>
                            <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
