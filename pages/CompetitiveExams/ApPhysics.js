// app/competitive-exams/page.jsx
// "use client";
import EnquiryForm from "../../components/EnquiryForm";

const CompetitiveExams = () => {
  return (
    <>
      {/* Header Section with EnquiryForm */}
      <section className="p-5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left Section - 70% */}
          <div className="w-full lg:w-[70%]">
            <div className="bg-[#EDE9FE] px-8 py-4 md:py-8 lg:py-8 rounded-xl mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Competitive Exams
              </h1>
              <p className="text-gray-700 mb-8 text-xl leading-relaxed font-semibold">
                Competitive exams are tests designed to assess candidates for limited positions based on merit. They often require thorough preparation and high performance to succeed.
              </p>
              <span className="inline-block bg-[#D8BFD8] text-[#4B0082] px-4 py-2 text-lg font-bold rounded-full mb-4">
                GRADE - 10+
              </span>
              <h2 className="text-2xl font-bold text-gray-900">AP Physics Exam</h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="space-y-6">
                {/* First Section */}
                <div className="group">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2 group-hover:text-blue-700 transition-colors duration-200">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Curious about how the universe works?
                  </h3>
                  <p className="text-base font-medium text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-200">
                    Our AP Physics course is ideal for students in Grade 10 and above who are ready to explore the core principles that govern motion, energy, forces, electricity, and more. With interactive lessons and real-world problem-solving, we help students build a strong foundation in physics and prepare confidently for the AP exam.
                  </p>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
                </div>

                {/* Second Section */}
                <div className="group">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2 group-hover:text-blue-700 transition-colors duration-200">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    What Is the AP Physics?
                  </h3>
                  <p className="text-base font-medium text-gray-700 leading-relaxed pl-4 border-l-2 border-indigo-200">
                    AP Physics is a college-level course that introduces students to the core laws and concepts of physics. It emphasizes analytical thinking, real-world application, and experimental design—helping students not only prepare for the AP exam but also gain a deeper understanding of the physical world. The course is recognized by top universities and serves as a gateway to STEM success.

                  </p>
                </div>

                {/* Bottom accent */}
                <div className="pt-4 border-t border-blue-100">
                  <div className="flex justify-center">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Section - 30% */}
          <div className="w-full lg:w-[30%]">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* SAT Details Section */}
      <section className="px-4 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* <div className="text-center mb-10"> */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">AP Physics Syllabus Breakdown-</h3>
          <p className="text-gray-700 text-sm font-semibold mb-4">
            Our AP Physics curriculum is structured into four major areas that blend theory, application, and critical thinking.
          </p>
          {/* </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#EFE3EF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-purple-900 text-lg mb-3">Mechanics</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Understand motion, forces, Newton’s laws, and free-body diagrams</li>
                <li>Study energy, work, power, and the principles of conservation</li>
                <li>Explore circular motion, gravitation, and momentum</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#EFE3EF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-purple-900 text-lg mb-3">Electricity & Magnetism</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Learn about electric charge, fields, and potential</li>
                <li>Solve problems involving circuits, resistance, and Ohm’s law</li>
                <li>Explore magnetic fields, forces on charges, and electromagnetic induction</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-[#EFE3EF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-purple-900 text-lg mb-3">Waves & Optics</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Examine wave properties, sound, and the Doppler effect</li>
                <li>Understand reflection, refraction, and interference of light</li>
                <li>Apply principles of lenses and mirrors in real-life contexts</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-[#EFE3EF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-purple-900 text-lg mb-3">Modern Physics & Experimental Skills</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Study atomic models, quantum theory, and nuclear physics</li>
                <li>Interpret data, graphs, and lab results in a physics context</li>
                <li>Build scientific reasoning through hands-on and conceptual practice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Last Part  */}
      <section className="px-4 py-2 md:py-2 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Why Choose Our AP Physics Program?

            </h3>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
             Our program is led by expert instructors who simplify complex concepts and guide students through every topic with clarity and depth. With detailed explanations, practice problems, and lab-based applications, students gain both the knowledge and the confidence to excel in AP Physics and beyond.

            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 bg-[#EDE9FE] p-5 rounded-lg mb-5 border border-gray-300">
            {/* Card 1 */}
            <div className="">
              <h4 className="font-bold text-black text-lg mb-3">Expert Instructors</h4>
              <p className="text-gray-700 text-sm font-semibold">Learn from instructors with years of experience in mathematics competitions and olympiads.</p>
              </div>
            

            {/* Card 2 */}
            <div className="">
              <h4 className="font-bold text-black text-lg mb-3"> 1:1 Interactive Sessions</h4>
              <p className="text-gray-700 text-sm font-semibold">One-on-one sessions ensure focused attention, immediate feedback, and a customized learning experience tailored to each student’s needs.</p>
            </div>

            {/* Card 3 */}
              <div className="">
              <h4 className="font-bold text-black text-lg mb-3">Comprehensive Curriculum</h4>
              <p className="text-gray-700 text-sm font-semibold">Our curriculum covers all topics in the AMC 8 syllabus with special focus on problem-solving techniques.</p>
              </div>

            {/* Card 4 */}
              <div className="">
              <h4 className="font-bold text-black text-lg mb-3">Practice Tests</h4>
              <p className="text-gray-700 text-sm font-semibold">Regular practice tests modeled after the actual AMC 8 exam to build confidence and improve performance</p>
              </div>

            {/* Card 5 */}
              <div className="">
              <h4 className="font-bold text-black text-lg mb-3">Detailed Feedback</h4>
              <p className="text-gray-700 text-sm font-semibold">Regular progress reports and personalized feedback to help students improve continuously.</p>
              </div>

            {/* Card 6 */}
              <div className="">
              <h4 className="font-bold text-black text-lg mb-3">Flexible Schedule</h4>
              <p className="text-gray-700 text-sm font-semibold">Multiple batch options to accommodate different time zones and student schedules.</p>
              </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default CompetitiveExams;