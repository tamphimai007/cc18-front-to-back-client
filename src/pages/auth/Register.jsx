import React from "react";

const Register = () => {
  // Javascript
  return (
    <div className="bg-green-50 flex w-full h-full p-2">
      <div className="w-4/5">Coming Soon...</div>
      <div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold mb-4">Register</p>
          {/* Form Register */}
          <form className="flex flex-col space-y-4">
            <input
              placeholder="Email"
              className="p-2 rounded w-64 
              border border-gray-300 shadow-md"
            />
            <input
              placeholder="Password"
              className="p-2 rounded w-64 
              border border-gray-300 shadow-md"
            />
            <input
              placeholder="Confirm Password"
              className="p-2 rounded w-64 
              border border-gray-300 shadow-md"
            />
            <button
              className="bg-blue-400 rounded-md
              hover:bg-blue-700 hover:scale-105 hover:duration-200
              font-bold text-white shadow-md
              "
            >
              Register
            </button>
          </form>
          {/* /Form Register */}
        </div>
      </div>
    </div>
  );
};

export default Register;
