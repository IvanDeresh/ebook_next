"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const handleConfirmClick = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      });

      setResult(response.data);
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex text-black justify-center items-center h-screen max-container">
      <div className="border-2 w-[500px] h-[600px] rounded-xl shadow-2xl shadow-white  flex flex-col justify-around items-center">
        <div className="text-[35px] font-bold">Login</div>
        <div className="flex flex-col w-[300px] gap-10">
          <input
            value={email}
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="      Email"
            className="h-[50px] w-[300px] rounded-full focus:outline-none"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="      password"
            className="h-[50px] w-[300px] rounded-full focus:outline-none"
          />
        </div>
        <button
          onClick={handleConfirmClick}
          className={`w-[150px] text-white bg-green-500 h-[50px] rounded-full ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Confirm"}
        </button>

        <textarea
          className="text-black rounded-2xl"
          value={`${result} ${error}`}
          readOnly
        />
        <Link
          className="flex text-white flex-col justify-center items-center leading-9"
          href="/pages/sign-in/sign-up"
        >
          Sign up
          <br />
          <div className="w-[100px] h-2 rounded-full bg-green-500"></div>
        </Link>
      </div>
    </div>
  );
};

export default page;
