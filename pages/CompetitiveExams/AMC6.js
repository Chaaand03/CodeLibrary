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
              <h2 className="text-2xl font-bold text-gray-900">AMC6 Exam</h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="space-y-6">
                {/* First Section */}
                <div className="group">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2 group-hover:text-blue-700 transition-colors duration-200">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Looking to build strong math skills early?
                  </h3>
                  <p className="text-base font-medium text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-200">
                 Our AMC 6 course introduces young learners to competitive mathematics with engaging lessons, age-appropriate challenges, and personalized support. Designed for students in grades 4 and 5, this course helps spark a love for problem-solving while laying a solid foundation for higher-level competitions.
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
                    What Is the AMC6?
                  </h3>
                  <p className="text-base font-medium text-gray-700 leading-relaxed pl-4 border-l-2 border-indigo-200">
                    AMC 6 is a beginner-level math competition for students in grades 4 and 5. It introduces young learners to math beyond the classroom through fun and challenging problems designed to promote creative thinking.

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
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">AMC6 Syllabus Breakdown-</h3>
          <p className="text-gray-700 text-sm font-semibold mb-4">
           Our curriculum is designed to thoroughly cover every concept included in the SAT syllabus. Key subject areas include:
          </p>
          {/* </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#EFE3EF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-purple-900 text-lg mb-3">Number Sense & Operations
</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Master addition, subtraction, multiplication, and division techniques</li>
                <li>Understand factors, multiples, and basic divisibility rules</li>
                <li>Work confidently with fractions, decimals, and place value</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#EFE3EF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-purple-900 text-lg mb-3">Patterns, Algebra & Logical 
Thinking
</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Identify and extend number patterns and sequences</li>
                <li>Translate word problems into basic algebraic expressions</li>
                <li>Strengthen logical reasoning through puzzles and challenges</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-[#EFE3EF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-purple-900 text-lg mb-3">Geometry & Measurement</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Explore properties of shapes, lines, and angles</li>
                <li>Calculate perimeter, area, and basic volume</li>
                <li>Measure length, time, and weight using standard units</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-[#EFE3EF] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <h4 className="font-semibold text-purple-900 text-lg mb-3">Data Handling & Problem Solving</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Interpret bar graphs, line plots, and tables</li>
                <li>Practice multi-step word problems with real-world context</li>
                <li>Learn simple probability and data-based reasoning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Last Part  */}
      <section className="px-4 py-2 md:py-2 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">WHY CHOOSE OUR AMC 6?

            </h3>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
            We make math exciting and accessible for young learners through interactive teaching, real-world examples, and regular practice. Our goal is to develop curiosity and confidence in kids while nurturing logical reasoning and analytical thinking.

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