import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 bg-hero-gradient text-primary-foreground"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Logo */}
          <a
            href="#"
            className="inline-block font-display text-3xl font-bold mb-6 hover:text-accent transition-colors"
            data-aos="zoom-in"
          >
            Surendar<span className="text-accent">.</span>
          </a>

          {/* Tagline */}
          <p
            className="text-primary-foreground/70 mb-8 max-w-md mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            "Crafting clean code & beautiful interfaces, one pixel at a time."
          </p>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-6 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="https://github.com/sk-surendar-03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/surendar-surendar-9a1937265"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:iamsurendar.dev@gmail.com"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px bg-white/10 mb-8"
            data-aos="fade-in"
            data-aos-delay="600"
          />

          {/* Copyright */}
          <p
            className="text-sm text-primary-foreground/50 flex items-center justify-center gap-1"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            © {currentYear} Surendar S. Built with
            using React & Tailwind CSS
          </p>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
