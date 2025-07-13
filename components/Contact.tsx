"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


type Props = {};

export default function Contact({}: Props) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  form.current,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Message sent successfully!',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: '#1f2937',
          color: '#fff'
        });
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Failed to send. Try again.',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: '#1f2937',
          color: '#fff'
        });
        }
      );
  };

  return (
    <section id="contact" className="relative min-h-screen w-full overflow-hidden pt-32 md:pt-0 flex flex-col items-center justify-center">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full md:bg-[radial-gradient(circle_at_center,rgba(247,171,10,0.1)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl space-y-6 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="uppercase tracking-[15px] text-gray-400 text-xl md:text-2xl font-light">
            Get in touch
          </h2>
          <p className=" text-sm leading-8 text-gray-500">
            I'd love to hear about your project. Let's build something amazing together.
          </p>
        </motion.div>

        {/* Grid */}
        <div className=" grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4 rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm border border-gray-700 hover:border-[#F7AB0A]/50 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F7AB0A]/10">
                <PhoneIcon className="h-6 w-6 text-[#F7AB0A]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Phone</h3>
                <p className="mt-1 text-sm text-gray-300">+977 9865191908</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm border border-gray-700 hover:border-[#F7AB0A]/50 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F7AB0A]/10">
                <MapPinIcon className="h-6 w-6 text-[#F7AB0A]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Location</h3>
                <p className="mt-1 text-sm text-gray-300">Dillibazar, Kathmandu</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm border border-gray-700 hover:border-[#F7AB0A]/50 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F7AB0A]/10">
                <EnvelopeIcon className="h-6 w-6 text-[#F7AB0A]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Email</h3>
                <p className="mt-1 text-sm text-gray-300">aayush879mishra@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 pb-12 md:pb-0"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="block w-full rounded-md border border-gray-700 bg-gray-800 py-3 px-4 text-white placeholder-gray-400 shadow-sm focus:border-[#F7AB0A] focus:ring-[#F7AB0A]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full rounded-md border border-gray-700 bg-gray-800 py-3 px-4 text-white placeholder-gray-400 shadow-sm focus:border-[#F7AB0A] focus:ring-[#F7AB0A]"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="block w-full rounded-md border border-gray-700 bg-gray-800 py-3 px-4 text-white placeholder-gray-400 shadow-sm focus:border-[#F7AB0A] focus:ring-[#F7AB0A]"
                placeholder="+977 9800000000"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full rounded-md border border-gray-700 bg-gray-800 py-3 px-4 text-white placeholder-gray-400 shadow-sm focus:border-[#F7AB0A] focus:ring-[#F7AB0A]"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-md bg-[#F7AB0A] py-3 px-6 text-base font-medium text-black shadow-lg hover:bg-[#F7AB0A]/90 focus:outline-none focus:ring-2 focus:ring-[#F7AB0A] focus:ring-offset-2 focus:ring-offset-gray-900 transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
