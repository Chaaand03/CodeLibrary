import { useState,useEffect,useRef } from "react";
import { useRouter } from "next/router"; // Import Next.js router

const Register = ({ isOpen, onClose }) => {
  const router = useRouter(); // Initialize router
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
          preferredDate: "",
          timezone: "",
          timeSlot: ""
        });
        onClose();

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
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200]">
      <div ref={modalRef} className="bg-gray-200 p-8 rounded-lg max-w-md w-full relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl hover:text-green-500">
          ×
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-gray-700">Parent Name:</label>
            <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required className="w-full text-black p-2 border-2  rounded-md cursor-pointer focus:border-green-500 focus:outline-none"
 />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full text-black p-2 border-2  rounded-md cursor-pointer focus:border-green-500 focus:outline-none" />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Phone Number:</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full text-black p-2 border-2  rounded-md cursor-pointer focus:border-green-500 focus:outline-none" />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Student Name:</label>
            <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required className="w-full text-black p-2 border-2  rounded-md cursor-pointer focus:border-green-500 focus:outline-none" />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Interested Course:</label>
            <select name="interestedCourse" value={formData.interestedCourse} onChange={handleChange} required className="w-full text-black p-2 border-2  rounded-md cursor-pointer focus:border-green-500 focus:outline-none">
              <option value="">Select a course</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Python">Python</option>
              <option value="Web Development">Web Development</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Student Grade:</label>
            <select name="studentGrade" value={formData.studentGrade} onChange={handleChange} required className="w-full text-black p-2 border-2  rounded-md cursor-pointer focus:border-green-500 focus:outline-none">
              <option value="">Select a grade</option>
              <option value="Kinder Garden">KG </option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
  <label className="block text-gray-700">Preferred Date:</label>
  <input
    type="date"
    name="preferredDate"
    value={formData.preferredDate}
    onChange={handleChange}
    required
    min={new Date().toISOString().split('T')[0]}
    className="w-full text-black p-2 border-2  rounded-md cursor-pointer focus:border-green-500 focus:outline-none"
  />
</div>


          <div className="space-y-2">
            <label className="block text-gray-700">Time Zone:</label>
            <select
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              required
              className="w-full text-black p-2 border-2  rounded-md cursor-pointer focus:border-green-500 focus:outline-none"
            >
              <option value="">Select Time Zone</option>
              <option value="IST">India (IST)</option>
              <option value="EST">Eastern Time (EST)</option>
              <option value="PST">Pacific Time (PST)</option>
              <option value="GMT">Greenwich Mean Time (GMT)</option>
              <option value="CST">Central Time (CST)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">Time Slot:</label>
            <select
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              required
              className="w-full text-black p-2 border-2  rounded-md cursor-pointer focus:border-green-500 focus:outline-none"
            >
              <option value="">Select Time Slot</option>
              <option value="09:00-09:30">09:00 - 09:30</option>
              <option value="09:30-10:00">09:30 - 10:00</option>
              <option value="10:00-10:30">10:00 - 10:30</option>
              <option value="10:30-11:00">10:30 - 11:00</option>
              <option value="11:00-11:30">11:00 - 11:30</option>
              <option value="11:30-12:00">11:30 - 12:00</option>
              <option value="12:00-12:30">12:00 - 12:30</option>
              <option value="12:30-13:00">12:30 - 13:00</option>
              <option value="13:00-13:30">13:00 - 13:30</option>
              <option value="13:30-14:00">13:30 - 14:00</option>
              <option value="13:30-14:00">14:30 - 15:00</option>
              <option value="13:30-14:00">15:00 - 15:30</option>
              <option value="13:30-14:00">15:30 - 16:00</option>
              <option value="13:30-14:00">16:30 - 17:00</option>
              <option value="13:30-14:00">17:00 - 17:30</option>
              <option value="13:30-14:00">17:30 - 18:00</option>
              <option value="13:30-14:00">18:30 - 19:00</option>
              <option value="13:30-14:00">19:00 - 19:30</option>
              <option value="13:30-14:00">20:00 - 20:30</option>

            </select>
          </div>



          {message && <p className="text-red-500">{message}</p>}

          <div className="flex justify-between">

            <button type="button" onClick={onClose} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition duration-300">
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
