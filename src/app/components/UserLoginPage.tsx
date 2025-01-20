"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const UserLoginPage = () => {
  const [userRegister, setUserRegister] = useState({
    emailId: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const value = e.target.value;
    setUserRegister((prev) => ({ ...prev, [name]: value }));
  };

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Clear any previous error
    setIsLoading(true);

    // Basic client-side validation
    if (!userRegister.emailId || !userRegister.password) {
      setError("Both email and password are required.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await signIn("credentials", {
        redirect: false,
        emailId: userRegister.emailId,
        password: userRegister.password,
      });

      if (response?.error) {
        setError("Login failed. Please check your credentials.");
      } else {
        console.log("Login successful");
        router.push("/");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[500px] flex justify-center items-center mx-auto my-[100px] bg-gray-200 py-[40px] rounded-md">
      <form onSubmit={loginHandler}>
        <h1 className="text-center font-bold mb-[30px] text-[20px]">Login Form</h1>

        <div className="flex flex-col mb-[15px]">
          <label className="mb-[10px]" htmlFor="emailId">
            Email Id
          </label>
          <input
            id="emailId"
            className="px-2 py-1 border rounded-md"
            type="email"
            name="emailId"
            value={userRegister.emailId}
            onChange={(e) => handleChange(e, "emailId")}
            aria-label="Email Id"
            autoComplete="email"
          />
        </div>

        <div className="flex flex-col mb-[15px]">
          <label className="mb-[10px]" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="px-2 py-1 border rounded-md"
            type="password"
            name="password"
            value={userRegister.password}
            onChange={(e) => handleChange(e, "password")}
            aria-label="Password"
            autoComplete="current-password"
          />
        </div>

        <div className="flex justify-center items-center mb-[20px]">
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-1 rounded-md ${isLoading ? "opacity-50" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <Link href="/register" className="hover:underline">
          Not registered?{" "}
          <span className="font-bold text-blue-300">Register</span>
        </Link>
      </form>
    </div>
  );
};

export default UserLoginPage;
