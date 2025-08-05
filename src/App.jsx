import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: isLogin ? 'translateX(0)' : 'translateX(-100%)' }}
          >
            <div className="min-w-full">
              <LoginForm toggleForm={toggleForm} />
            </div>
            <div className="min-w-full">
              <SignUpForm toggleForm={toggleForm} />
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
      </div>
    </div>
  );
};

export default App;