import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <div className="bg-[#F4F0EA] font-[Figtree] min-h-screen flex items-center justify-center px-4">
      {/* Card */}
      <div className="bg-gradient-to-b from-[#dbc0ad] w-full max-w-md rounded-2xl shadow-xl p-6 sm:p-8">

        {/* Cafe Name */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-['Sour_Gummy']">
          Afrah's Bisscuit
        </h1>
        <p className="text-center mb-8 text-sm sm:text-base">
          Welcome Bisscuits Lover!
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Remember */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#CFA689]" />
              Remember me
            </label>
            <a href="#" className="text-[#8f5933] hover:underline text-right">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#CFA689] text-white rounded-full font-semibold hover:opacity-80 transition"
          >
            LOG IN
          </button>
        </form>

        <div className="my-6 text-center text-[#cfa689] text-sm">
          — or —
        </div>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <a href="#" className="text-[#8f5933] font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
