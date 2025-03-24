import Image from 'next/image';
import imagb from "../public/Courses/imgb.png";
import imgc from "../public/Courses/Rishanth.png";
import imgd from "../public/Courses/Rishanthb.jpg";
import tutora from "../public/Courses/Abbiramy.jpg"
import tutorb from "../public/Courses/tutorb.png"


const tutors = [
  {
    name: "Abbiramy",
    role: "Math expert",
    description: "The stars in the sky, the sand on the beach are both chaos. But if you see patterns through the chaos, you're a mathematician.",
    image: tutora,
  },
  {
    name: "Rishanth",
    role: "Python and Web development expert",
    description: "whatever you do make sure no one does it better than you around you",
    image: imgc,
  },
  {
    name: "Rakshitha",
    role: "Math and Scratch expert",
    description: "Learn with curiosity, teach with passion.",
    image: imgd,
  },
 
];

export default function Tutors() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-green-600 text-sm font-semibold uppercase">Tutors</h2>
      <h3 className="text-3xl font-bold text-gray-800 mt-2">Meet the Heroes</h3>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
        {tutors.map((tutor, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md text-center ">
            <Image src={tutor.image} alt={tutor.name} width={200} height={100} className="rounded-full mx-auto" />
            <h4 className="text-black text-lg font-semibold mt-4">{tutor.name}</h4>
            <p className="text-green-600 text-sm">{tutor.role}</p>
            <p className="text-gray-600 mt-2 text-sm">{tutor.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
