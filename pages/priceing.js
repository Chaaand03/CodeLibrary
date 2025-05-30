import Head from "next/head";
import { useState } from "react";
import TandC from "../components/TandC";
import Register from "../components/Register";

const pricingData = {
  maths: [
    {
      now: "$15/session",
      regular: "$20/session",
      discount: "28% Discount",
      duration: "12",
      sessions: "96",
    },
    {
      now: "$13/session",
      regular: "$20/session",
      discount: "36% Discount",
      duration: "18",
      sessions: "144",
    },
  ],
  coding: [
    {
      now: "$17.5/session",
      regular: "$25/session",
      discount: "30% Discount",
      duration: "12",
      sessions: "96",
    },
    {
      now: "$15/session",
      regular: "$25/session",
      discount: "40% Discount",
      duration: "18",
      sessions: "144",
    },
  ],
  exam: [
    {
      now: "$20/session",
      regular: "$25/session",
      discount: "33% Discount",
      design: "Designed based on Students",
      duration: "24",
      sessions: "36",
      sessionstwo: "48",
    },
    {
      now: "$17/session",
      regular: "$25/session",
      discount: "32% Discount",
      duration: "10",
      sessions: "80",
    },
  ],
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("coding");
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Head>
        <title>Choose Your Learning Path | Flexible Plans - Code.LIBRARY</title>
        <meta
          name="description"
          content="Flexible learning plans for Maths, Coding, and Comp Exam. Choose from affordable pricing options with up to 40% discount."
        />
        <meta
          name="keywords"
          content="pricing, plans, math tutoring, coding courses, exam prep, online learning, Code.LIBRARY"
        />
        <meta name="author" content="Code.LIBRARY" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Choose Your Learning Path | Flexible Plans" />
        <meta property="og:description" content="Flexible learning plans for Maths, Coding, and Comp Exam with up to 40% discount." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="py-20 bg-[#EDE9FE] px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Choose Your Learning Path</h2>
          <p className="mt-2 text-gray-600">
            Unlock your coding potential with our flexible plans designed for every stage of your journey
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {["maths", "coding", "exam"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium border ${
                activeTab === tab
                  ? "bg-purple-700 text-white"
                  : "bg-white text-gray-700 border-gray-300"
              } transition`}
            >
              {tab === "maths" ? "MATHS" : tab === "coding" ? "CODING" : "COMP EXAM"}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        {activeTab === "exam" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[0, 1].map((index) => {
              const plan = pricingData.exam[0]; // We use same layout for both columns
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
                >
                  <div className="flex justify-between text-sm font-bold text-gray-700 mb-2">
                    <p>
                      Comp Exam Prep
                      <br />
                      <span className="text-xs font-semibold text-purple-700">
                        (Only for USD & CAD)
                      </span>
                    </p>
                    <div className="text-right">
                      <span className="text-xs text-gray-700">
                        {index === 0 ? "USD" : "CAD"} ▼
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-baseline mb-1">
                    <p className="text-xl font-bold text-purple-800">
                      Now
                      <br />
                      {index === 0 ? "20 USD/session" : "28 CAD/session"}
                    </p>
                    <p className="text-sm text-gray-500 text-right">
                      Regular
                      <br />
                      <span className="line-through">
                        {index === 0 ? "30 USD/session" : "40 CAD/session"}
                      </span>
                    </p>
                  </div>

                  <ul className="mt-4 mb-4 space-y-1 text-sm text-gray-700">
                    <li className="text-green-700">✓ {plan.discount}</li>
                    <li className="text-green-700">✓ {plan.design}</li>
                  </ul>

                  <div>
                    <h4 className="text-md font-bold text-[#301934] mb-2">Flexible Options:</h4>
                    <div className="space-y-3 text-[#301934] font-bold text-4xl">
                      {[24, 36, 48].map((sessions, i) => (
                        <p key={i}>
                          {sessions}
                          <span className="text-sm text-gray-500 font-normal pl-2">sessions</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setShowRegister(true)}
                    className="mt-6 w-full border border-purple-700 text-purple-700 py-2 rounded-lg font-medium hover:bg-purple-100 transition"
                  >
                    Buy Now
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {pricingData[activeTab].map((plan, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
              >
                <div className="flex justify-between text-lg font-bold text-gray-600 mb-1">
                  <span>Now</span>
                  <span>USD</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <p className="text-xl font-bold text-purple-800">{plan.now}</p>
                  <p className="text-sm line-through text-gray-500">{plan.regular}</p>
                </div>

                <p className="mt-3 text-sm text-green-600 font-semibold">✓ {plan.discount}</p>

                <div className="mt-4">
                  <h2 className="font-bold text-[#301934]">Total Duration:</h2>
                  <p className="text-4xl font-bold text-[#301934] leading-tight">
                    {plan.duration}{" "}
                    <span className="text-sm text-gray-500 -mt-1">months</span>
                  </p>
                </div>

                <div className="mt-2">
                  <p className="text-4xl font-bold text-[#301934] leading-tight">
                    {plan.sessions}
                    <span className="text-sm pl-2 text-gray-500 -mt-1">sessions</span>
                  </p>
                </div>

                <button
                  onClick={() => setShowRegister(true)}
                  className="mt-6 w-full border border-purple-700 text-purple-700 py-2 rounded-lg font-medium hover:bg-purple-100 transition"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Terms & Conditions */}
        <TandC />
      </section>

      {/* Register Modal */}
      <Register isOpen={showRegister} onClose={() => setShowRegister(false)} />
    </>
  );
};

export default Pricing;
