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

export default function ViewDetailedCurrForm({ topic, onClose }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    parentName: "",
    countryCode: "+1",
    phoneNumber: "",
    interestedCourse: topic.title,
    studentGrade: topic.grade,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    setLoading(true);
    setError("");

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setError("Phone number must be exactly 10 digits.");
      setLoading(false);
      return;
    }

    const payload = {
      parentName: formData.parentName,
      phoneNumber: `${formData.countryCode}${formData.phoneNumber}`,
      interestedCourse: formData.interestedCourse,
      studentGrade: formData.studentGrade,
    };

    try {
      const res = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");

      onClose();
    //   router.push(topic.pdfLink);
      window.open(topic.pdfLink, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error(err);
      setError("Unable to submit. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-sm p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-xl text-[#301934] font-bold mb-4">Get Detailed Curriculum</h2>
        <p className="text-sm text-gray-600 mb-4">
          Course: <strong>{topic.title}</strong>
        </p>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Parent Name */}
          <div>
            <input
              name="parentName"
              placeholder="Name"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="mt-1 w-full text-black p-2 border rounded-md focus:border-purple-600 focus:outline-none"
            />
          </div>

          {/* Country Code + Phone */}
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                required
                className="mt-1 w-full text-black p-2 border rounded-md focus:border-purple-600 focus:outline-none bg-white"
              >
                {COUNTRY_CODES.map(({ label, value }) => (
                  <option key={value + label} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                pattern="^\d{10}$"
                title="Enter exactly 10 digits"
                placeholder="1234567890"
                className="mt-1 w-full p-2 text-black border rounded-md focus:border-purple-600 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
          >
            {loading ? "Submitting…" : "Submit & View Course"}
          </button>
        </form>
      </div>
    </div>
  );
}
