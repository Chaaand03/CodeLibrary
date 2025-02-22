import Link from "next/link";
import { FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";

const ThankYou = () => {
  const registrationLink = "https://code-library.net/";

  // Function to generate share links dynamically
  const handleShare = (platform) => {
    let shareUrl = "";

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=Register%20Now%20and%20Get%20$50%20Off!%20${registrationLink}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${registrationLink}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${registrationLink}&text=Register%20Now%20and%20Get%20$50%20Off!`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-blue-800">Thanks!</h1>
        <p className="text-gray-600 mt-2">The form was submitted successfully.</p>

        {/* Go Back Link */}
        <Link href="/" className="text-red-500 mt-4 block hover:underline">
          Go back
        </Link>
        {/* New Social Share Button */}
        <div className="mt-4">
          <p className="text-gray-700 font-semibold">Thank you for registering! Share with Friends – Get $50 Off!</p>

          <div className="flex justify-center gap-3 mt-2">
            <button
              onClick={() => handleShare("whatsapp")}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
            >
              <FaWhatsapp />
              Share on WhatsApp
            </button>

            <button
              onClick={() => handleShare("facebook")}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              <FaFacebook />
              Share on Facebook
            </button>

            <button
              onClick={() => handleShare("twitter")}
              className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
            >
              <FaTwitter />
              Share on Twitter
            </button>
          </div>
        </div>
        {/* Info Button */}
        <a
          href="https://wa.me/?text=For%20More%20Info"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 inline-block"
        >
          For More Info
        </a>

        <p className="text-gray-500 mt-4 text-sm">
          You are using <span className="font-bold text-red-500">Formspree</span>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
