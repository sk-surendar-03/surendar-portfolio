import { Mail, Linkedin, Github, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-background"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-down">
            <p className="text-accent font-medium mb-2">Let's Connect</p>
            <h2 className="font-display font-bold text-foreground mb-4
              text-3xl sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent-gradient mx-auto rounded-full" />
            <p className="mt-4 sm:mt-6 text-muted-foreground max-w-2xl mx-auto
              text-sm sm:text-base">
              I'm open to entry-level Frontend Developer or Software Developer roles.
              Feel free to reach out — I’d love to connect!
            </p>
          </div>

          {/* Content */}
          <div className="grid gap-10 md:grid-cols-2">

            {/* Contact Links */}
            <div data-aos="fade-right">
              <h3 className="font-display font-semibold text-foreground mb-6
                text-xl sm:text-2xl">
                Reach Out Directly
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:iamsurendar.dev@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card-gradient
                    rounded-xl shadow-card hover:shadow-accent transition-all group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10
                    rounded-xl flex items-center justify-center
                    group-hover:bg-accent-gradient">
                    <Mail className="w-5 h-5 text-accent
                      group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground text-sm sm:text-base">
                      iamsurendar.dev@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/surendar-surendar-9a1937265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card-gradient
                    rounded-xl shadow-card hover:shadow-accent transition-all group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10
                    rounded-xl flex items-center justify-center
                    group-hover:bg-accent-gradient">
                    <Linkedin className="w-5 h-5 text-accent
                      group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium text-foreground text-sm sm:text-base">
                      Connect with me
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/sk-surendar-03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card-gradient
                    rounded-xl shadow-card hover:shadow-accent transition-all group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10
                    rounded-xl flex items-center justify-center
                    group-hover:bg-accent-gradient">
                    <Github className="w-5 h-5 text-accent
                      group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium text-foreground text-sm sm:text-base">
                      View my code
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-left">
              <h3 className="font-display font-semibold text-foreground mb-6
                text-xl sm:text-2xl">
                Send Me a Message
              </h3>

              {success && (
                <p className="text-green-500 text-sm mb-3">
                  ✅ Message sent successfully!
                </p>
              )}

              <form
                onSubmit={handleSubmit}
                className="bg-card-gradient rounded-xl shadow-card
                  p-4 sm:p-6 space-y-4"
              >
                <div>
                  <label className="text-xs sm:text-sm text-muted-foreground">
                    Name
                  </label>
                  <div className="flex items-center gap-2 mt-1">
                    <User size={18} className="text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-secondary rounded-lg px-3 py-2
                        text-foreground outline-none focus:ring-2 focus:ring-accent text-sm"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs sm:text-sm text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-secondary rounded-lg px-3 py-2
                      text-foreground outline-none focus:ring-2 focus:ring-accent text-sm mt-1"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-secondary rounded-lg px-3 py-2
                      text-foreground outline-none focus:ring-2 focus:ring-accent text-sm mt-1 resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Sending..." : <>
                    <Send size={18} /> Send Message
                  </>}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
