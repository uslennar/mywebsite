export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-2xl">
          Hi, I'm <span className="bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
            Scott Lennartz
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-white font-bold mb-4 drop-shadow-lg">
          Creative Developer & Designer
        </p>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          I build bold, beautiful, and unforgettable digital experiences
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#work"
            className="px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl hover:shadow-purple-500/50"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-4 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-2xl"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
