import { useState } from "react";
import { useRegisterMutation } from "../features/auth/authApi";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const submit = async () => {
    await register({ email, password });
    navigate("/login");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-96 p-6 shadow rounded">
        <h2 className="text-xl mb-4">Register</h2>
        <input className="border w-full p-2 mb-3" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="border w-full p-2 mb-3" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={submit} className="bg-green-600 text-white w-full p-2 rounded">Register</button>
      </div>
    </div>
  );
}
