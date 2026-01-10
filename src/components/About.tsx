import { Code, Lightbulb, Users, Zap } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiPostman,
} from "react-icons/si";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that follows best practices",
  },
  {
    icon: Lightbulb,
    title: "Quick Learner",
    description: "Rapidly adapting to new technologies and frameworks",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively with designers and developers",
  },
  {
    icon: Zap,
    title: "Problem Solver",
    description: "Finding elegant solutions to complex challenges",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-background"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-down">
            <p className="text-accent font-medium mb-2">
              Get To Know Me
            </p>
            <h2 className="font-display font-bold text-foreground mb-4
              text-3xl sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent-gradient mx-auto rounded-full" />
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">

            {/* LEFT COLUMN */}
            <div className="space-y-5 sm:space-y-6" data-aos="fade-right">
              <p className="text-muted-foreground leading-relaxed
                text-sm sm:text-base md:text-lg">
                Hey there! I'm{" "}
                <span className="text-foreground font-semibold">
                  Surendar S
                </span>,
                an MSc Computer Science student and Web Developer Intern with a genuine passion
                for frontend development. I love turning ideas into reality through clean,
                responsive, and user-friendly interfaces.
              </p>

              <p className="text-muted-foreground leading-relaxed
                text-sm sm:text-base">
                My journey in web development started with curiosity and has evolved into a
                fulfilling career path. With hands-on experience in{" "}
                <span className="text-accent font-medium">
                  HTML, CSS, SASS, JavaScript, React, and Tailwind CSS
                </span>,
                I've had the privilege of working on production-ready websites and contributing
                to real-world projects.
              </p>

              <p className="text-muted-foreground leading-relaxed
                text-sm sm:text-base">
                What drives me is the satisfaction of solving problems and creating experiences
                that users love. I believe in continuous learning, clean code principles, and
                the power of collaboration.
              </p>

              {/* Skills */}
              <div className="pt-3">
                <p className="text-foreground font-medium mb-3">
                  Here's what I bring to the table:
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    { name: "React", icon: SiReact, color: "text-cyan-400" },
                    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
                    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
                    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
                    { name: "Git", icon: SiGit, color: "text-orange-500" },
                    { name: "API Integration", icon: SiPostman, color: "text-orange-400" },
                  ].map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                        className="flex items-center gap-2
                          px-3 sm:px-4 py-1.5 sm:py-2
                          bg-secondary text-secondary-foreground
                          rounded-full text-xs sm:text-sm font-medium"
                      >
                        <Icon className={`text-base ${skill.color}`} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Highlight Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="bg-card-gradient p-4 sm:p-6 rounded-xl
                    shadow-card hover:shadow-accent
                    transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12
                    bg-accent/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4
                    group-hover:bg-accent-gradient transition-colors">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6
                      text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>

                  <h3 className="font-display font-semibold text-foreground mb-1 sm:mb-2
                    text-sm sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
