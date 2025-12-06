import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/10 via-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Resume Builder</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-up text-balance">
              Turn your projects into a{" "}
              <span className="gradient-text">job-ready resume</span>{" "}
              in minutes.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up-delay-1 text-balance">
              An AI-guided resume coach that helps you build, review, and score resumes in real time. 
              Designed for students, developers, and career switchers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up-delay-2">
              <Button variant="hero" size="xl" className="group">
                Start for free
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                View demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start text-sm text-muted-foreground animate-fade-up-delay-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>No signup required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>ATS-friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Export as PDF</span>
              </div>
            </div>
          </div>

          {/* Right: Product Mockup */}
          <div className="relative animate-fade-up-delay-2">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-60 animate-pulse-soft" />
              
              {/* Main Mockup Container */}
              <div className="relative glass-card rounded-2xl p-1 shadow-elevated-lg">
                <div className="bg-card rounded-xl overflow-hidden">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground text-center">
                        resumecoach.app/editor
                      </div>
                    </div>
                  </div>

                  {/* Split View Mockup */}
                  <div className="grid md:grid-cols-2 divide-x divide-border/50">
                    {/* Left: Form */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-3">
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Experience</div>
                        <div className="space-y-2">
                          <div className="h-9 rounded-lg bg-muted/50 border border-border/50 px-3 flex items-center">
                            <span className="text-sm text-foreground">Frontend Developer</span>
                          </div>
                          <div className="h-9 rounded-lg bg-muted/50 border border-border/50 px-3 flex items-center">
                            <span className="text-sm text-foreground">TechCorp Inc.</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">AI Suggestions</div>
                        <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                          <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-primary mt-0.5" />
                            <p className="text-xs text-foreground leading-relaxed">
                              "Led development of React dashboard, improving load time by 40%..."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Preview */}
                    <div className="p-6 bg-surface-sunken">
                      <div className="space-y-4">
                        <div>
                          <div className="text-lg font-bold text-foreground">Alex Chen</div>
                          <div className="text-xs text-muted-foreground">Frontend Developer · San Francisco, CA</div>
                        </div>
                        <div className="h-px bg-border" />
                        <div className="space-y-2">
                          <div className="text-xs font-semibold text-foreground uppercase tracking-wide">Experience</div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Frontend Developer</div>
                            <div className="text-xs text-muted-foreground">TechCorp Inc. · 2022 - Present</div>
                            <ul className="mt-1 space-y-1">
                              <li className="text-xs text-muted-foreground flex items-start gap-1.5">
                                <span className="text-primary mt-1">•</span>
                                Led React dashboard development
                              </li>
                              <li className="text-xs text-muted-foreground flex items-start gap-1.5">
                                <span className="text-primary mt-1">•</span>
                                Improved load time by 40%
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-4 top-1/4 glass-card rounded-xl p-3 shadow-elevated animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">ATS Score</div>
                    <div className="text-sm font-bold text-accent">92/100</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-1/4 glass-card rounded-xl p-3 shadow-elevated animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-xs font-medium text-foreground">AI Enhanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
