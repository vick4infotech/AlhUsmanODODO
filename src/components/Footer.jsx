import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const socials = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "X", icon: Twitter, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" }
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-black/5 bg-kogi-green text-white"
    >
      <div className="absolute inset-0 bg-premium-radial opacity-70" />
      <div className="relative">
        <div className="container-pad py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-2xl ring-2 ring-kogi-gold/35">
                  <img
                    src="/images/ododo-portrait.jpg"
                    alt="Governor portrait"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold">
                    Ahmed Usman Ododo
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white/80">
                    Executive Governor of Kogi State, Nigeria
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/85">
                This official portfolio highlights leadership experience, public
                service record, governance priorities, and an accountable vision
                for inclusive development across Kogi State.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/15 transition hover:bg-white/15"
                    >
                      <Icon size={16} />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="text-sm font-bold text-white">Site</div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/85">
                <Link className="hover:text-white" to="/profile">
                  Profile and Biography
                </Link>
                <Link className="hover:text-white" to="/achievements">
                  Governance and Achievements
                </Link>
                <Link className="hover:text-white" to="/awards">
                  Awards and Recognition
                </Link>
                <Link className="hover:text-white" to="/vision">
                  Vision and Future Agenda
                </Link>
                <Link className="hover:text-white" to="/media">
                  Media and Gallery
                </Link>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="text-sm font-bold text-white">
                Media Contact
              </div>
              <div className="mt-4 space-y-3 text-sm text-white/85">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-kogi-gold" />
                  <div>
                    Office of the Governor, Government House, Lokoja, Kogi State
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 text-kogi-gold" />
                  <div>Telephone: 09063251104</div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 text-kogi-gold" />
                  <div>Email: victor.hicroft@outlook.com</div>
                </div>
                <div className="mt-5 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                  <div className="text-xs font-bold uppercase tracking-wide text-white/70">
                    Media inquiries
                  </div>
                  <div className="mt-2 text-sm text-white/85">
                    Please provide your full name, organization, subject, and
                    preferred contact channel.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-12 hr-fade opacity-30" />

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} Office of the Governor, Kogi State.
              All rights reserved.
            </div>
            <div className="text-xs text-white/60">
           </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
