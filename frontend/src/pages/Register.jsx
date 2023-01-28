import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone_number: phoneNumber,
          password,
        }),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const data = await response.json();
        setErrors(JSON.stringify(data));
      }
    } catch (error) {
      console.error(`Could not register: ${error}`);
    }
  };

  return (
    <div className="flex justify-center items-center gap-8 flex-col mt-40">
      <div className="ml-3 text-center mb-5">
        <div className="text-900 text-3xl font-bold mb-3">
          Sign up with your phone number
        </div>
        <span className="text-600 font-medium line-height-3">
          Already have an account?
        </span>
        <Link to={"/login"}>
          <span className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            login!
          </span>
        </Link>
      </div>

      <div className="flex flex-col w-3/5 mb-2 mt-2">
        <label
          htmlFor="name"
          className="block text-900 text-xl font-medium mb-2 mt-7"
        >
          Name
        </label>
        <InputText
          id="name"
          type="text"
          placeholder="Enter your name"
          className="w-full mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label
          htmlFor="email"
          className="block text-900 text-xl font-medium mb-2 mt-7"
        >
          Phone Number
        </label>
        <InputText
          id="phone_number"
          type="text"
          placeholder="Enter your phone number"
          className="w-full mb-3"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label
          htmlFor="password"
          className="block text-900 text-xl font-medium mb-2 mt-7"
        >
          Password
        </label>
        <InputText
          type="password"
          placeholder="Enter your Password"
          className="w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors && <p className="text-600 font-bold line-height-3">{errors}</p>}
        <Button
          label="Sign up"
          icon="pi pi-user"
          className="w-full"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Register;
