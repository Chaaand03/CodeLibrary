import Image from 'next/image'
import React from 'react'

const testimonials = [
  {
    image: "/Image/Devansh.jpeg",
    parentName: "Scindia",
    studentName: "Devansh",
    grade: "3",
    place: "Germany",
    session: "Math sessions",
    feedback: `“We are very pleased with the online math classes! The instructors ensure that the lessons align with the German curriculum by incorporating the worksheets we provided, making the learning process seamless for my son. The sessions are interactive, well-structured, and tailored to his needs, helping him gain confidence in math. We appreciate the personalized approach and the effort put into making learning enjoyable. Highly recommended!”`
  },
  {
    image: "/Image/Reyansh.jpeg",
    parentName: "Venkat",
    studentName: "Reyansh",
    grade: "1",
    place: "Florida",
    session: "Math sessions",
    feedback: `“The exceptional expertise of Chandan Sir at the CodeLibrary have truly ignited my son's passion for mathematics and greatly enhanced his skills.”`
  }
]

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-[#301934] text-center mb-8">
        What Our Students Say
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative bg-[#f4edfc] rounded-xl shadow-md overflow-hidden p-6 pt-16"
          >
            {/* Mobile avatar */}
            <div className="absolute top-4 left-4 w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 md:hidden">
              <Image
                src={t.image}
                alt={t.studentName}
                fill
                className="object-cover"
              />
            </div>

            {/* Desktop image block */}
            <div className="hidden md:block md:absolute md:top-0 md:left-0 md:w-40 md:h-full">
              <Image
                src={t.image}
                alt={t.studentName}
                fill
                className="object-cover rounded-l-xl"
              />
            </div>

            {/* Content */}
            <div className="pl-20 md:pl-40">
            <p className="font-bold text-gray-900">
                  {t.studentName} (Grade {t.grade}) - <span className='text-purple-800'>{t.session}</span>
                </p>
                <br />
              <p className="text-gray-700 italic mb-4 text-sm">{t.feedback}</p>
              <div className="text-center md:text-left">
                <p className=" text-black mb-1">
                  - {t.parentName} <span className='text-sm text-gray-800'>(parent)</span>
                </p>
                <p className="text-sm text-gray-600 mb-1">{t.place}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
