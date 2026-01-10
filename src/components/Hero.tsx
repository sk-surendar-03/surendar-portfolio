import Particles from "@/components/ui/Particles";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient"
      data-aos="fade-in"
    >
      {/* 🔵 Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={isMobile ? 80 : 180}
          particleSpread={10}
          speed={0.08}
          particleBaseSize={isMobile ? 60 : 90}
          moveParticlesOnHover={!isMobile}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* 🟣 Soft Background Glow */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-52 sm:w-72 h-52 sm:h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-accent/50 rounded-full blur-3xl" />
      </div>

      {/* 🟢 Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Greeting */}
          <p className="text-accent font-medium mb-3 sm:mb-4">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="font-display font-bold text-primary-foreground mb-4
            text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
            Surendar S
          </h1>

          {/* Tagline */}
          <p className="font-light text-primary-foreground/80 mb-3
            text-base sm:text-xl md:text-2xl">
            Junior Web Developer
          </p>

          {/* One-liner */}
          <p className="text-accent font-medium mb-6
            text-sm sm:text-lg md:text-xl">
            "Crafting clean code & beautiful interfaces, one pixel at a time."
          </p>

          {/* Description */}
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed
            text-sm sm:text-base md:text-lg">
            MSc Computer Science student passionate about building responsive,
            user-friendly web applications that make a real difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
            <Button variant="hero" className="w-full sm:w-auto" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>

            <Button variant="heroOutline" className="w-full sm:w-auto" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-5 sm:gap-6">
            <a
              href="https://github.com/sk-surendar-03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/surendar-surendar-9a1937265"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:iamsurendar.dev@gmail.com"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator (hidden on small mobile) */}
        <div className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#about"
            className="text-primary-foreground/40 hover:text-accent transition-colors"
          >
            <ArrowDown size={26} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
