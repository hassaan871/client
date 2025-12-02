import { useState } from 'react';

export default function SignupForm() {
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (usernameError) {
      setUsernameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) {
      setPasswordError('');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    let hasError = false;

    if (!username.trim()) {
      setUsernameError('Username is required');
      hasError = true;
    } else if (username.length < 3) {
      setUsernameError('Username must be at least 3 characters');
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      hasError = true;
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      hasError = true;
    }

    if (!hasError) {
      console.log('Signup submitted:', { username, email, password });
      // Add your signup logic here
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#023E8A] to-[#2a7ca8] p-4">
      <div className="border-2 border-white rounded-2xl bg-[#F5F5F5] w-full max-w-[400px] p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Sign Up</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <input
              className={`w-full h-14 px-4 rounded-3xl border text-base outline-none transition-all duration-300 ${
                usernameError
                  ? 'border-red-500 shadow-[0_0_8px_rgba(255,0,0,0.3)]'
                  : 'border-gray-300 focus:border-[#023E8A] focus:shadow-[0_0_8px_rgba(2,62,138,0.5)]'
              }`}
              type="text"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
              required
            />
            {usernameError && (
              <div className="text-red-500 mt-1 text-sm ml-4">{usernameError}</div>
            )}
          </div>

          <div className="flex flex-col">
            <input
              className={`w-full h-14 px-4 rounded-3xl border text-base outline-none transition-all duration-300 ${
                emailError
                  ? 'border-red-500 shadow-[0_0_8px_rgba(255,0,0,0.3)]'
                  : 'border-gray-300 focus:border-[#023E8A] focus:shadow-[0_0_8px_rgba(2,62,138,0.5)]'
              }`}
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleEmailChange}
              onKeyPress={handleKeyPress}
              required
            />
            {emailError && (
              <div className="text-red-500 mt-1 text-sm ml-4">{emailError}</div>
            )}
          </div>

          <div className="flex flex-col">
            <input
              className={`w-full h-14 px-4 rounded-3xl border text-base outline-none transition-all duration-300 ${
                passwordError
                  ? 'border-red-500 shadow-[0_0_8px_rgba(255,0,0,0.3)]'
                  : 'border-gray-300 focus:border-[#023E8A] focus:shadow-[0_0_8px_rgba(2,62,138,0.5)]'
              }`}
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
              required
            />
            {passwordError && (
              <div className="text-red-500 mt-1 text-sm ml-4">{passwordError}</div>
            )}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full h-12 rounded-3xl border-none text-white bg-[#023E8A] cursor-pointer font-bold text-base hover:bg-[#012a5e] transition-colors duration-300 mt-2"
          >
            Sign Up
          </button>

          <div className="text-center mt-2">
            <p className="text-gray-600 mb-2">or</p>
            <p className="text-gray-700">
              Already have an account?{' '}
              <a href="/login" className="text-[#023E8A] hover:underline font-semibold">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}