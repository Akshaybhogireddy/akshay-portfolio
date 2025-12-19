import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <section className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto grid items-center gap-8 md:grid-cols-2">

          {/* Text */}
          <div className="text-center md:text-left">
            <p className={mounted ? "text-accent font-medium mb-4" : "opacity-0"}>
              Welcome to my portfolio
            </p>

            <h1 className={mounted ? "text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-5" : "opacity-0"}>
              Hi, I'm{" "}
              <span className="text-foreground">
                Bhogireddy Sai Venkat Akshay
              </span>
            </h1>

            <p className={mounted ? "text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed" : "opacity-0"}>
              A B.Tech student with a strong interest in technology and problem-solving.
              Currently building practical skills through academic projects and hands-on learning.
              Motivated to grow, adapt, and contribute effectively in IT roles.
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-12 ${
                mounted ? "" : "opacity-0"
              }`}
            >
              <Button
  variant="hero"
  size="lg"
  asChild
  className="transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
>
  <a href="#projects">View My Projects</a>
</Button>

<Button
  variant="hero"
  size="lg"
  asChild
  className="transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
>
  <a href="#contact">Get In Touch</a>
</Button>
            </div>

            {/* Social links */}
            <div className="flex items-center md:justify-start justify-center gap-4">
              <a
  href="https://github.com/Akshaybhogireddy"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-full bg-card text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:bg-muted hover:shadow-md"
>
  <Github size={20} />
</a>


              <a
  href="https://linkedin.com/in/akshay-bhogireddy-9a7a0b304/"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-full bg-card text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:bg-muted hover:shadow-md"
>
  <Linkedin size={20} />
</a>


              <a
  href="mailto:akshaybhogireddy123@gmail.com"
  className="p-3 rounded-full bg-card text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:bg-muted hover:shadow-md"
>
  <Mail size={20} />
</a>

            </div>
          </div>

          {/* Photo (NO effects) */}
          <div className="flex items-center justify-center md:justify-end">
  <img
    src="/img.jpg"
    alt="Bhogireddy Sai Venkat Akshay"
    className={mounted
      ? "w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg border-4 border-border transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl"
      : "opacity-0"
    }
  />
</div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a href="#about" className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
