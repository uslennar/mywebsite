export default function Work() {
  const projects = [
    {
      title: "Project One",
      description: "A bold e-commerce platform with stunning animations and seamless checkout experience.",
      tags: ["Next.js", "React", "Stripe"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Project Two",
      description: "An interactive portfolio showcase featuring smooth transitions and creative layouts.",
      tags: ["React", "Framer Motion", "CSS"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Project Three",
      description: "A productivity app with real-time collaboration and beautiful UI design.",
      tags: ["TypeScript", "Firebase", "Tailwind"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Project Four",
      description: "A social media dashboard with data visualization and responsive design.",
      tags: ["Next.js", "Chart.js", "API"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Project Five",
      description: "A creative agency website with parallax scrolling and eye-catching animations.",
      tags: ["React", "GSAP", "Tailwind"],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Project Six",
      description: "A mobile-first fitness tracking app with gamification elements.",
      tags: ["React Native", "Node.js", "MongoDB"],
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="work" className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-white">
            My <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A collection of projects that showcase my passion for bold design and clean code
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-yellow-300 to-pink-300 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 hover:scale-105 border border-white/20"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-black opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/20 text-white text-sm rounded-full border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
