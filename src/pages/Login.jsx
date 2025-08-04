import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const login = async ()=> {
    try {
      await signInWithEmailAndPassword(auth,email,password);
      if(email === 'arafathowlider5@gmail.com') navigate('/admin');
      else navigate('/customer');
    } catch {
      alert('Login failed');
    }
  }

  return (
    <div className="p-4 max-w-sm mx-auto mt-10">
      <h2 className="text-xl mb-4">Login</h2>
      <input onChange={e=>setEmail(e.target.value)} placeholder="Email" className="border p-2 mb-2 w-full"/>
      <input onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="border p-2 mb-2 w-full"/>
      <button onClick={login} className="bg-blue-500 text-white px-4 py-2">Login</button>
    </div>
  );
}
