import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML5", level: 85, color: "from-primary to-rose" },
  { name: "CSS3", level: 75, color: "from-lavender to-primary" },
  { name: "JavaScript", level: 65, color: "from-gold to-primary" },
  { name: "React", level: 60, color: "from-primary to-lavender" },
  { name: "Digital Engineering", level: 80, color: "from-rose to-lavender" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 sm:py-28 px-4" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-primary mb-2">What I know</p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-gradient">My Skills</h2>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
