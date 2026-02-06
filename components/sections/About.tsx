export default function About() {
  const skills = [
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
    { name: "Node.js", color: "from-green-500 to-emerald-600" },
    { name: "UI/UX Design", color: "from-pink-500 to-rose-500" },
    { name: "JavaScript", color: "from-yellow-400 to-orange-500" },
    { name: "Git", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-purple-200">
              <h3 className="text-3xl font-bold text-purple-600 mb-4">
                Hello! 👋
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm a passionate developer and designer who loves creating digital experiences
                that are not just functional, but memorable and exciting.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With a keen eye for bold design and a deep understanding of modern web technologies,
                I bring ideas to life with vibrant colors and smooth interactions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends,
                experimenting with creative projects, or seeking inspiration in the world around me.
              </p>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-3xl shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-yellow-300 via-red-300 to-pink-300 rounded-3xl shadow-2xl flex items-center justify-center text-white text-6xl font-black">
                YOU
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-gray-800 mb-8">
            Skills & Technologies
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <div className={`bg-gradient-to-br ${skill.color} p-6 text-center`}>
                <p className="text-white font-bold text-lg">{skill.name}</p>
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
