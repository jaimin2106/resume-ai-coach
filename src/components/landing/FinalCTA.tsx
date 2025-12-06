import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const FinalCTA = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto">
          {/* Headline */}
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Build your job-ready resume in{" "}
              <span className="gradient-text">under 10 minutes</span>
            </h2>
          </ScrollReveal>

          {/* Subheading */}
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-muted-foreground mb-10">
              No signup required. Start free and export your first resume today.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" size="xl" className="group">
                Start Building Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Github className="w-5 h-5" />
                View on GitHub
              </Button>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.3}>
            <StaggerContainer className="flex flex-wrap justify-center gap-8 pt-8 border-t border-border/50" staggerDelay={0.1}>
              <StaggerItem>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Users</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">1,000+</div>
                  <div className="text-sm text-muted-foreground">Resumes Created</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">4.9/5</div>
                  <div className="text-sm text-muted-foreground">User Rating</div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
