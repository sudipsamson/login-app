import { useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../common/Input';
import Button from '../common/Button';
import { login } from '../../services/authService';

const LoginForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email address';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the errors in the form');
      return;
    }

    try {
      const response = await login(email, password);
      toast.success(response.message);
      setEmail('');
      setPassword('');
      setErrors({});
    } catch (error) {
      toast.error(error.message || 'Login failed');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          placeholder="Enter your password"
          togglePassword={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
        />
        <Button type="submit" text="Login" className="w-full" />
      </form>
      <div className="mt-4 flex justify-between">
        <Button
          text="Google"
          onClick={() => toast.info('Google login clicked (simulated)')}
          className="flex-1 mr-2 bg-white/20 hover:bg-white/30"
        />
        <Button
          text="Facebook"
          onClick={() => toast.info('Facebook login clicked (simulated)')}
          className="flex-1 ml-2 bg-white/20 hover:bg-white/30"
        />
      </div>
      <p className="mt-4 text-center text-white">
        Don't have an account?{' '}
        <button onClick={toggleForm} className="text-indigo-300 hover:text-indigo-200 font-semibold">
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default LoginForm;