import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Star } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { icon: GraduationCap, title: "Student", desc: "Passionate about learning new technologies" },
    { icon: Code, title: "Developer", desc: "Front-end web development enthusiast" },
    { icon: Star, title: "Certified", desc: "Multiple industry certifications earned" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 bg-gradient-section" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-primary mb-2">Get to know me</p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-gradient">About Me</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-14 text-base sm:text-lg leading-relaxed"
        >
          Hi! I'm <span className="text-primary font-semibold">Nithu Seervi T</span>, a dedicated student with a passion
          for technology and web development. I love building things for the web and constantly learning new skills
          to grow as a developer. 🌸
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="glass-card rounded-2xl p-8 text-center sparkle-shadow hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
