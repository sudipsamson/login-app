import SignUpForm from '../../components/auth/SignUpForm.jsx';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold text-white mb-6">Sign Up</h2>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;