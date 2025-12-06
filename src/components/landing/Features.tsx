import { Eye, Sparkles, ShieldCheck, Cloud } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const features = [
  {
    icon: Eye,
    title: "Live Preview & Templates",
    description: "Watch your resume update in real time. Switch between professional layouts instantly.",
  },
  {
    icon: Sparkles,
    title: "AI Bullet Suggestions",
    description: "Generate strong, result-focused bullet points based on your job title and skills.",
  },
  {
    icon: ShieldCheck,
    title: "ATS-Friendly Validation",
    description: "Get warned if your layout breaks readability or ATS parsing rules.",
  },
  {
    icon: Cloud,
    title: "Cloud Version History",
    description: "Every revision autosaves securely. Roll back to any previous version anytime.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-spacing bg-surface-sunken">
      <div className="container-tight">
        {/* Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built smarter, for{" "}
            <span className="gradient-text">real-world results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to create a resume that gets interviews.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group relative h-full bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 shadow-md group-hover:shadow-glow transition-shadow">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover gradient border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Features;
