import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "@/data/portfolio";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }

    setLoading(true);

    const { name, email, message } = form;
    const phone = "917737694558";
    const text = `
Hi, I'm ${name}

Email: ${email}

Message:
${message}
    `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    toast.success("Redirecting to WhatsApp...");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setLoading(false);
  };

  const contacts = [
    {
      Icon: Mail,
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
    },
    {
      Icon: Phone,
      label: "Phone",
      value: PROFILE.phone,
      href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/harshjain",
      href: PROFILE.linkedin,
    },
    {
      Icon: Github,
      label: "GitHub",
      value: "github.com/harshjain",
      href: PROFILE.github,
    },
  ];

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-14"
      >
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">Let's build something together</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind, a role to fill, or just want to say hi? I'd
          love to hear from you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="glass rounded-3xl p-8 space-y-5"
        >
          <h3 className="text-2xl font-semibold mb-2">Get in touch</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {PROFILE.location}
          </p>
          <div className="space-y-3 mt-4">
            {contacts.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-brand-3/60 transition-colors group"
              >
                <span className="w-11 h-11 rounded-xl bg-brand-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                    {label}
                  </div>
                  <div className="text-sm font-medium truncate">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="glass rounded-3xl p-8 space-y-5"
        >
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Your name
            </label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 w-full px-4 py-3 rounded-2xl bg-white/70 border border-brand-5/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="enter your name"
              maxLength={100}
            />
          </div>
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 w-full px-4 py-3 rounded-2xl bg-white/70 border border-brand-5/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="xyz@example.com"
              maxLength={255}
            />
          </div>
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full px-4 py-3 rounded-2xl bg-white/70 border border-brand-5/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all min-h-[140px] resize-none"
              placeholder="Tell me about your project..."
              maxLength={1000}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-60"
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send message <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
