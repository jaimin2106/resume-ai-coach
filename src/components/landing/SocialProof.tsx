import { Star, Quote } from "lucide-react";

const templates = [
  {
    title: "Modern Developer",
    description: "Clean, ATS-friendly layout perfect for software engineers and developers.",
    style: "gradient-to-br from-primary/10 to-accent/10",
  },
  {
    title: "Creative Designer",
    description: "Balanced layout showcasing both skills and portfolio highlights.",
    style: "gradient-to-br from-accent/10 to-primary/10",
  },
  {
    title: "Career Switcher",
    description: "Skills-focused layout ideal for highlighting transferable experience.",
    style: "gradient-to-br from-primary/10 via-accent/5 to-primary/10",
  },
];

const testimonials = [
  {
    quote: "Finally, a resume builder that actually understands what recruiters want. The AI suggestions were spot-on.",
    name: "Priya S.",
    role: "Computer Science Student",
    avatar: "PS",
  },
  {
    quote: "I landed 3 interviews in my first week after using Resume Coach. The ATS optimization really works.",
    name: "Marcus L.",
    role: "Career Switcher",
    avatar: "ML",
  },
  {
    quote: "As a bootcamp grad, I struggled with my resume. This tool helped me present my projects professionally.",
    name: "Sarah K.",
    role: "Junior Developer",
    avatar: "SK",
  },
];

const SocialProof = () => {
  return (
    <section id="templates" className="section-spacing bg-surface-sunken">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See what others built with{" "}
            <span className="gradient-text">Resume Coach</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional templates designed for modern job seekers.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {templates.map((template, index) => (
            <div
              key={template.title}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-elevated-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Preview Area */}
              <div className={`h-48 bg-${template.style} relative overflow-hidden`}>
                <div className="absolute inset-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-bg" />
                      <div className="space-y-1">
                        <div className="h-3 w-24 bg-foreground/20 rounded" />
                        <div className="h-2 w-16 bg-muted-foreground/20 rounded" />
                      </div>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="space-y-1.5">
                      <div className="h-2 w-full bg-muted-foreground/10 rounded" />
                      <div className="h-2 w-4/5 bg-muted-foreground/10 rounded" />
                      <div className="h-2 w-3/5 bg-muted-foreground/10 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {template.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {template.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium text-accent">Trusted by 500+ users</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-sm font-semibold text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
