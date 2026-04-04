import Link from "next/link";
import Image from "next/image";
import { Globe, ExternalLink, LinkIcon, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-art-midnight text-white border-t border-white/5">
      <div className="max-w-site mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/images/logo-svg.svg"
                alt="HaorGrix"
                width={200}
                height={60}
                className="h-12 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(74,148,186,0.2)]"
              />
            </Link>
            <p className="text-white/30 text-[14px] leading-relaxed font-light tracking-wide">
              Architecting intelligent systems and world-class digital products from the heart of Dhaka.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.4em] text-art-accent mb-8">Navigation</h4>
            <div className="space-y-4">
              {["Home", "Portfolio", "Clients", "Team", "Contact"].map((item) => (
                <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="block text-[15px] text-white/40 hover:text-white transition-all duration-500 font-light">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.4em] text-art-accent mb-8">Expertise</h4>
            <div className="space-y-4 text-[15px] text-white/40 font-light">
              {["AI & Data Systems", "Platform Engineering", "Design & Growth"].map((item) => (
                <span key={item} className="block">{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.4em] text-art-accent mb-8">Contact</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[15px] text-white/40 font-light">
                <MapPin className="w-4 h-4 text-art-accent/60" />
                Dhaka, Bangladesh
              </div>
              <div className="flex items-center gap-4 text-[15px] text-white/40 font-light">
                <Mail className="w-4 h-4 text-art-accent/60" />
                hello@haorgrix.com
              </div>
            </div>
            <div className="flex gap-4 mt-10">
              {[Globe, ExternalLink, LinkIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-art-accent/10 hover:border-art-accent/20 transition-all duration-500 group">
                  <Icon className="w-4 h-4 text-white/30 group-hover:text-art-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-mono text-white/20 uppercase tracking-[0.2em]">&copy; {new Date().getFullYear()} Haorgrix. Built for the future.</p>
          <div className="flex gap-10 text-[11px] font-mono uppercase tracking-[0.2em] text-white/20">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
