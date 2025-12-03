import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  const [isVideoUploaded, setIsVideoUploaded] = useState(false);

  const handleVideoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setIsVideoUploaded(true);
      setTimeout(() => setIsVideoUploaded(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050E3C] via-[#002455] to-[#002455]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-[#DC0000] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 -left-4"></div>
          <div className="absolute w-96 h-96 bg-[#FF3838] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 top-0 right-4"></div>
          <div className="absolute w-96 h-96 bg-[#FF3838] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000 bottom-8 left-20"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-10 w-16 h-16 border-4 border-[#FF3838]/30 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-32 right-20 w-20 h-20 border-4 border-[#DC0000]/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/3 right-16 w-12 h-12 bg-[#FF3838]/20 rounded-lg animate-float animation-delay-2000"></div>

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
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(220, 0, 0, 0.3); }
            50% { box-shadow: 0 0 40px rgba(255, 56, 56, 0.6); }
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
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
        `}</style>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF3838]/20 backdrop-blur-sm rounded-full border border-[#FF3838]/30 mb-6">
                <div className="w-2 h-2 bg-[#FF3838] rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium">AI-Powered Vision Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Track & Recognize
                <span className="block bg-gradient-to-r from-[#FF3838] to-[#DC0000] bg-clip-text text-transparent">
                  Everything in Motion
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Upload your videos and let our advanced AI instantly detect, track, and identify vehicles and objects with precision. Transform raw footage into actionable intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a 
                  href="/signup" 
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#DC0000] to-[#FF3838] text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Tracking Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a 
                  href="#how-it-works" 
                  className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#FF3838]">99.2%</div>
                  <div className="text-sm text-white/70">Accuracy</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#FF3838]">Real-time</div>
                  <div className="text-sm text-white/70">Processing</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-[#FF3838]">24/7</div>
                  <div className="text-sm text-white/70">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Interactive Demo */}
            <div className="relative">
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border-2 border-white/30 shadow-2xl">
                <div className="bg-gradient-to-br from-[#001a3d] to-[#050E3C] rounded-2xl p-8 mb-6 min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">
                  {!isVideoUploaded ? (
                    <>
                      <svg className="w-24 h-24 text-white/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <p className="text-white/60 mb-4">Upload your video to see AI in action</p>
                      <label className="cursor-pointer px-6 py-3 rounded-lg bg-gradient-to-r from-[#DC0000] to-[#FF3838] text-white font-semibold hover:shadow-lg transition-all duration-300">
                        Choose Video
                        <input type="file" accept="video/*" onChange={handleVideoUpload} className="hidden" />
                      </label>
                    </>
                  ) : (
                    <div className="w-full text-center">
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/20 rounded-lg border border-green-500/50 mb-4">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white font-medium">Processing Video...</span>
                      </div>
                      <div className="flex gap-2 justify-center">
                        <div className="w-3 h-3 bg-[#FF3838] rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-[#DC0000] rounded-full animate-pulse animation-delay-1000"></div>
                        <div className="w-3 h-3 bg-[#FF3838] rounded-full animate-pulse animation-delay-2000"></div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#001a3d]/50 rounded-xl p-4 text-center border border-white/10">
                    <div className="text-2xl font-bold text-[#FF3838] mb-1">12</div>
                    <div className="text-xs text-white/70">Objects Detected</div>
                  </div>
                  <div className="bg-[#001a3d]/50 rounded-xl p-4 text-center border border-white/10">
                    <div className="text-2xl font-bold text-[#FF3838] mb-1">8</div>
                    <div className="text-xs text-white/70">Vehicles Tracked</div>
                  </div>
                  <div className="bg-[#001a3d]/50 rounded-xl p-4 text-center border border-white/10">
                    <div className="text-2xl font-bold text-[#FF3838] mb-1">4.2s</div>
                    <div className="text-xs text-white/70">Process Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 bg-gradient-to-b from-[#002455] to-[#001a3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features for
              <span className="block bg-gradient-to-r from-[#FF3838] to-[#DC0000] bg-clip-text text-transparent">
                Intelligent Vision
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Everything you need to analyze, track, and understand video content with AI precision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group backdrop-blur-xl bg-white/5 hover:bg-white/10 rounded-2xl p-8 border border-white/10 hover:border-[#FF3838]/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC0000] to-[#FF3838] rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Object Detection</h3>
              <p className="text-white/70 leading-relaxed">
                Identify and classify multiple objects in your videos with industry-leading accuracy using advanced neural networks.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group backdrop-blur-xl bg-white/5 hover:bg-white/10 rounded-2xl p-8 border border-white/10 hover:border-[#FF3838]/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC0000] to-[#FF3838] rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Motion Tracking</h3>
              <p className="text-white/70 leading-relaxed">
                Follow objects seamlessly across frames with persistent tracking, even through occlusions and complex movements.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group backdrop-blur-xl bg-white/5 hover:bg-white/10 rounded-2xl p-8 border border-white/10 hover:border-[#FF3838]/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC0000] to-[#FF3838] rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Real-time Processing</h3>
              <p className="text-white/70 leading-relaxed">
                Get instant results with our optimized pipeline that processes videos at lightning speed without compromising accuracy.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group backdrop-blur-xl bg-white/5 hover:bg-white/10 rounded-2xl p-8 border border-white/10 hover:border-[#FF3838]/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC0000] to-[#FF3838] rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Analytics Dashboard</h3>
              <p className="text-white/70 leading-relaxed">
                Visualize insights with comprehensive analytics and reports on detected objects, patterns, and trends over time.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group backdrop-blur-xl bg-white/5 hover:bg-white/10 rounded-2xl p-8 border border-white/10 hover:border-[#FF3838]/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC0000] to-[#FF3838] rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Secure & Private</h3>
              <p className="text-white/70 leading-relaxed">
                Your data is encrypted end-to-end with enterprise-grade security. We never share or store your videos without permission.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group backdrop-blur-xl bg-white/5 hover:bg-white/10 rounded-2xl p-8 border border-white/10 hover:border-[#FF3838]/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC0000] to-[#FF3838] rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Multiple Formats</h3>
              <p className="text-white/70 leading-relaxed">
                Support for all major video formats including MP4, AVI, MOV, and more. Upload from anywhere, get results everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-[#001a3d] to-[#050E3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Get started in three simple steps and unlock the power of AI vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#DC0000] to-[#FF3838] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Upload Video</h3>
                <p className="text-white/70 leading-relaxed">
                  Simply drag and drop your video file or select it from your device. We support all major formats.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#FF3838] to-transparent"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#DC0000] to-[#FF3838] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Processing</h3>
                <p className="text-white/70 leading-relaxed">
                  Our advanced AI analyzes every frame, detecting and tracking objects with precision in real-time.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#FF3838] to-transparent"></div>
            </div>

            {/* Step 3 */}
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#DC0000] to-[#FF3838] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Get Results</h3>
              <p className="text-white/70 leading-relaxed">
                Download annotated videos, detailed reports, and actionable insights ready to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#050E3C] to-[#002455]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-[#DC0000] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 right-0"></div>
          <div className="absolute w-96 h-96 bg-[#FF3838] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 bottom-0 left-0"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Videos?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of users who are already using VisionTrack to unlock insights from their video content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/signup" 
              className="group px-10 py-5 rounded-xl bg-gradient-to-r from-[#DC0000] to-[#FF3838] text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="px-10 py-5 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}