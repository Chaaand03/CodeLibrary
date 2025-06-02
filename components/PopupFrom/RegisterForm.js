import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";

const RegisterForm = ({ handleOpen, typeAcc }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    handleOpen(); // Close popup after submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        label="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="tel"
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        label="Grade/Class"
        name="grade"
        value={formData.grade}
        onChange={handleChange}
        required
      />
      <div className="flex justify-end gap-4 mt-4">
        <Button color="red" onClick={handleOpen}>
          Cancel
        </Button>
        <Button color="green" type="submit">
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
