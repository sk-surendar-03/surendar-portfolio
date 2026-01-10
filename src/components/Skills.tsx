const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 / SASS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Responsive Design", level: 90 },
      { name: "API Integration", level: 80 },
      { name: "DOM Manipulation", level: 85 },
      { name: "Figma (Basics)", level: 65 },
    ],
  },
];

const softSkills = [
  "Problem Solving",
  "Quick Learning",
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Adaptability",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 bg-secondary/30"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-down">
            <p className="text-accent font-medium mb-2">
              What I Do Best
            </p>
            <h2 className="font-display font-bold text-foreground mb-4
              text-3xl sm:text-4xl md:text-5xl">
              Skills & Expertise
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent-gradient mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid gap-10 lg:grid-cols-2">
            {skills.map((skillGroup, groupIndex) => (
              <div
                key={skillGroup.category}
                data-aos={groupIndex === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={groupIndex * 200}
              >
                <h3 className="font-display font-semibold text-foreground mb-6
                  text-xl sm:text-2xl">
                  {skillGroup.category}
                </h3>

                <div className="space-y-5 sm:space-y-6">
                  {skillGroup.items.map((skill, index) => (
                    <div
                      key={skill.name}
                      data-aos="fade-up"
                      data-aos-delay={groupIndex * 200 + index * 100}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-foreground
                          text-sm sm:text-base">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground
                          text-xs sm:text-sm">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 sm:h-3 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent-gradient rounded-full
                            transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div
            className="mt-12 sm:mt-16 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="font-display font-semibold text-foreground mb-6 sm:mb-8
              text-xl sm:text-2xl">
              Soft Skills
            </h3>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {softSkills.map((skill, index) => (
                <span
                  key={skill}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="px-4 sm:px-6 py-2 sm:py-3
                    bg-card shadow-card rounded-full
                    text-foreground font-medium
                    text-sm sm:text-base
                    hover:shadow-accent hover:-translate-y-1
                    transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
