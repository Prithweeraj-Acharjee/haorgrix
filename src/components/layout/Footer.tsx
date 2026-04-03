import Link from "next/link";
import Image from "next/image";
import { Globe, ExternalLink, LinkIcon, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-site mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Image src="/images/logo-dark.png" alt="HaorGrix" width={140} height={44} className="h-10 w-auto mb-4" />
            <p className="text-white/50 text-sm leading-relaxed">
              Build. Automate. Optimize. Scale.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky mb-4">Quick Links</h4>
            <div className="space-y-3">
              {["Home", "Portfolio", "Clients", "Team", "Contact"].map((item) => (
                <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="block text-sm text-white/60 hover:text-sky transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky mb-4">Services</h4>
            <div className="space-y-3">
              {["AI & Data Systems", "Software Engineering", "Design & Growth"].map((item) => (
                <span key={item} className="block text-sm text-white/60">{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-sky" />
                Dhaka, Bangladesh
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="w-4 h-4 text-sky" />
                hello@haorgrix.com
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {[Globe, ExternalLink, LinkIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-sky/20 transition-colors">
                  <Icon className="w-4 h-4 text-sky" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} HaorGrix. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="#" className="hover:text-sky transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-sky transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
