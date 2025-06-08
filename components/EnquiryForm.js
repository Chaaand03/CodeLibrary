import { useState } from "react";
import { useRouter } from "next/router";

const COUNTRY_CODES = [
  { label: "🇺🇸 United States (+1)",     value: "+1"  },
  { label: "🇨🇦 Canada (+1)",            value: "+1"  },
  { label: "🇬🇧 United Kingdom (+44)",   value: "+44" },
  { label: "🇮🇳 India (+91)",            value: "+91" },
  { label: "🇦🇺 Australia (+61)",       value: "+61" },
  { label: "🇩🇪 Germany (+49)",          value: "+49" },
  { label: "🇫🇷 France (+33)",           value: "+33" },
  { label: "🇪🇸 Spain (+34)",            value: "+34" },
  { label: "🇮🇹 Italy (+39)",            value: "+39" },
  { label: "🇧🇷 Brazil (+55)",           value: "+55" },
  { label: "🇲🇽 Mexico (+52)",           value: "+52" },
  { label: "🇷🇺 Russia (+7)",            value: "+7"  },
  { label: "🇨🇳 China (+86)",            value: "+86" },
  { label: "🇯🇵 Japan (+81)",            value: "+81" },
  { label: "🇰🇷 South Korea (+82)",      value: "+82" },
  { label: "🇿🇦 South Africa (+27)",     value: "+27" },
  { label: "🇳🇱 Netherlands (+31)",      value: "+31" },
  { label: "🇸🇪 Sweden (+46)",           value: "+46" },
  { label: "🇳🇿 New Zealand (+64)",      value: "+64" },
];

const EnquiryForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    countryCode: "+1",
    phoneNumber: "",
    studentName: "",
    interestedCourse: "",
    studentGrade: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      const digitsOnly = value.replace(/\D/g, "");
      setFormData((f) => ({ ...f, phoneNumber: digitsOnly }));
    } else {
      setFormData((f) => ({ ...f, [name]: value }));
    }
  };

  const handlePhoneBlur = () => {
    if (formData.phoneNumber.length !== 10) {
      setMessage("Phone number must be exactly 10 digits.");
    } else {
      setMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phoneNumber.length !== 10) {
      setMessage("Phone number must be exactly 10 digits.");
      return;
    }
    setLoading(true);
    setMessage("");

    const payload = {
      ...formData,
      phoneNumber: `${formData.countryCode}${formData.phoneNumber}`,
    };

    try {
      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setFormData({
          parentName: "",
          email: "",
          countryCode: "+1",
          phoneNumber: "",
          studentName: "",
          interestedCourse: "",
          studentGrade: "",
        });

        setTimeout(() => {
          router.push("/thank-you");
        }, 1000);
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
        <div className="flex space-x-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-1/3 p-3 text-sm text-black border border-gray-300 rounded-md focus:border-purple-600 focus:ring-purple-600"
                  >
                    {COUNTRY_CODES.map(({ label, value }) => (
                      <option key={value + label} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="1234567890"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onBlur={handlePhoneBlur}
                    maxLength={10}
                    required
                    className="flex-1 text-black p-3 text-sm border border-gray-300 rounded-md focus:border-purple-600 focus:ring-purple-600"
                  />
                </div>
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
