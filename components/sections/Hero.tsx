import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

      {/* Main content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-900 tracking-tight">
            Scott Lennartz
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-light mb-4">
            Technology & Product Executive
          </p>

          <p className="text-base md:text-lg text-gray-500 mb-12 leading-relaxed">
            20+ years of experience scaling organizations — from early-stage startups to enterprise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#about"
              className="px-8 py-3 bg-gray-900 text-white font-medium text-sm rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-300 text-gray-900 font-medium text-sm rounded-md hover:border-gray-900 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Headshot image */}
        <div className="flex justify-center md:justify-end order-first md:order-last">
          <Image
            src="/Lennartz-Headshot.jpeg"
            alt="Scott Lennartz"
            width={450}
            height={450}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs tracking-wider">SCROLL</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
