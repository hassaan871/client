import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function VideoProcessingPage() {
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [processedVideo, setProcessedVideo] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' or 'results'

  const handleVideoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create object URL for preview
      const videoUrl = URL.createObjectURL(file);
      setUploadedVideo({
        file,
        url: videoUrl,
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) // Convert to MB
      });
      
      // Simulate upload progress (remove this when implementing real API)
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 200);
    }
  };

  const handleProcess = () => {
    setIsProcessing(true);
    setProcessingProgress(0);
    
    // Simulate processing (remove this when implementing real API)
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setProcessingProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsProcessing(false);
        // Simulate processed video (in real implementation, this will come from your API)
        setProcessedVideo({
          url: uploadedVideo.url, // Replace with actual processed video URL from API
          detections: 47,
          vehicles: 23,
          objects: 24,
          processTime: '12.4s'
        });
        setActiveTab('results');
      }
    }, 300);
  };

  const handleReset = () => {
    if (uploadedVideo?.url) {
      URL.revokeObjectURL(uploadedVideo.url);
    }
    setUploadedVideo(null);
    setProcessedVideo(null);
    setIsProcessing(false);
    setUploadProgress(0);
    setProcessingProgress(0);
    setActiveTab('upload');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050E3C] via-[#002455] to-[#001a3d]">
      <Navbar />

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#DC0000] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-[#FF3838] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 top-40 right-20"></div>
        <div className="absolute w-96 h-96 bg-[#FF3838] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 bottom-20 left-1/2"></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Video Processing Studio
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Upload your video and let AI detect, track, and analyze objects in real-time
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Upload & Controls */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 sticky top-8">
              <h2 className="text-2xl font-bold text-white mb-6">Upload Video</h2>
              
              {!uploadedVideo ? (
                <label className="block cursor-pointer">
                  <div className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center hover:border-[#FF3838]/50 transition-all duration-300 hover:bg-white/5">
                    <svg className="w-16 h-16 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-white font-semibold mb-2">Click to upload video</p>
                    <p className="text-white/60 text-sm">or drag and drop</p>
                    <p className="text-white/40 text-xs mt-2">MP4, AVI, MOV up to 500MB</p>
                  </div>
                  <input 
                    type="file" 
                    accept="video/*" 
                    onChange={handleVideoUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="space-y-4">
                  {/* File Info */}
                  <div className="bg-[#001a3d]/50 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <svg className="w-10 h-10 text-[#FF3838] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">{uploadedVideo.name}</p>
                        <p className="text-white/60 text-sm">{uploadedVideo.size} MB</p>
                      </div>
                      <button 
                        onClick={handleReset}
                        className="text-white/60 hover:text-red-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    {uploadProgress < 100 && (
                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-white/60 mb-1">
                          <span>Uploading...</span>
                          <span>{uploadProgress}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-[#DC0000] to-[#FF3838] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Process Button */}
                  {uploadProgress === 100 && !isProcessing && !processedVideo && (
                    <button 
                      onClick={handleProcess}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#DC0000] to-[#FF3838] text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Start Processing
                    </button>
                  )}

                  {/* Processing Status */}
                  {isProcessing && (
                    <div className="bg-[#001a3d]/50 rounded-xl p-4 border border-[#FF3838]/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-[#FF3838] rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-[#FF3838] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-[#FF3838] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <span className="text-white font-medium">Processing video...</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[#DC0000] to-[#FF3838] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${processingProgress}%` }}
                        ></div>
                      </div>
                      <p className="text-white/60 text-sm mt-2">Analyzing frames and detecting objects...</p>
                    </div>
                  )}

                  {/* New Upload Button */}
                  {processedVideo && (
                    <button 
                      onClick={handleReset}
                      className="w-full py-3 rounded-xl bg-white/10 border-2 border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                    >
                      Process Another Video
                    </button>
                  )}
                </div>
              )}

              {/* Quick Stats */}
              {processedVideo && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-white font-semibold mb-4">Processing Summary</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#001a3d]/50 rounded-lg p-3 text-center border border-white/10">
                      <div className="text-2xl font-bold text-[#FF3838]">{processedVideo.detections}</div>
                      <div className="text-xs text-white/70">Total Detections</div>
                    </div>
                    <div className="bg-[#001a3d]/50 rounded-lg p-3 text-center border border-white/10">
                      <div className="text-2xl font-bold text-[#FF3838]">{processedVideo.vehicles}</div>
                      <div className="text-xs text-white/70">Vehicles</div>
                    </div>
                    <div className="bg-[#001a3d]/50 rounded-lg p-3 text-center border border-white/10">
                      <div className="text-2xl font-bold text-[#FF3838]">{processedVideo.objects}</div>
                      <div className="text-xs text-white/70">Objects</div>
                    </div>
                    <div className="bg-[#001a3d]/50 rounded-lg p-3 text-center border border-white/10">
                      <div className="text-2xl font-bold text-[#FF3838]">{processedVideo.processTime}</div>
                      <div className="text-xs text-white/70">Process Time</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Video Display */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                    activeTab === 'upload'
                      ? 'bg-gradient-to-r from-[#DC0000] to-[#FF3838] text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10'
                  }`}
                >
                  Original Video
                </button>
                <button
                  onClick={() => setActiveTab('results')}
                  disabled={!processedVideo}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                    activeTab === 'results' && processedVideo
                      ? 'bg-gradient-to-r from-[#DC0000] to-[#FF3838] text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed'
                  }`}
                >
                  Processed Results
                </button>
              </div>

              {/* Video Display Area */}
              <div className="bg-gradient-to-br from-[#001a3d] to-[#050E3C] rounded-xl min-h-[500px] flex items-center justify-center relative overflow-hidden">
                {!uploadedVideo ? (
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 text-white/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/60 text-lg">No video uploaded yet</p>
                    <p className="text-white/40 text-sm mt-2">Upload a video to get started</p>
                  </div>
                ) : activeTab === 'upload' ? (
                  <div className="w-full p-4">
                    <video 
                      src={uploadedVideo.url} 
                      controls 
                      className="w-full rounded-lg"
                      style={{ maxHeight: '500px' }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : processedVideo ? (
                  <div className="w-full p-4">
                    <video 
                      src={processedVideo.url} 
                      controls 
                      className="w-full rounded-lg"
                      style={{ maxHeight: '500px' }}
                    >
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Detection Overlay Info */}
                    <div className="mt-4 p-4 bg-[#001a3d]/50 rounded-lg border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-white font-medium">Processing Complete</span>
                      </div>
                      <p className="text-white/70 text-sm">
                        Video has been processed with bounding boxes and labels for all detected objects and vehicles.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 text-white/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-white/60 text-lg">No processed results yet</p>
                    <p className="text-white/40 text-sm mt-2">Process your video to see results here</p>
                  </div>
                )}
              </div>

              {/* Download Button */}
              {processedVideo && activeTab === 'results' && (
                <div className="mt-6 flex gap-4">
                  <button className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#DC0000] to-[#FF3838] text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Processed Video
                  </button>
                  <button className="py-3 px-6 rounded-xl bg-white/10 border-2 border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share
                  </button>
                </div>
              )}
            </div>

            {/* Detection Details (Optional) */}
            {processedVideo && activeTab === 'results' && (
              <div className="mt-6 backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Detection Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#001a3d]/50 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#FF3838]/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#FF3838]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">Cars</p>
                        <p className="text-white/60 text-sm">Detected throughout video</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-[#FF3838]">15</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#001a3d]/50 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#FF3838]/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#FF3838]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">People</p>
                        <p className="text-white/60 text-sm">Tracked across frames</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-[#FF3838]">8</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-[#001a3d]/50 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#FF3838]/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#FF3838]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">Other Objects</p>
                        <p className="text-white/60 text-sm">Various items identified</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-[#FF3838]">24</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}