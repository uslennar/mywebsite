import { ReactNode } from "react";

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

const highlights: { label: string; detail: string; icon: ReactNode }[] = [
  {
    label: "Pioneer Award",
    detail: "Cisco, 2003 — premier recognition of engineering innovation",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
      </svg>
    ),
  },
  {
    label: "2 Issued Patents",
    detail: "Network communications & anticipatory processing systems",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    label: "Board Experience",
    detail: "Doublesharp, Inc.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    label: "20+ Years",
    detail: "Scaling technology organizations from startup to enterprise",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
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
                <div className="text-gray-400 mb-4">{item.icon}</div>
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
