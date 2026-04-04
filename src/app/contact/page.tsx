"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Mail, Send, CheckCircle, Smartphone } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import AmbientCanvas from "@/components/ui/AmbientCanvas";

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
    <div className="pt-40 pb-32 bg-art-midnight min-h-screen relative overflow-hidden">
      {/* Physics-Based Ambient Flow Field */}
      <AmbientCanvas />
      {/* Surrealist background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-art-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-art-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left - Info */}
          <FadeIn direction="right">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 mb-12 shadow-[0_0_30px_rgba(74,148,186,0.1)]">
                <div className="w-2.5 h-2.5 rounded-full bg-art-accent animate-[pulse_2s_ease-in-out_infinite]" />
                <span className="text-[12px] text-white font-sans uppercase tracking-[0.4em] font-medium">Get In Touch</span>
              </div>
              
              <h1 className="text-[48px] md:text-[72px] font-medium text-white leading-[1.1] tracking-tight mb-8 font-sans">
                Let&apos;s Build Something <span className="inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-art-accent via-white to-art-primary animate-gradient-x pr-6 pb-1">Exceptional.</span>
              </h1>
              
              <p className="text-[18px] text-white/40 leading-relaxed mb-16 font-light tracking-wide">
                Whether you need machine intelligence, a scalable enterprise platform, or a complete digital transformation. We&apos;re ready to architect your future.
              </p>

              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-art-accent flex items-center justify-center transition-all duration-700 shadow-2xl group-hover:scale-110 group-hover:bg-art-accent group-hover:text-art-midnight group-hover:shadow-art-accent/40 group-hover:-rotate-12">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/30 mb-1">HQ — Dhaka</p>
                    <p className="text-[18px] text-white/80 font-light group-hover:text-white transition-colors duration-500">Bangladesh, South Asia</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-art-accent flex items-center justify-center transition-all duration-700 shadow-2xl group-hover:scale-110 group-hover:bg-art-primary group-hover:text-white group-hover:shadow-art-primary/40 group-hover:rotate-12">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/30 mb-1">Official Enquiry</p>
                    <p className="text-[18px] text-white/80 font-light group-hover:text-white transition-colors duration-500">hello@haorgrix.com</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right - Form */}
          <FadeIn direction="left">
            {submitted ? (
              <div className="relative bg-[#141622]/60 backdrop-blur-3xl rounded-[3rem] p-16 border border-white/10 text-center shadow-2xl shadow-black/50 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-art-primary via-art-accent to-art-primary animate-gradient-x" />
                <div className="w-24 h-24 rounded-full bg-art-accent/10 flex items-center justify-center mx-auto mb-10 ring-1 ring-art-accent/20">
                  <CheckCircle className="w-12 h-12 text-art-accent" />
                </div>
                <h3 className="text-[32px] font-medium text-white mb-4">Transmission Received</h3>
                <p className="text-[16px] text-white/40 font-light leading-relaxed">Our architects will reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="group relative bg-[#141622]/40 backdrop-blur-3xl rounded-[3rem] p-10 sm:p-14 border border-white/5 hover:border-white/20 transition-all duration-700 shadow-2xl shadow-black/50 space-y-10 overflow-hidden">
                {/* Interactive Top Accent Stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-art-primary via-art-accent to-art-primary opacity-40 group-hover:opacity-100 group-hover:animate-gradient-x transition-all duration-700" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 ml-2">Full Name *</label>
                    <input
                      {...register("name", { required: "Required" })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white text-[15px] focus:outline-none focus:ring-1 focus:ring-art-accent/40 focus:border-art-accent/40 transition-all font-light placeholder-white/10"
                      placeholder="J. Doe"
                    />
                    {errors.name && <p className="text-art-accent text-[10px] mt-1 ml-2 uppercase font-mono">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 ml-2">Work Email *</label>
                    <input
                      {...register("email", { required: "Required", pattern: /^\S+@\S+$/i })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white text-[15px] focus:outline-none focus:ring-1 focus:ring-art-accent/40 focus:border-art-accent/40 transition-all font-light placeholder-white/10"
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="text-art-accent text-[10px] mt-1 ml-2 uppercase font-mono">Invalid Email</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 ml-2">Company</label>
                    <input
                      {...register("company")}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white text-[15px] focus:outline-none focus:ring-1 focus:ring-art-accent/40 focus:border-art-accent/40 transition-all font-light placeholder-white/10"
                      placeholder="Enter company"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 ml-2">Interest</label>
                    <select
                      {...register("service")}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white text-[15px] focus:outline-none focus:ring-1 focus:ring-art-accent/40 focus:border-art-accent/40 transition-all font-light appearance-none"
                    >
                      <option value="" className="bg-art-midnight">Select Service</option>
                      <option value="ai-data" className="bg-art-midnight">AI & Data Systems</option>
                      <option value="software" className="bg-art-midnight">Platform Engineering</option>
                      <option value="design-growth" className="bg-art-midnight">Product Design</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 ml-2">Project Brief *</label>
                  <textarea
                    {...register("message", { required: true, minLength: 20 })}
                    rows={4}
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/5 text-white text-[15px] focus:outline-none focus:ring-1 focus:ring-art-accent/40 focus:border-art-accent/40 transition-all font-light placeholder-white/10 resize-none"
                    placeholder="Tell us about the project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-white text-art-midnight py-5 rounded-full font-bold text-[14px] uppercase tracking-[0.3em] hover:bg-art-accent transition-all duration-700 flex items-center justify-center gap-3 shadow-2xl shadow-white/5"
                >
                  <Send className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  Initiate Project
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
