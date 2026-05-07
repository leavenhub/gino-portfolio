/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Music2, Facebook, Twitter, Youtube, Instagram, Code2 } from "lucide-react";

export default function App() {
  const socialLinks = [
    { icon: <Music2 size={16} />, href: "https://tiktok.com/@criscaole" },
    { icon: <Facebook size={16} />, href: "https://facebook.com/geneu.caole" },
    { icon: <Twitter size={16} />, href: "https://twitter.com/@criscaole" },
    { icon: <Youtube size={16} />, href: "https://youtube.com/@criscaole" },
    { icon: <Instagram size={16} />, href: "https://instagram.com/criscaole" },
  ];

  return (
    <main className="relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col flex-grow">
        {/* Upper CTA Section */}
        <section className="flex-grow flex flex-col items-center justify-center text-center py-32">
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            href="https://linktr.ee/criscaole"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-[#981b1b] bg-white/5 backdrop-blur-md text-white font-bold font-mono text-[16px] rounded-full uppercase tracking-widest hover:bg-white/10 transition-all mb-8 hover:scale-105 active:scale-95 inline-block"
          >
            Projects Made
          </motion.a>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-4 mb-12"
          >
            <h1 className="text-5xl md:text-8xl font-medium text-white tracking-tighter">
              Witness the <br /> <span className="italic opacity-80">Infinite.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto font-light leading-relaxed">
              Innovating until we cant no more , but we always can because we are innovating
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            href="mailto:cristian.caole16@gmail.com"
            className="px-8 py-4 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors cursor-pointer inline-block"
          >
            Contact Me
          </motion.a>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="liquid-glass w-full rounded-3xl p-6 md:p-10 text-white/70 mt-32 md:mt-64 mb-10"
        >
          {/* Central Branding Section */}
          <div className="flex flex-col items-center text-center space-y-6 mb-12">
            <div className="flex items-center space-x-3 text-white">
              <Code2 size={24} />
              <span className="text-xl font-medium tracking-tight uppercase">Cristian</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Web developer always trying to find ways to innovate
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-50">made by criscaole</p>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-[10px] uppercase tracking-widest opacity-50">Join the Journey:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-colors hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
