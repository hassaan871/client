export default function NotFoundPageUI() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050E3C] via-[#002455] to-[#002455] p-4 overflow-hidden relative">
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
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
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

      <div className="relative z-10 text-center max-w-3xl px-4">
        {/* 404 Number with glowing effect */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 blur-3xl opacity-40">
            <h1 className="text-9xl md:text-[220px] font-black text-[#FF3838]">404</h1>
          </div>
          <h1 className="relative text-9xl md:text-[220px] font-black text-[#FF3838] mb-6 tracking-wider drop-shadow-2xl">
            4
            <span className="inline-block animate-bounce-slow text-[#DC0000]">0</span>
            4
          </h1>
          
          {/* Animated dots */}
          <div className="flex justify-center gap-3 mb-8">
            <div className="w-3 h-3 bg-[#FF3838] rounded-full animate-pulse-slow"></div>
            <div className="w-3 h-3 bg-[#DC0000] rounded-full animate-pulse-slow animation-delay-1000"></div>
            <div className="w-3 h-3 bg-[#FF3838] rounded-full animate-pulse-slow animation-delay-2000"></div>
          </div>
        </div>

        {/* Content card with glassmorphism */}
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 mb-10 border-2 border-white/30 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FF3838] to-[#DC0000] rounded-2xl flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Oops! Page Not Found
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-3 leading-relaxed">
            The page you're looking for seems to have wandered off into the digital void.
          </p>
          <p className="text-white/75 text-base md:text-lg leading-relaxed">
            Don't worry though, even the best explorers take wrong turns sometimes!
          </p>
        </div>

        {/* Single home button */}
        <div className="flex justify-center items-center mb-8">
          <a 
            href="/" 
            className="group relative px-10 py-4 rounded-xl bg-gradient-to-r from-[#DC0000] to-[#FF3838] text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Return Home
            </span>
          </a>
        </div>

        {/* Help links */}
        <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            Need help finding your way?
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-3">
            <a 
              href="/" 
              className="text-white hover:text-[#FF3838] font-semibold transition-colors duration-300 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </a>
            <span className="text-white/40">•</span>
            <a 
              href="/contact" 
              className="text-white hover:text-[#FF3838] font-semibold transition-colors duration-300 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
            <span className="text-white/40">•</span>
            <a 
              href="/help" 
              className="text-white hover:text-[#FF3838] font-semibold transition-colors duration-300 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

