import Image from "next/image";
import arjunImg from "../public/Courses/Arjun.png";
import sindhuImg from "../public/Courses/Sindhu.png";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Arjun",
    role: "",
    feedback:
      "“I love how fun the coding classes are! I’ve made my own game and can’t wait to create more!”",
    image: arjunImg,
  },
  {
    name: "Sindhu",
    role: "(Parent)",
    feedback:
      "“The improvement in my child’s problem-solving skills has been remarkable. The teachers are fantastic!”",
    image: sindhuImg,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12">
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-6"
            >
              <div className="flex items-center mb-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">
                    {t.name}{" "}
                    <span className="text-sm text-gray-500">{t.role}</span>
                  </p>
                  <div className="flex text-yellow-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{t.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
