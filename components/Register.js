import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const Register = ({ isOpen, onClose }) => {
  const router = useRouter();
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phoneNumber: "",
    studentName: "",
    interestedCourse: "",
    studentGrade: "",
    preferredDate: "",
    timezone: "",
    timeSlot: ""
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
          Accept: "application/json",
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
          preferredDate: "",
          timezone: "",
          timeSlot: ""
        });
        onClose();

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200] p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-xl relative border border-gray-200 shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        {/* Header with Close Button */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 rounded-t-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Enquiry Form</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Please fill in the details below to submit your enquiry
          </p>
        </div>

        {/* Form Content */}
        <div className="px-4 sm:px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Information */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Personal Information</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  name="parentName"
                  placeholder="Parent Name"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full text-black p-3 text-sm border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all duration-200"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full text-black p-3 text-sm border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all duration-200"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full text-black p-3 text-sm border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all duration-200"
                />
                <input
                  type="text"
                  name="studentName"
                  placeholder="Student Name"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  className="w-full text-black p-3 text-sm border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all duration-200"
                />
              </div>
            </div>

            {/* Course Information */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Course Information</h3>
              <div className="space-y-3">
                <select
                  name="interestedCourse"
                  value={formData.interestedCourse}
                  onChange={handleChange}
                  required
                  className="w-full text-black p-3 text-sm border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all duration-200"
                >
                  <option value="">Select Interested Course</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Python">Python</option>
                  <option value="Web Development">Web Development</option>
                </select>

                <select
                  name="studentGrade"
                  value={formData.studentGrade}
                  onChange={handleChange}
                  required
                  className="w-full text-black p-3 text-sm border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all duration-200"
                >
                  <option value="">Select Grade</option>
                  <option value="Kinder Garden">KG</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={`Grade ${i + 1}`}>
                      Grade {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Schedule Preference */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Schedule Preference</h3>
              <div className="space-y-3">
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full text-black p-3 text-sm border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all duration-200"
                />

                <select
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                  required
                  className="w-full text-black p-3 text-sm border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all duration-200"
                >
                  <option value="">Select Time Zone</option>
                  <option value="IST">India (IST)</option>
                  <option value="EST">Eastern Time (EST)</option>
                  <option value="PST">Pacific Time (PST)</option>
                  <option value="GMT">Greenwich Mean Time (GMT)</option>
                  <option value="CST">Central Time (CST)</option>
                </select>

                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  required
                  className="w-full text-black p-3 text-sm border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all duration-200"
                >
                  <option value="">Select Time Slot</option>
                  {[
                    "09:00 - 09:30", "09:30 - 10:00", "10:00 - 10:30", "10:30 - 11:00",
                    "11:00 - 11:30", "11:30 - 12:00", "12:00 - 12:30", "12:30 - 13:00",
                    "13:00 - 13:30", "13:30 - 14:00", "14:30 - 15:00", "15:00 - 15:30",
                    "15:30 - 16:00", "16:30 - 17:00", "17:00 - 17:30", "17:30 - 18:00",
                    "18:30 - 19:00", "19:00 - 19:30", "20:00 - 20:30"
                  ].map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {message && (
              <div className={`p-3 rounded-md text-sm ${
                message.includes('successfully') 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-200 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-300 transition-all duration-300 font-medium text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[#4A0066] text-white px-4 py-3 rounded-md hover:bg-purple-800 transition-all duration-300 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
