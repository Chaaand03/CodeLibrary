import Image from "next/image";
import rocket from "../public/Image/Rocket.png"; // Replace with your actual rocket image

const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025];

const MilestoneJourney = () => {
  return (
    <section className="relative w-full bg-[#f3f6fb] py-20 overflow-x-hidden">
      <h2 className="text-center text-lg md:text-xl font-semibold text-black mb-12">
        Milestone Journey
      </h2>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Dashed curve (simulated via svg path) */}
        <svg
          viewBox="0 0 800 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[200px] md:h-[300px]"
        >
          <path
            d="M0 200 C200 100, 400 100, 800 0"
            stroke="#9b5de5"
            strokeWidth="2"
            strokeDasharray="6 8"
            fill="transparent"
          />
        </svg>

        {/* Milestone Dots & Years */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative w-full h-full">
            {years.map((year, idx) => {
              const leftOffset = `${(idx / (years.length - 1)) * 100}%`;
              const topOffset = `${100 - Math.pow(idx / (years.length - 1), 2) * 100}%`;

              return (
                <div
                  key={year}
                  className="absolute transform -translate-x-1/2"
                  style={{ left: leftOffset, top: topOffset }}
                >
                  <div className="w-3 h-3 bg-purple-700 rounded-full mb-1 mx-auto"></div>
                  <p className="text-xs text-purple-700 font-medium text-center">{year}</p>
                </div>
              );
            })}

            {/* Tooltip Box for 2025 */}
            <div
              className="absolute text-white text-xs bg-purple-800 px-4 py-2 rounded-lg w-56 text-center shadow-md hidden sm:block"
              style={{ right: "0%", top: "15%" }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </div>

            {/* Rocket Image */}
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ right: "1%", top: "33%" }}
            >
              <Image
                src={rocket}
                alt="Rocket"
                width={60}
                height={60}
                className="animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestoneJourney;
