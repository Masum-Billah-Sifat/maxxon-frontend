import Image from "next/image";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="mt-8 w-full bg-[#082D7E] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 md:grid-cols-4">
          <div>
            {/* <Image
              src="/maxxon/logo.png"
              alt="Maxxon"
              width={150}
              height={44}
              className="h-9 w-auto"
            /> */}
            MAXXON

            <div className="mt-6 space-y-4 text-sm text-white/90">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-white/80" />
                <span>01764050429</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-white/80" />
                <span>
                  House-22, Road-2, Sector-9,
                  <br />
                  Uttara-1230, Dhaka
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-white/80" />
                <span>maxxonbangladesh@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold">Quick Links</p>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li>
                <a href="#about" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#feeds" className="hover:text-white">
                  Feeds
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-white">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Explore Maxxon</p>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms &amp; Condition
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Refund &amp; Return Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Discover us</p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 hover:bg-white/10"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 hover:bg-white/10"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 hover:bg-white/10"
              >
                <Youtube size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 hover:bg-white/10"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 py-6 text-sm text-white/85">
          © 2026 Maxxon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}