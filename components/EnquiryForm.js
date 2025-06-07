import { useState } from "react";
import { useRouter } from "next/router";

const EnquiryForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phoneNumber: "",
    studentName: "",
    interestedCourse: "",
    studentGrade: "",
    // preferredDate: "",
    // timezone: "",
    // timeSlot: ""
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
      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Accept: "application/json",
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
          // preferredDate: "",
          // timezone: "",
          // timeSlot: ""
        });

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

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Enquiry Form</h2>
        <p className="text-sm text-gray-600 mb-4">
          Please fill in the details below to submit your enquiry
        </p>

        <hr className="mb-2" />

        {/* Personal Information */}
        <h3 className="text-sm font-semibold text-gray-800">Personal Information</h3>
        <input
          type="text"
          name="parentName"
          placeholder="Parent Name"
          value={formData.parentName}
          onChange={handleChange}
          required
          className="w-full text-black p-2 border rounded-md focus:border-purple-600 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full text-black p-2 border rounded-md focus:border-purple-600 focus:outline-none"
        />
        <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full text-black p-2 border rounded-md focus:border-purple-600 focus:outline-none"
          />

        {/* Course Information */}
        <h3 className="text-sm font-semibold text-gray-800 mt-4">Course Information</h3>
        <select
          name="interestedCourse"
          value={formData.interestedCourse}
          onChange={handleChange}
          required
          className="w-full text-black p-2 border rounded-md focus:border-purple-600 focus:outline-none"
        >
          <option value="">Select Interested Course</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Python">Python</option>
          <option value="Web Development">Web Development</option>
          <option value="Scratch">Scratch</option>
        </select>

        <select
          name="studentGrade"
          value={formData.studentGrade}
          onChange={handleChange}
          required
          className="w-full text-black p-2 border rounded-md focus:border-purple-600 focus:outline-none"
        >
          <option value="">Select Grade</option>
          <option value="Kinder Garden">KG</option>
          {[...Array(12)].map((_, i) => (
            <option key={i} value={`Grade ${i + 1}`}>
              Grade {i + 1}
            </option>
          ))}
        </select>

        {/* Schedule Preference */}
        {/* <h3 className="text-sm font-semibold text-gray-800 mt-4">Schedule Preference</h3>
        <input
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          required
          min={new Date().toISOString().split("T")[0]}
          className="w-full text-black p-2 border rounded-md focus:border-purple-600 focus:outline-none"
        />

        <select
          name="timezone"
          value={formData.timezone}
          onChange={handleChange}
          required
          className="w-full text-black p-2 border rounded-md focus:border-purple-600 focus:outline-none"
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
          className="w-full text-black p-2 border rounded-md focus:border-purple-600 focus:outline-none"
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
        </select> */}

        {message && <p className={`text-sm ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>{message}</p>}

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#4A0066] text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
