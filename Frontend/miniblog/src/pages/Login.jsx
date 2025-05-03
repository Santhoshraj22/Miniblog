import { useState } from 'react';
import API from '../Services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/login', { email, password });
      login(res.data.token);
      navigate('/Createpost');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="email" className="w-full p-2 border" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="w-full p-2 border" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
}
export default Login;
