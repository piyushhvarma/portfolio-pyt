import Link from "next/link";
import { DATA } from "@/data/resume";
import { ContactForm } from "@/components/contact-form";
import { Calendar, Mail, ArrowUpRight, Clock, CheckCircle2 } from "lucide-react";
import { Icons } from "@/components/icons";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Left Column: Contact Methods */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-balance">
              Choose your preferred method to connect and let&apos;s discuss your project.
            </p>
          </div>

          <div className="flex flex-col border border-border/50 rounded-2xl overflow-hidden bg-card/50">
            {/* Schedule a call */}
            <Link 
              href="#" 
              className="flex items-center justify-between p-4 sm:p-5 hover:bg-muted/50 transition-colors border-b border-border/50 group"
            >
              <div className="flex items-center gap-4">
                <Calendar className="size-5 text-muted-foreground" />
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-foreground">Schedule a free call</span>
                  <span className="text-sm text-muted-foreground">30-minute strategy session</span>
                </div>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Email */}
            <Link 
              href={`mailto:${DATA.contact.email}`} 
              className="flex items-center justify-between p-4 sm:p-5 hover:bg-muted/50 transition-colors border-b border-border/50 group"
            >
              <div className="flex items-center gap-4">
                <Mail className="size-5 text-muted-foreground" />
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-foreground">{DATA.contact.email}</span>
                  <span className="text-sm text-muted-foreground">Quick inquiries & questions</span>
                </div>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* X / Twitter */}
            <Link 
              href={DATA.contact.social.X.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 sm:p-5 hover:bg-muted/50 transition-colors border-b border-border/50 group"
            >
              <div className="flex items-center gap-4">
                <Icons.x className="size-5 text-muted-foreground" />
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-foreground">Connect on X</span>
                  <span className="text-sm text-muted-foreground">Follow for updates & insights</span>
                </div>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Status Indicators */}
            <div className="flex flex-col gap-3 p-4 sm:p-5 pt-6 bg-card">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="size-4" />
                <span>Replies within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4" />
                <span>Open to remote, freelance & full-time</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
              Send a Message
            </h2>
            <p className="text-muted-foreground text-balance">
              Prefer to write? Fill out the form and I&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
