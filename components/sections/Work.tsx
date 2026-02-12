export default function Work() {
  const projects = [
    {
      title: "Cisco",
      description: "A modern e-commerce platform with seamless checkout experience and elegant design.",
      tags: ["Next.js", "React", "Stripe"],
      year: "2024",
    },
    {
      title: "Yoga Bhoga",
      description: "An interactive portfolio showcase featuring smooth transitions and clean layouts.",
      tags: ["React", "TypeScript", "CSS"],
      year: "2024",
    },
    {
      title: "Voicebox",
      description: "A productivity app with real-time collaboration and intuitive UI design.",
      tags: ["TypeScript", "Firebase", "Tailwind"],
      year: "2023",
    },
    {
      title: "Vacatia",
      description: "A social media dashboard with data visualization and responsive design.",
      tags: ["Next.js", "Chart.js", "API"],
      year: "2023",
    },
  ];

  return (
    <section id="work" className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">
            Selected Work
          </span>
          <div className="w-12 h-px bg-gray-300 mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border-b border-gray-200 pb-16 last:border-0"
            >
              {/* Project Image Placeholder */}
              <div className="h-80 bg-gray-100 mb-8 overflow-hidden">
                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-sm text-gray-500 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-4 flex items-start justify-end">
                  <div className="text-right">
                    <span className="text-sm text-gray-400 font-medium">{project.year}</span>
                    <button className="mt-4 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-2 ml-auto">
                      View Project
                      <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
