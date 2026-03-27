"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Mail, Send, CheckCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import GridPattern from "@/components/ui/GridPattern";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-ice relative overflow-hidden">
      <GridPattern className="absolute top-0 right-0 w-1/2 h-full text-steel pointer-events-none opacity-30" />

      <div className="max-w-site mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Info */}
          <FadeIn direction="right">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-sky mb-4">Get In Touch</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-6">
                Let&apos;s Build Something Together
              </h1>
              <p className="text-text-secondary leading-relaxed mb-10">
                Whether you need an AI-powered system, a scalable enterprise platform, or a complete digital transformation. We&apos;re ready to make it happen.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-steel-light text-steel flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Headquarters</p>
                    <p className="text-sm text-text-secondary">Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-steel-light text-steel flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Email</p>
                    <p className="text-sm text-text-secondary">hello@haorgrix.com</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right - Form */}
          <FadeIn direction="left">
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 border border-steel-light text-center shadow-sm">
                <CheckCircle className="w-16 h-16 text-steel mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-text-primary mb-3">Message Sent!</h3>
                <p className="text-text-secondary">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-8 border border-steel-light shadow-sm space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1.5 uppercase tracking-wider">Name *</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 rounded-xl border border-steel-light bg-ice text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1.5 uppercase tracking-wider">Email *</label>
                  <input
                    {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                    className="w-full px-4 py-3 rounded-xl border border-steel-light bg-ice text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent"
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1.5 uppercase tracking-wider">Company</label>
                  <input
                    {...register("company")}
                    className="w-full px-4 py-3 rounded-xl border border-steel-light bg-ice text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1.5 uppercase tracking-wider">Service Interest</label>
                  <select
                    {...register("service")}
                    className="w-full px-4 py-3 rounded-xl border border-steel-light bg-ice text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-data">AI & Data Systems</option>
                    <option value="software">Software & Platform Engineering</option>
                    <option value="design-growth">Digital Experience & Growth</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1.5 uppercase tracking-wider">Message *</label>
                  <textarea
                    {...register("message", { required: "Message is required", minLength: { value: 20, message: "At least 20 characters" } })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-steel-light bg-ice text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-steel text-white py-3.5 rounded-xl font-bold text-sm hover:bg-steel-dark transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
