const expertise = [
  "Product Strategy",
  "Technology Leadership",
  "Organizational Scaling",
  "Team Building",
  "Executive Leadership",
  "Innovation",
  "Board Advisory",
  "Entrepreneurship",
];

const highlights = [
  {
    label: "Pioneer Award",
    detail: "Cisco, 2003 — premier recognition of engineering innovation",
  },
  {
    label: "2 Issued Patents",
    detail: "Network communications & anticipatory processing systems",
  },
  {
    label: "Board Experience",
    detail: "Doublesharp, Inc. · Entrepreneurs' Organization",
  },
  {
    label: "20+ Years",
    detail: "Scaling technology organizations from startup to enterprise",
  },
];

export default function About() {
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

        {/* Bio */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
            Technology & Product Executive
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              I&apos;m a technology and product executive with 20+ years of experience scaling
              organizations — navigating the creative chaos of rapid growth while building
              and empowering high-performing teams.
            </p>
            <p>
              My background spans engineering, product, and executive leadership across
              companies from early-stage startups to enterprise. I bring a rare combination
              of deep technical expertise and strategic vision, with a track record of
              driving innovation and building durable, high-impact organizations.
            </p>
            <p>
              Based in Portland, Oregon.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-gray-900 mb-8">Highlights</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="px-6 py-6 bg-white border border-gray-200 rounded-md hover:border-gray-400 transition-colors duration-200"
              >
                <p className="text-gray-900 font-medium mb-1">{item.label}</p>
                <p className="text-gray-500 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div>
          <h3 className="text-2xl font-light text-gray-900 mb-8">Areas of Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-white border border-gray-200 rounded-md text-center hover:border-gray-900 transition-colors duration-200"
              >
                <p className="text-gray-900 font-medium text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
