import { CheckCircle, Heart, Rocket, Target } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Real-World Experience",
    description:
      "I've worked on production-ready websites at United Soft Tech and SkillChemy, contributing to actual company projects that serve real users.",
  },
  {
    icon: Rocket,
    title: "Growth Mindset",
    description:
      "I'm passionate about continuous learning. Every project is an opportunity to grow, and I actively seek feedback to improve my craft.",
  },
  {
    icon: Heart,
    title: "Passion for Frontend",
    description:
      "Frontend development isn't just my job—it's what I love doing. I genuinely enjoy creating beautiful, functional interfaces that make users happy.",
  },
  {
    icon: CheckCircle,
    title: "Reliable & Adaptable",
    description:
      "I meet deadlines, communicate proactively, and adapt quickly to new technologies and team workflows. You can count on me.",
  },
];

const WhyHireMe = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-hero-gradient text-primary-foreground"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-down">
            <p className="text-accent font-medium mb-2">
              The Value I Bring
            </p>
            <h2 className="font-display font-bold mb-4
              text-3xl sm:text-4xl md:text-5xl">
              Why Hire Me?
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent-gradient mx-auto rounded-full" />
            <p className="mt-4 sm:mt-6 text-primary-foreground/70 max-w-2xl mx-auto
              text-sm sm:text-base">
              I may be at the beginning of my professional journey, but I bring
              real experience, genuine passion, and an unwavering commitment to growth.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="flex gap-4 p-4 sm:p-6 rounded-2xl
                  bg-white/5 border border-white/10
                  hover:bg-white/10 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14
                    bg-accent-gradient rounded-xl
                    flex items-center justify-center flex-shrink-0"
                >
                  <reason.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent-foreground" />
                </div>

                <div>
                  <h3 className="font-display font-semibold mb-2
                    text-base sm:text-xl">
                    {reason.title}
                  </h3>
                  <p className="text-primary-foreground/70 leading-relaxed
                    text-sm sm:text-base">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div
            className="mt-12 sm:mt-16 text-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <blockquote className="font-display italic
              text-lg sm:text-2xl md:text-3xl
              text-primary-foreground/90 max-w-3xl mx-auto">
              "I don't just write code—I craft experiences. Every line of code
              I write is with the end user in mind."
            </blockquote>
            <p className="mt-3 sm:mt-4 text-accent font-medium">
              — Surendar S
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
