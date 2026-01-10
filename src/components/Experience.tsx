import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "United Soft Tech",
    role: "Web Developer Intern",
    duration: "AUG 2025 - PRESENT",
    location: "Salem, Tamil Nadu",
    description: [
      <>Successfully completed <strong>4+ real-time web projects</strong> using ASP.NET Web Application architecture</>,
      <>
        Developed and deployed a live production website:{" "}
        <a
          href="https://unitedsofttech.co.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-medium underline underline-offset-4 hover:text-accent/80 transition-colors"
        >
          https://unitedsofttech.co.in/
        </a>
      </>,
      <>Built responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript</>,
      <>Worked with SQL Server for database design, queries, and backend data handling</>,
      <>Used Visual Studio for development, debugging, and deployment of ASP.NET applications</>,
      <>Collaborated with the team to improve UI/UX, performance, and application reliability</>,
    ],
  },
  {
    company: "SkillChemy",
    role: "Frontend Developer Intern",
    duration: "JUNE 2025 - JULY 2025",
    location: "Salem, Tamil Nadu",
    description: [
      <>Completed a <strong>Frontend Development Internship Certificate</strong> from SkillChemy</>,
      <>Built interactive web components using React and Tailwind CSS</>,
      <>Worked closely with designers to translate Figma designs into functional code</>,
      <>Participated in code reviews and implemented feedback to improve code quality</>,
      <>Gained hands-on experience with Git workflows and version control best practices</>,
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 bg-background"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-down">
            <p className="text-accent font-medium mb-2">
              My Journey
            </p>
            <h2 className="font-display font-bold text-foreground mb-4
              text-3xl sm:text-4xl md:text-5xl">
              Professional Experience
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent-gradient mx-auto rounded-full" />
            <p className="mt-4 sm:mt-6 text-muted-foreground max-w-2xl mx-auto
              text-sm sm:text-base">
              Real-world experience building production-ready applications and
              earning recognized certifications through hands-on learning.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border sm:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-10 sm:mb-14 ${
                  index % 2 === 0
                    ? "sm:pr-1/2"
                    : "sm:pl-1/2 sm:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 w-3.5 h-3.5
                  bg-accent rounded-full sm:-translate-x-1/2 -translate-y-1
                  ring-4 ring-background" />

                {/* Card */}
                <div
                  className={`ml-10 sm:ml-0 ${
                    index % 2 === 0 ? "sm:mr-12" : "sm:ml-12"
                  } bg-card-gradient p-4 sm:p-6 md:p-8 rounded-2xl
                  shadow-card hover:shadow-accent transition-all duration-300`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12
                      bg-accent/10 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground
                        text-base sm:text-xl">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium text-sm sm:text-base">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 mb-4
                    text-xs sm:text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2
                          text-muted-foreground text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
