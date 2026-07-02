import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_t2cde2m",
        "template_1bnw01n",
        form.current,
        "Kog36SmhGZ5or1gKK"
      )
      .then(() => {
        setLoading(false);
        setStatus("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
  console.log("Status:", error.status);
  console.log("Text:", error.text);
  console.log(error);

  setLoading(false);
  setStatus(error.text || "Failed to send message.");
});
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white">
            Contact Me
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-300 mt-4 mb-16">
            Let's connect! Feel free to reach out for internships,
            collaborations or exciting opportunities.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-10"
          >

            <div className="space-y-8">

              <div className="flex gap-5">

                <div className="bg-blue-600 p-4 rounded-full text-white">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-bold dark:text-white">
                    Email
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    vaishusudhakar5@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="bg-blue-600 p-4 rounded-full text-white">
                  <FaPhone />
                </div>

                <div>

                  <h3 className="font-bold dark:text-white">
                    Phone
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    +91 8778313490
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="bg-blue-600 p-4 rounded-full text-white">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h3 className="font-bold dark:text-white">
                    Location
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    Madurai, Tamil Nadu
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            whileHover={{ scale: 1.01 }}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-10 space-y-6"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full border rounded-xl p-4 bg-white dark:bg-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full border rounded-xl p-4 bg-white dark:bg-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="w-full border rounded-xl p-4 bg-white dark:bg-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center font-semibold mt-4 dark:text-white">
                {status}
              </p>
            )}

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;