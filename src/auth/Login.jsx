import { useState } from "react";
import { useLoginMutation } from "../features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const submit = async () => {
    const res = await login({ email, password }).unwrap();
    localStorage.setItem("token", res.token);
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-96 p-6 shadow rounded">
        <h2 className="text-xl mb-4">Login</h2>
        <input className="border w-full p-2 mb-3" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="border w-full p-2 mb-3" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={submit} className="bg-blue-600 text-white w-full p-2 rounded">Login</button>

        <p>You have no account? <Link to="/register"><span className="text-green-500">Register</span></Link></p>
      </div>
    </div>
  );
}
