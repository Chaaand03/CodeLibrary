import { useEffect } from "react";
import { useRouter } from "next/router";

const ThankYou = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-600">Thank You!</h1>
        <p className="mt-4">Your form has been submitted successfully.</p>
        <p className="mt-2 text-gray-500">Redirecting to home page in 5 seconds...</p>
        <button 
          onClick={() => router.push("/")} 
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
