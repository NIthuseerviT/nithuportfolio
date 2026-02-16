import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { useEffect, useState } from "react";
import SparkleParticles from "./SparkleParticles";


const roles = ["Web Developer", "Frontend Enthusiast", "Cloud Computing Student", "Creative Thinker"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.slice(0, text.length + 1));
        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentRole.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-40" />
      <SparkleParticles count={25} />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-10">
        {/* Left text */}
        <div className="text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium tracking-widest uppercase text-primary mb-4"
          >
            Welcome to my portfolio ✨
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-2"
          >
            Hi, I'm{" "}
            <span className="text-gradient italic">Nithu Seervi T</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg sm:text-xl text-muted-foreground mb-6 h-8"
          >
            <span>{text}</span>
            <span className="animate-pulse text-primary">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground max-w-md mb-8 leading-relaxed"
          >
            Growth in technology ✨ — BCA Cloud Computing student passionate about building beautiful web experiences and exploring the cloud.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#certificates"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              Contact Me <Send className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
