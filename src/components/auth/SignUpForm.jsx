import { useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../common/Input';
import Button from '../common/Button';
import { signup } from '../../services/authService';

const SignUpForm = ({ toggleForm }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email address';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
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
      const response = await signup(username, email, password);
      toast.success(response.message);
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrors({});
    } catch (error) {
      toast.error(error.message || 'Sign up failed');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={errors.username}
          placeholder="Enter your username"
        />
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
        <Input
          label="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
          placeholder="Confirm your password"
        />
        <Button type="submit" text="Sign Up" className="w-full" />
      </form>
      <div className="mt-4 flex justify-between">
        <Button
          text="Google"
          onClick={() => toast.info('Google signup clicked (simulated)')}
          className="flex-1 mr-2 bg-white/20 hover:bg-white/30"
        />
        <Button
          text="Facebook"
          onClick={() => toast.info('Facebook signup clicked (simulated)')}
          className="flex-1 ml-2 bg-white/20 hover:bg-white/30"
        />
      </div>
      <p className="mt-4 text-center text-white">
        Already have an account?{' '}
        <button onClick={toggleForm} className="text-indigo-300 hover:text-indigo-200 font-semibold">
          Login
        </button>
      </p>
    </div>
  );
};

export default SignUpForm;