import Head from "next/head";
import { useState } from "react";
import TandC from "../components/TandC";
import Register from "../components/Register";

const pricingData = {
  maths: {
    USD: [
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
    CAD: [
      {
        now: "C$20/session",
        regular: "C$27/session",
        discount: "28% Discount",
        duration: "12",
        sessions: "96",
      },
      {
        now: "C$18/session",
        regular: "C$27/session",
        discount: "36% Discount",
        duration: "18",
        sessions: "144",
      },
    ],
    GBP: [
      {
        now: "£12/session",
        regular: "£16/session",
        discount: "28% Discount",
        duration: "12",
        sessions: "96",
      },
      {
        now: "£10/session",
        regular: "£16/session",
        discount: "36% Discount",
        duration: "18",
        sessions: "144",
      },
    ],
    EURO: [
      {
        now: "€14/session",
        regular: "€19/session",
        discount: "28% Discount",
        duration: "12",
        sessions: "96",
      },
      {
        now: "€12/session",
        regular: "€19/session",
        discount: "36% Discount",
        duration: "18",
        sessions: "144",
      },
    ],
  },
  coding: {
    USD: [
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
    CAD: [
      {
        now: "C$24/session",
        regular: "C$34/session",
        discount: "30% Discount",
        duration: "12",
        sessions: "96",
      },
      {
        now: "C$20/session",
        regular: "C$34/session",
        discount: "40% Discount",
        duration: "18",
        sessions: "144",
      },
    ],
    GBP: [
      {
        now: "£14/session",
        regular: "£20/session",
        discount: "30% Discount",
        duration: "12",
        sessions: "96",
      },
      {
        now: "£12/session",
        regular: "£20/session",
        discount: "40% Discount",
        duration: "18",
        sessions: "144",
      },
    ],
    EURO: [
      {
        now: "€16/session",
        regular: "€23/session",
        discount: "30% Discount",
        duration: "12",
        sessions: "96",
      },
      {
        now: "€14/session",
        regular: "€23/session",
        discount: "40% Discount",
        duration: "18",
        sessions: "144",
      },
    ],
  },
  exam: {
    USD: [
      {
        now: "$20/session",
        regular: "$30/session",
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
    CAD: [
      {
        now: "C$28/session",
        regular: "C$40/session",
        discount: "33% Discount",
        design: "Designed based on Students",
        duration: "24",
        sessions: "36",
        sessionstwo: "48",
      },
      {
        now: "C$23/session",
        regular: "C$34/session",
        discount: "32% Discount",
        duration: "10",
        sessions: "80",
      },
    ],
  },
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("coding");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [examCardCurrencies, setExamCardCurrencies] = useState(["USD", "CAD"]);
  const [showRegister, setShowRegister] = useState(false);

  // Get available currencies for the current tab
  const getAvailableCurrencies = () => {
    if (activeTab === "exam") {
      return ["USD", "CAD"];
    }
    return ["USD", "CAD", "GBP", "EURO"];
  };

  // Handle currency change for individual exam cards
  const handleExamCardCurrencyChange = (cardIndex, newCurrency) => {
    const newCurrencies = [...examCardCurrencies];
    newCurrencies[cardIndex] = newCurrency;
    setExamCardCurrencies(newCurrencies);
  };

  // Reset currency if not available for the selected tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const availableCurrencies = tab === "exam" ? ["USD", "CAD"] : ["USD", "CAD", "GBP", "EURO"];
    if (!availableCurrencies.includes(selectedCurrency)) {
      setSelectedCurrency("USD");
    }
  };

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

      <section className="py-10 bg-[#EDE9FE] px-2">
        <div className="text-center bg-[#EDE9FE]">
          <h2 className="text-4xl font-bold text-gray-900">Choose Your Learning Path</h2>
          <p className="mt-2 text-gray-600 py-5">
            Unlock your coding potential with our flexible plans designed for every stage of your journey
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-[#F0F4F8] p-8">
          <div className="mb-5 flex justify-center border border-gray-300 rounded overflow-hidden max-w-fit mx-auto bg-[#FDECEE]">
            {["maths", "coding", "exam"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-5 py-3 font-semibold text-sm tracking-wide transition duration-300
                  ${activeTab === tab
                    ? "bg-purple-800 text-white"
                    : "bg-transparent text-[#2D1B38] hover:bg-purple-100"
                  }`}
              >
                {tab === "maths" ? "MATHS" : tab === "coding" ? "CODING" : "COMP EXAM"}
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          {activeTab === "exam" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[0, 1].map((cardIndex) => {
                const cardCurrency = examCardCurrencies[cardIndex];
                const plan = pricingData.exam[cardCurrency][0];
                return (
                  <div
                    key={cardIndex}
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
                      <div className="text-right relative">
                        <select
                          value={cardCurrency}
                          onChange={(e) => handleExamCardCurrencyChange(cardIndex, e.target.value)}
                          className="appearance-none bg-transparent border-none text-xs text-gray-700 pr-4 focus:outline-none cursor-pointer"
                        >
                          {["USD", "CAD"].map((currency) => (
                            <option key={currency} value={currency}>
                              {currency}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                          <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-baseline mb-1">
                      <p className="text-xl font-bold text-purple-800">
                        Now
                        <br />
                        {plan.now}
                      </p>
                      <p className="text-sm text-gray-500 text-right">
                        Regular
                        <br />
                        <span className="line-through">
                          {plan.regular}
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
              {pricingData[activeTab][selectedCurrency].map((plan, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
                >
                  <div className="flex justify-between text-lg font-bold text-gray-600 mb-1">
                    <span>Now</span>
                    <div className="relative">
                      <select
                        value={selectedCurrency}
                        onChange={(e) => setSelectedCurrency(e.target.value)}
                        className="appearance-none bg-transparent border-none text-lg font-bold text-gray-600 pr-4 focus:outline-none cursor-pointer"
                      >
                        {getAvailableCurrencies().map((currency) => (
                          <option key={currency} value={currency}>
                            {currency}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
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
        </div>

        {/* Terms & Conditions */}
        <TandC />
      </section>

      {/* Register Modal */}
      <Register isOpen={showRegister} onClose={() => setShowRegister(false)} />
    </>
  );
};

export default Pricing;

