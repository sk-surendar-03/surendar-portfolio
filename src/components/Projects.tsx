import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A fully responsive personal portfolio showcasing my skills, projects, and professional journey. Built with modern design principles and smooth animations for an engaging user experience.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design for all devices",
      "Smooth scroll animations",
      "Clean, modern UI/UX",
    ],
    github: "https://github.com/sk-surendar-03",
    live: "#",
    featured: true,
  },
  {
    title: "Newsletter Sign-Up Page",
    description:
      "An interactive newsletter subscription page with real-time form validation, success states, and accessibility features. Focused on conversion-optimized design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Real-time email validation",
      "Success/error state handling",
      "Mobile-first responsive design",
    ],
    github: "https://github.com/sk-surendar-03",
    live: "https://sk-surendar-03.github.io/newsletter-subscription/",
    featured: true,
  },
  {
    title: "Advice Generator App",
    description:
      "A fun application that fetches random advice from an external API. Demonstrates API integration skills and handling asynchronous JavaScript operations.",
    technologies: ["JavaScript", "REST API", "CSS"],
    features: [
      "API integration with Advice Slip API",
      "Dynamic content loading",
      "Smooth UI transitions",
    ],
    github: "https://github.com/sk-surendar-03",
    live: "https://sk-surendar-03.github.io/Advice-generator-app/",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 bg-secondary/30"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-down">
            <p className="text-accent font-medium mb-2">
              My Work
            </p>
            <h2 className="font-display font-bold text-foreground mb-4
              text-3xl sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent-gradient mx-auto rounded-full" />
            <p className="mt-4 sm:mt-6 text-muted-foreground max-w-2xl mx-auto
              text-sm sm:text-base">
              Here are some projects I've built to solve real problems and
              improve user experiences. Each one taught me something new.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 sm:gap-8
            sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="group bg-card-gradient rounded-2xl overflow-hidden
                  shadow-card hover:shadow-accent transition-all duration-500
                  hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                {/* Card Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12
                      bg-accent/10 rounded-xl flex items-center justify-center
                      group-hover:bg-accent-gradient transition-colors">
                      <Folder className="w-5 h-5 sm:w-6 sm:h-6
                        text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-foreground mb-2
                    text-lg sm:text-xl group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2
                          text-xs sm:text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary
                          text-secondary-foreground text-xs
                          font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-10 sm:mt-12" data-aos="zoom-in">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/sk-surendar-03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" size={18} />
                View More on GitHub
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
