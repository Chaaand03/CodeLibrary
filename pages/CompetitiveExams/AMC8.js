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
                GRADE - 4,5
              </span>
              <h2 className="text-2xl font-bold text-gray-900">AMC 8 Syllabus & Course – Master Math Olympiad Preparation with Expert AMC Coaching</h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="space-y-6">
                {/* First Section */}
                <div className="group">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2 group-hover:text-blue-700 transition-colors duration-200">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {/* Planning for college success? */}
                  </h3>
                  <p className="text-base font-medium text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-200">
                   Looking to give your child a head start in competitive math? Our expert-led AMC 8 program builds strong foundations, sharpens problem-solving skills, and prepares them for success in math olympiads—with structured lessons and dedicated support every step of the way.
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
                    What Is the AMC 8?
                  </h3>
                  <p className="text-base font-medium text-gray-700 leading-relaxed pl-4 border-l-2 border-indigo-200">
                  The AMC 8 is a national-level mathematics exam for students in grade 8 and below. It introduces children to problem-solving at an early stage and builds confidence for higher-level contests. Our AMC 8 syllabus-aligned program ensures students gain strong fundamentals in logical reasoning, number theory, geometry, and algebra. With our proven AMC exam course, your child will be ready to compete and succeed.
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
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">AMC8 Syllabus Breakdown-</h3>
          <p className="text-gray-700 text-sm font-semibold mb-4">
            Our curriculum is designed to thoroughly cover every concept included in the AMC 8 syllabus. Key subject areas include:
          </p>
          {/* </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#EFE3EF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-purple-900 text-lg mb-3">Algebra and Arithmetic</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Ratio & Proportion.</li>
                <li>Exponents, Sequences, and Inequalities.</li>
                <li>Polynomials and algebraic manipulations.</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#EFE3EF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-purple-900 text-lg mb-3">Reading</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Properties of triangles, quadrilaterals, and polygons</li>
                <li>Circle theorems and coordinate geometry</li>
                <li>3D figures, curved surfaces, and mensuratio</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-[#EFE3EF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-purple-900 text-lg mb-3">Math – No Calculator</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Basic counting principles</li>
                <li>Permutations and combinations</li>
                <li>Distribution and cyclic arrangements</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-[#EFE3EF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-purple-900 text-lg mb-3">Number Theory</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Divisibility rules</li>
                <li>Congruence and modular arithmetic</li>
                <li>GCD and number-theoretic functions</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-sm font-semibold mt-5">
            Each topic in our AMC exam course is supported with real-world problem sets and explained through our structured teaching methods. Our AMC coaching approach makes even the most challenging topics engaging and easy to understand.
          </p>
        </div>
      </section>
      {/* Last Part  */}
      <section className="px-4 py-2 md:py-2 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Why Choose Us for AMC 8 Coaching?

            </h3>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
             Our specialized program is designed to help students develop the skills and confidence needed to excel in the AMC 8 competition.
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
              <h4 className="font-bold text-black text-lg mb-3">Small Group Sessions</h4>
              <p className="text-gray-700 text-sm font-semibold">Small class sizes ensure personalized attention and active participation from all students.</p>
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