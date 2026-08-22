import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import contactImage from "../../assets/images/contact/contact-hero.webp";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Please enter your full name";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Please enter your email";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    newErrors.email = "Please enter a valid email address";
  }

  const phoneDigits = formData.phone.replace(/\D/g, "");
  const normalizedPhone =
    phoneDigits.startsWith("91") && phoneDigits.length === 12
      ? phoneDigits.slice(2)
      : phoneDigits;

  if (!formData.phone.trim()) {
    newErrors.phone = "Please enter your phone number";
  } else if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
    newErrors.phone = "Please enter a valid 10-digit phone number";
  }

  if (!formData.requirement) {
    newErrors.requirement = "Please select a project type";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Please tell us about your requirement";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:8000";

      const response = await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Something went wrong. Please try again."
        );
      }

      setStatus({
        type: "success",
        message:
          "Thank you! Our design team will contact you shortly.",
      });

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        requirement: "",
        message: "",
      });
    } catch (error) {
      console.error("Lead submission error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to submit your request. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
  id="consultation"
      className="bg-[#FAFAFA] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-16 lg:grid-cols-2">

          {/* ========================= */}
          {/* LEFT - CONTACT FORM */}
          {/* ========================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm lg:p-10"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
              Contact Us
            </span>

            <h2 className="mt-4 text-4xl font-light leading-tight text-black">
              Book a Free
              <br />
              Consultation
            </h2>

            <p className="mt-6 text-base leading-8 text-neutral-600">
              Tell us about your dream home and our designers will
              connect with you to create a personalized interior
              solution.
            </p>

            {/* ========================= */}
            {/* FORM */}
            {/* ========================= */}

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              {/* Name */}

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Full Name
                </label>

                <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your full name"
  required
  className="h-14 w-full rounded-2xl border border-neutral-200 px-5 text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-300 focus:border-[#C8A96A]"
/>
                {errors.name && (
                   <p className="mt-2 text-sm text-red-500">
                      {errors.name}
                      </p>
                      )}
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Email Address
                </label>

               <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter your email"
  required
  className="h-14 w-full rounded-2xl border border-neutral-200 px-5 text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-300 focus:border-[#C8A96A]"
/>
                {errors.email && (
  <p className="mt-2 text-sm text-red-500">
    {errors.email}
  </p>
)}
              </div>

              {/* Phone */}

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Phone Number
                </label>

               <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="+91 XXXXX XXXXX"
  required
  className="h-14 w-full rounded-2xl border border-neutral-200 px-5 text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-300 focus:border-[#C8A96A]"
/>
                {errors.phone && (
  <p className="mt-2 text-sm text-red-500">
    {errors.phone}
  </p>
)}
              </div>

              {/* Project Type */}

              <div className="relative">
  <select
    name="requirement"
    value={formData.requirement}
    onChange={handleChange}
    required
    className="h-14 w-full appearance-none rounded-2xl border border-neutral-200 bg-white px-5 pr-14 text-neutral-700 outline-none transition-all duration-300 focus:border-[#C8A96A]"
  >
    <option value="">Select Project</option>
    <option value="Modular Kitchen">Modular Kitchen</option>
    <option value="Wardrobe">Wardrobe</option>
    <option value="TV Unit">TV Unit</option>
    <option value="Pooja Unit">Pooja Unit</option>
    <option value="Complete Home Interior">
      Complete Home Interior
    </option>
  </select>

  <ChevronDown
    size={18}
    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400"
  />
</div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Message
                </label>

               <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows="5"
  placeholder="Tell us about your requirements..."
  required
  className="w-full rounded-2xl border border-neutral-200 p-5 text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-300 focus:border-[#C8A96A]"
/>
                {errors.message && (
  <p className="mt-2 text-sm text-red-500">
    {errors.message}
  </p>
)}
              </div>

              {/* Success / Error Message */}

              {status.message && (
                <div
                  className={`rounded-2xl px-5 py-4 text-sm ${
                    status.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Button */}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#C8A96A] px-8 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#D7B77A] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading
                  ? "Submitting..."
                  : "Schedule Consultation"}
              </button>
            </form>
          </motion.div>

          {/* ========================= */}
          {/* RIGHT CONTENT */}
          {/* ========================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
              Get In Touch
            </span>

            <h2 className="mt-4 text-4xl font-light leading-tight text-black lg:text-5xl">
              Connect With
              <br />
              Our Design Team
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600">
              Whether you're planning a luxury modular kitchen,
              wardrobe, TV unit, or a complete home interior,
              our experienced designers are here to guide you
              through every step of your journey.
            </p>

            {/* Image */}

            <div className="mt-10 overflow-hidden rounded-[28px]">
              <img
                src={contactImage}
                alt="Luxury Interior"
                className="h-[320px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Contact Cards */}

            <div className="mt-10 space-y-5">

              {/* Phone */}

              <div className="flex items-start gap-5 rounded-[24px] border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:border-[#C8A96A]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A96A]/10">
                  <Phone
                    size={22}
                    className="text-[#C8A96A]"
                  />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Call Us
                  </p>

                  <h4 className="mt-2 text-lg font-medium text-black">
                    +91 83007 66241
                  </h4>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-start gap-5 rounded-[24px] border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:border-[#C8A96A]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A96A]/10">
                  <Mail
                    size={22}
                    className="text-[#C8A96A]"
                  />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                    Email
                  </p>

                  <h4 className="mt-2 text-lg font-medium text-black">
                    niebo.interiors@gmail.com
                  </h4>
                </div>
              </div>

              {/* Address */}

              {/* Address */}

<div className="flex items-start gap-5 rounded-[24px] border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:border-[#C8A96A]">
  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#C8A96A]/10">
    <MapPin
      size={22}
      className="text-[#C8A96A]"
    />
  </div>

  <div className="flex-1">
    <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
      Experience Centre
    </p>

    <h4 className="mt-3 text-xl font-medium leading-7 text-black">
      Nanjaiuthukuli, Erode,
      <br />
      Tamil Nadu
    </h4>
  </div>
</div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}