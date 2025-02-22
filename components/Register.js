import { useState } from "react";
import { useRouter } from "next/router"; // Import Next.js router

const Register = ({ isOpen, onClose }) => {
  const router = useRouter(); // Initialize router

  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phoneNumber: "",
    studentName: "",
    interestedCourse: "",
    studentGrade: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xkndpvak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setFormData({
          parentName: "",
          email: "",
          phoneNumber: "",
          studentName: "",
          interestedCourse: "",
          studentGrade: "",
        });

        // Redirect to Thank You page after 2 seconds
        setTimeout(() => {
          router.push("/thank-you"); 
        }, 2000);
      } else {
        throw new Error("Failed to submit the form.");
      }
    } catch (error) {
      setMessage("Error submitting the form. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200]">
      <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl hover:text-green-500">
          ×
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-gray-700">Parent Name:</label>
            <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required className="w-full text-black p-2 border rounded focus:border-green-500 focus:outline-none" />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full text-black p-2 border rounded focus:border-green-500 focus:outline-none" />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Phone Number:</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full text-black p-2 border rounded focus:border-green-500 focus:outline-none" />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Student Name:</label>
            <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required className="w-full text-black p-2 border rounded focus:border-green-500 focus:outline-none" />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Interested Course:</label>
            <select name="interestedCourse" value={formData.interestedCourse} onChange={handleChange} required className="w-full text-black p-2 border rounded focus:border-green-500 focus:outline-none">
              <option value="">Select a course</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Python">Python</option>
              <option value="Web Development">Web Development</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Student Grade:</label>
            <select name="studentGrade" value={formData.studentGrade} onChange={handleChange} required className="w-full text-black p-2 border rounded focus:border-green-500 focus:outline-none">
              <option value="">Select a grade</option>
              <option value="Kinder Garden">Kinder Garden</option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
              ))}
            </select>
          </div>

          {message && <p className="text-red-500">{message}</p>}

          <div className="flex justify-between">
           
            <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition duration-300">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
