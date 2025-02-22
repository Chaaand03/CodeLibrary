import Image from 'next/image';
import imagb from "../public/Courses/imgb.png";
import imgc from "../public/Courses/imgc.png";
import imgd from "../public/Courses/imgd.png";
import tutora from "../public/Courses/tutora.png"
import tutorb from "../public/Courses/tutorb.png"


const tutors = [
  {
    name: "Theresa Webb",
    role: "Application Support Analyst Lead",
    description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: tutora,
  },
  {
    name: "Courtney Henry",
    role: "Director, Undergraduate Analytics and Planning",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    image: imgc,
  },
  {
    name: "Albert Flores",
    role: "Career Educator",
    description: "Former PM for Linear, Lambda School, and On Deck.",
    image: imgd,
  },
  {
    name: "Marvin McKinney",
    role: "Co-op & Internships Program & Operations Manager",
    description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    image: tutorb,
  },
];

export default function Tutors() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-green-600 text-sm font-semibold uppercase">Tutors</h2>
      <h3 className="text-3xl font-bold text-gray-800 mt-2">Meet the Heroes</h3>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        On Weekend UX, instructors from all over the world instruct millions of students.
        We offer the knowledge and abilities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto">
        {tutors.map((tutor, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
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
