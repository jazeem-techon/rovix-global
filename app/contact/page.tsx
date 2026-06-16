"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-[#1e3d73] font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <span className="text-[#4fc0b7] font-mono text-sm tracking-widest uppercase mb-4 block">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Let's build something <br className="hidden md:block" />
            great together.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Whether you have a question about our solutions, need a quote for an upcoming project, or want to partner with us, our team is ready to assist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-[#4fc0b7]" />
                <h3 className="font-semibold text-lg">Headquarters</h3>
              </div>
              <p className="text-slate-600 pl-8">
                Rovix Global LLC<br />
                Business Bay, PO Box 12345<br />
                Dubai, United Arab Emirates
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-[#4fc0b7]" />
                <h3 className="font-semibold text-lg">Email Us</h3>
              </div>
              <p className="text-slate-600 pl-8">
                <a href="mailto:info@rovixglobal.com" className="hover:text-[#4fc0b7] transition-colors">
                  info@rovixglobal.com
                </a>
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-[#4fc0b7]" />
                <h3 className="font-semibold text-lg">Call Us</h3>
              </div>
              <p className="text-slate-600 pl-8">
                <a href="tel:+97141234567" className="hover:text-[#4fc0b7] transition-colors">
                  +971 4 123 4567
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-3 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#4fc0b7]/50 focus:border-[#4fc0b7] transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#4fc0b7]/50 focus:border-[#4fc0b7] transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#4fc0b7]/50 focus:border-[#4fc0b7] transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#4fc0b7]/50 focus:border-[#4fc0b7] transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full md:w-auto md:self-start bg-[#1e3d73] text-white hover:bg-[#152a51] transition-colors rounded-full px-8 py-3.5 font-medium shadow-sm hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
