"use client ";

import React, { useState } from "react";
import { registerAction } from "../serverActions/registerActions";
import Link from "next/link";
const RegisterForm = () => {
  const [register, setRegister] = useState({
    username: "",
    emailId: "",
    password: "",
  });

  const handleChange = (e: any, name: any) => {
    const value = e.target.value;
    setRegister({ ...register, [name]: value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("register", register);

    setRegister({ username: "", emailId: "", password: "" });
    try {
      const response = await registerAction(register);
      if (response.success) {
        alert("registration successfull");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[500px] flex justify-center items-center mx-auto my-[100px] bg-gray-200 py-[40px] rounded-md">
     
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-[15px]">
          <h1 className="text-center font-bold mb-[30px] text-[20px]">
            Registration Form
          </h1>
          <div className="flex flex-col mb-[15px]">
            <label className="mb-[10px]">User Name</label>
            <input
              className="px-2 py-1 border rounded-md"
              type="text"
              name="username"
              value={register.username}
              onChange={(e) => handleChange(e, "username")}
            />
          </div>
          <div className="flex flex-col mb-[15px]">
            <label className="mb-[10px]">Email Id</label>
            <input
              className="px-2 py-1 border rounded-md"
              type="type"
              name="emailId"
              value={register.emailId}
              onChange={(e) => handleChange(e, "emailId")}
            />
          </div>
          <div className="flex flex-col mb-[15px]">
            <label className="mb-[10px]">Password</label>
            <input
              className="px-2 py-1 border rounded-md"
              type="password"
              name="password"
              value={register.password}
              onChange={(e) => handleChange(e, "password")}
            />
          </div>
        </div>
        <div className="flex justify-center items-center mb-[20px]">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-1 rounded-md"
          >
            Register
          </button>
        </div>
        <Link href="/login" className="hover:underline mt-[20px] flex justify-center items-center">
          Already Registered? <span className="font-bold text-blue-300">Login</span>
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
