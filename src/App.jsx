import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './admin/AdminDashboard';
import CustomerHome from './customer/CustomerHome';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/admin/*" element={<PrivateRoute adminOnly><AdminDashboard/></PrivateRoute>} />
      <Route path="/customer/*" element={<PrivateRoute><CustomerHome/></PrivateRoute>} />
    </Routes>
  );
}

export default App;
