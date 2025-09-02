// src/components/Login/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const userDetails = { username, password };

    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch("https://apis.ccbp.in/login", options);
    const data = await response.json();

    if (response.ok) {
      Cookies.set("jwt_token", data.jwt_token, { expires: 30 });
      console.log(data.jwt_token)
      navigate("/");
      
    } else {
      setErrorMsg(data.error_msg);
    }
  };

  return (
    <div className="z-10 flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('https://res.cloudinary.com/datm0tjmq/image/upload/v1754162370/Screenshot_2025-08-03_004912_nlnfaz.png')] 
            md:bg-[url('https://res.cloudinary.com/datm0tjmq/image/upload/v1754149997/Screenshot_2025-08-02_211512_p0tuhw.png')] 
            lg:bg-[url('https://res.cloudinary.com/datm0tjmq/image/upload/v1754149997/Screenshot_2025-08-02_211512_p0tuhw.png')]">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-4xl shadow-md w-88 h-96"
      >
        <img
          src="https://res.cloudinary.com/datm0tjmq/image/upload/v1754153208/Logo_2_dhgtrd.png"
          alt="login website logo"
          className="mx-auto mb-6"
        />

        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          className="border w-full p-2 rounded-lg mb-4"
          required
        />
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className="border w-full p-2 rounded-lg mb-4"
          required
        />
        <label className="text-sm flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {errorMsg && <p className="text-red-500 text-center font-semibold text-sm mt-3">{errorMsg}</p>}
      </form>
    </div>
  );
};

export default Login;