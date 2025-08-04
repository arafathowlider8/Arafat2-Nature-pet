import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const register = async ()=> {
    try {
      await createUserWithEmailAndPassword(auth,email,password);
      navigate('/customer');
    } catch {
      alert('Registration failed');
    }
  }

  return (
    <div className="p-4 max-w-sm mx-auto mt-10">
      <h2 className="text-xl mb-4">Register</h2>
      <input onChange={e=>setEmail(e.target.value)} placeholder="Email" className="border p-2 mb-2 w-full"/>
      <input onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="border p-2 mb-2 w-full"/>
      <button onClick={register} className="bg-green-500 text-white px-4 py-2">Register</button>
    </div>
  );
}
