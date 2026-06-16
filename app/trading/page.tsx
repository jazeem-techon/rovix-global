"use client";

import { motion } from "framer-motion";
import { Package, ShieldCheck, TrendingUp, Globe } from "lucide-react";

const tradingServices = [
  {
    category: "Procurement & Sourcing",
    icon: <Globe className="w-6 h-6 text-[#4fc0b7]" />,
    details: "Global network of premium suppliers for specialized infrastructure and safety materials.",
  },
  {
    category: "Logistics & Distribution",
    icon: <Package className="w-6 h-6 text-[#4fc0b7]" />,
    details: "Streamlined supply chain management ensuring timely delivery across the GCC.",
  },
  {
    category: "Quality Assurance",
    icon: <ShieldCheck className="w-6 h-6 text-[#4fc0b7]" />,
    details: "Rigorous vetting of all traded goods to meet international compliance standards.",
  },
  {
    category: "Market Expansion",
    icon: <TrendingUp className="w-6 h-6 text-[#4fc0b7]" />,
    details: "Strategic partnerships to introduce innovative products to the regional market.",
  },
];

export default function TradingPage() {
  return (
    <div className="bg-white min-h-screen text-[#1e3d73] font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mb-20"
        >
          <span className="text-[#4fc0b7] font-mono text-sm tracking-widest uppercase mb-4 block">
            General Trading
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Connecting quality with demand.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Our general trading division bridges the gap between global manufacturers and regional projects, ensuring seamless access to top-tier materials and equipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {tradingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex items-start gap-6"
            >
              <div className="flex-shrink-0 p-3 bg-slate-50 border border-slate-100 rounded-xl">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {service.category}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-24 p-8 lg:p-12 bg-slate-50 rounded-2xl border border-slate-200 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-4">Looking to partner with us?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            We are always looking to expand our network of suppliers and distributors. Reach out to discuss potential synergies.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#1e3d73] text-white hover:bg-[#152a51] transition-colors rounded-full px-8 py-3 font-medium text-sm"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
