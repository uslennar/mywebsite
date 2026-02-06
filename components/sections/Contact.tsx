"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: "GitHub", icon: "💻", color: "from-gray-700 to-gray-900", url: "#" },
    { name: "LinkedIn", icon: "💼", color: "from-blue-600 to-blue-800", url: "#" },
    { name: "Twitter", icon: "🐦", color: "from-cyan-400 to-blue-500", url: "#" },
    { name: "Email", icon: "📧", color: "from-red-500 to-pink-500", url: "mailto:your@email.com" },
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Let&apos;s Connect!
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message!
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-purple-200">
            <h3 className="text-3xl font-bold text-purple-600 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/50"
              >
                Send Message 🚀
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-pink-200">
              <h3 className="text-3xl font-bold text-pink-600 mb-6">Find Me Online</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-br ${social.color} p-6 rounded-2xl text-white text-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-2xl`}
                  >
                    <div className="text-4xl mb-2">{social.icon}</div>
                    <div className="font-bold">{social.name}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 p-8 rounded-3xl shadow-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">Let&apos;s Create Something Amazing!</h3>
              <p className="text-lg mb-4">
                I&apos;m always excited to work on new projects and collaborate with creative minds.
              </p>
              <p className="text-lg font-bold">
                Response time: Usually within 24 hours ⚡
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
