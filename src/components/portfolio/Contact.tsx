import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              I am actively seeking entry-level opportunities. Please feel free to reach out if you would like to connect or discuss potential opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:akshaybhogireddy123@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">akshaybhogireddy123@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+91 9912326005"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Phone className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+91 99123 26005</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Avanigadda, AndhraPradesh, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Connect with me:</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/akshay-bhogireddy-9a7a0b304/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-xl shadow-card hover:shadow-lg hover:bg-accent hover:text-accent-foreground transition-all text-muted-foreground"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/akshaybhogireddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-xl shadow-card hover:shadow-lg hover:bg-accent hover:text-accent-foreground transition-all text-muted-foreground"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Send a Quick Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full" size="lg">
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                I respect your privacy. Your information will not be shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
