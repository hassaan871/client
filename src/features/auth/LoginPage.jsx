import { useState } from 'react';

export default function LoginForm() {
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (usernameError) {
      setUsernameError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) {
      setPasswordError('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#023E8A] to-[#2a7ca8]">
      <div className="border-2 border-white rounded-2xl bg-[#F5F5F5] w-[400px] h-[50vh] text-center flex flex-col justify-center shadow-lg">
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <div className="flex flex-col items-center">
          {usernameError && (
            <div className="text-red-500 mb-2 text-sm">{usernameError}</div>
          )}
          <input
            className={`w-4/5 h-16 rounded-[26px] border text-center text-base outline-none transition-all duration-300 ${
              usernameError
                ? 'border-red-500 shadow-[0_0_8px_rgba(255,0,0,0.3)]'
                : 'border-[#F5F5F5] focus:border-[#023E8A] focus:shadow-[0_0_8px_rgba(2,62,138,0.5)]'
            }`}
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <br />
          {passwordError && (
            <div className="text-red-500 mb-2 text-sm">{passwordError}</div>
          )}
          <input
            className={`w-4/5 h-16 rounded-[26px] border text-center text-base outline-none transition-all duration-300 ${
              passwordError
                ? 'border-red-500 shadow-[0_0_8px_rgba(255,0,0,0.3)]'
                : 'border-[#F5F5F5] focus:border-[#023E8A] focus:shadow-[0_0_8px_rgba(2,62,138,0.5)]'
            }`}
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <button
            type="button"
            className="w-[250px] h-12 rounded-[26px] border-none text-white bg-[#023E8A] cursor-pointer font-bold text-base hover:bg-[#012a5e] transition-colors duration-300"
          >
            Login
          </button>
          <p className="mt-4">or</p>
          <p className="mt-2">
            Create new Account{' '}
            <a href="/signup" className="text-[#023E8A] hover:underline">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}