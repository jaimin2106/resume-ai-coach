import { UserPlus, Wand2, Download } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create or continue as guest",
    description: "Seamless onboarding in seconds — no sign-up barrier to get started.",
  },
  {
    number: "02",
    icon: Wand2,
    title: "Add experience, let AI refine it",
    description: "Get instant feedback and bullet point recommendations powered by AI.",
  },
  {
    number: "03",
    icon: Download,
    title: "Choose template and export",
    description: "Download as PDF or share as a link. Your resume, ready for applications.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-spacing">
      <div className="container-tight">
        {/* Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Create your professional resume in{" "}
            <span className="gradient-text">3 easy steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From blank page to polished resume in under 10 minutes.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20" />

          <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12" staggerDelay={0.15}>
            {steps.map((step, index) => (
              <StaggerItem key={step.number}>
                <div className="relative text-center group">
                  {/* Step Number Badge */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-card border border-border shadow-elevated flex items-center justify-center group-hover:shadow-glow transition-shadow relative z-10">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-xs font-bold text-primary-foreground shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>

                  {/* Mobile Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-6">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-primary/40 to-accent/40 rounded-full" />
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
