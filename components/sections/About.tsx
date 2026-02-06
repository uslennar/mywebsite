export default function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "UI/UX Design",
    "JavaScript",
    "Git",
  ];

  return (
    <section id="about" className="min-h-screen bg-gray-50 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">
            About
          </span>
          <div className="w-12 h-px bg-gray-300 mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Bio */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
              Hello
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                I&apos;m a passionate developer and designer who loves creating digital experiences
                that are not just functional, but memorable and impactful.
              </p>
              <p>
                With a keen eye for design and a deep understanding of modern web technologies,
                I bring ideas to life with clean code and elegant interfaces.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new design trends,
                experimenting with creative projects, or seeking inspiration in the world around me.
              </p>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-80 bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-light text-gray-900 mb-8">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-white border border-gray-200 rounded-md text-center hover:border-gray-900 transition-colors duration-200"
              >
                <p className="text-gray-900 font-medium text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
