import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent! 💌", description: "Thank you for reaching out!" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4" ref={ref}>
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-2">
            Get In <span className="text-gradient italic">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground flex items-center justify-center gap-2 mb-10">
            <MessageCircle className="w-4 h-4 text-primary" />
            Have a question or want to connect? Drop me a message!
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="glass-card rounded-2xl p-8 sm:p-10 sparkle-shadow space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name ✨"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            maxLength={100}
            className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
          />
          <input
            type="email"
            placeholder="Your Email 📧"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={255}
            className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
          />
          <textarea
            placeholder="Your Message 💬"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000}
            rows={5}
            className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm resize-none"
          />
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
