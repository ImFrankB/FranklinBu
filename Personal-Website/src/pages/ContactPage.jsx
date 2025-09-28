import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // 👈 Import axios
import PageTransition from "../components/PageTransition";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to handle submission status
  const [status, setStatus] = useState("");

  // 👇 Replace your old handleSubmit function with this one
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Replace with your actual SheetDB API endpoint
      const response = await axios.post(
        "https://sheetdb.io/api/v1/0pnozhsete2s9",
        {
          data: {
            ...formData,  
            timestamp: new Date().toLocaleString(), // Optional: Add a timestamp
          },
        }
      );

      console.log("Success:", response);
      setStatus("Message sent successfully!");
      // Clear the form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error!", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/john-franklin-bugauisan-86aa16309/",
    },
    { name: "GitHub", url: "https://github.com/ImFrankB" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 px-8 md:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-sm text-gray-500 tracking-[0.3em] uppercase">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-light mt-4">
              Let's Create <br />
              <span className="font-medium">Together</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="text-sm text-gray-600 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name" // Good practice to add name attribute
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows="5"
                    className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors resize-none"
                    required
                  />
                </div>
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-8 py-3 bg-black text-white text-sm tracking-wider hover:bg-gray-900 transition-colors"
                    data-cursor="pointer"
                  >
                    SEND MESSAGE
                  </motion.button>
                  {/* 👇 Display submission status message */}
                  {status && <p className="text-sm text-gray-600">{status}</p>}
                </div>
              </form>
            </motion.div>

            {/* Contact Info (rest of your component is the same) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-12"
            >
              {/* ... your contact info JSX ... */}
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
