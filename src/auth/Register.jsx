 

export default function Register() {
  

  
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-96 p-6 shadow rounded">
        <h2 className="text-xl mb-4">Register</h2>
        <input className="border w-full p-2 mb-3" placeholder="Email"   />
        <input type="password" className="border w-full p-2 mb-3" placeholder="Password"   />
        <button   className="bg-green-600 text-white w-full p-2 rounded">Register</button>
      </div>
    </div>
  );
}
