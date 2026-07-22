import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-charcoal py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body text-xs uppercase tracking-[0.35em] text-gold">
            Book a Consultation
          </span>
          <h2 className="mt-6 font-display text-4xl font-light leading-tight text-ivory sm:text-5xl">
            Begin with a conversation.
          </h2>
          <p className="mt-6 max-w-md font-body text-base font-light leading-relaxed text-stone">
            Share a few details about your residence and our design director
            will respond within two business days.
          </p>

          <div className="mt-12 space-y-4 font-body text-sm text-stone">
            <p>Warsaw · London · Dubai</p>
            <p className="text-ivory">studio@niebointeriors.com</p>
            <p>+48 22 555 0142</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {submitted ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center border border-gold-dim/30 px-8 text-center">
              <span className="font-display text-3xl italic text-gold">
                Thank you.
              </span>
              <p className="mt-4 font-body text-sm font-light text-stone">
                We have received your message and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="font-body text-xs uppercase tracking-[0.2em] text-stone"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-3 w-full border-b border-ivory/20 bg-transparent py-2 font-body text-ivory outline-none transition-colors duration-300 placeholder:text-stone/50 focus:border-gold"
                  placeholder="Alexandra Novak"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="font-body text-xs uppercase tracking-[0.2em] text-stone"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-3 w-full border-b border-ivory/20 bg-transparent py-2 font-body text-ivory outline-none transition-colors duration-300 placeholder:text-stone/50 focus:border-gold"
                  placeholder="alexandra@residence.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-body text-xs uppercase tracking-[0.2em] text-stone"
                >
                  Tell us about your residence
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-3 w-full resize-none border-b border-ivory/20 bg-transparent py-2 font-body text-ivory outline-none transition-colors duration-300 placeholder:text-stone/50 focus:border-gold"
                  placeholder="Location, scope, and timeline"
                />
              </div>

              <button
                type="submit"
                className="border border-gold bg-gold px-8 py-3.5 font-body text-sm uppercase tracking-[0.2em] text-obsidian transition-all duration-300 hover:bg-transparent hover:text-gold"
              >
                Send Enquiry
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
