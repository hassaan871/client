import { useState } from 'react';

export default function LoginForm() {
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = async () => {
    let hasError = false;

    if (!username.trim()) {
      setUsernameError('Username is required');
      hasError = true;
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      hasError = true;
    }

    if (!hasError) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Login submitted:', { username, password });
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050E3C] via-[#002455] to-[#002455] p-4 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#DC0000] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 -left-4"></div>
        <div className="absolute w-96 h-96 bg-[#FF3838] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 top-0 right-4"></div>
        <div className="absolute w-96 h-96 bg-[#FF3838] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000 bottom-8 left-20"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 border-4 border-[#FF3838]/30 rounded-lg rotate-45 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 border-4 border-[#DC0000]/30 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute top-1/3 right-16 w-12 h-12 bg-[#FF3838]/20 rounded-lg animate-float animation-delay-2000"></div>
      <div className="absolute bottom-1/3 left-16 w-14 h-14 border-4 border-[#FF3838]/30 rounded-full animate-float animation-delay-3000"></div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 50px) scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <div className="relative z-10 backdrop-blur-xl bg-white/95 rounded-3xl shadow-2xl w-full max-w-md p-8 border border-white/20">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#DC0000] to-[#FF3838] rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-[#050E3C] to-[#002455] bg-clip-text text-transparent">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-8">Sign in to continue to your account</p>

        <div className="space-y-5">
          {/* Username Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                className={`w-full h-14 pl-12 pr-4 rounded-xl border-2 text-base outline-none transition-all duration-300 bg-white ${
                  usernameError
                    ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                    : 'border-gray-200 focus:border-[#DC0000] focus:ring-4 focus:ring-[#DC0000]/20'
                }`}
                type="text"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
                onKeyPress={handleKeyPress}
                required
              />
            </div>
            {usernameError && (
              <p className="mt-2 text-sm text-red-500 ml-1 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {usernameError}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                className={`w-full h-14 pl-12 pr-4 rounded-xl border-2 text-base outline-none transition-all duration-300 bg-white ${
                  passwordError
                    ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
                    : 'border-gray-200 focus:border-[#DC0000] focus:ring-4 focus:ring-[#DC0000]/20'
                }`}
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
                required
              />
            </div>
            {passwordError && (
              <p className="mt-2 text-sm text-red-500 ml-1 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {passwordError}
              </p>
            )}
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#DC0000] focus:ring-[#DC0000] focus:ring-2" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-[#002455] hover:text-[#DC0000] font-medium transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full h-14 rounded-xl border-none text-white bg-gradient-to-r from-[#DC0000] to-[#FF3838] cursor-pointer font-semibold text-base hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>

          {/* Signup Link */}
          <div className="text-center pt-4">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="/signup" className="text-[#002455] hover:text-[#DC0000] font-semibold transition-colors">
                Create Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
