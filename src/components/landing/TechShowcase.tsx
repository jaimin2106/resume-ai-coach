import { CheckCircle2 } from "lucide-react";

const techFeatures = [
  {
    category: "Frontend",
    items: ["React + TypeScript", "Responsive design", "Real-time preview"],
  },
  {
    category: "Backend",
    items: ["Secure auth system", "Cloud database", "Auto-save functionality"],
  },
  {
    category: "Features",
    items: ["PDF export", "User collections", "Role-based access"],
  },
];

const TechShowcase = () => {
  return (
    <section id="tech" className="section-spacing">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Built with{" "}
              <span className="gradient-text">modern web tech</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A production-ready application showcasing best practices in web development, 
              authentication, and cloud infrastructure.
            </p>

            <div className="space-y-6">
              {techFeatures.map((section) => (
                <div key={section.category}>
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code Preview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-2xl opacity-40" />
            
            <div className="relative glass-card rounded-2xl overflow-hidden shadow-elevated-lg">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-foreground/5 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">tech-stack.ts</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div>
                    <span className="text-primary">const</span>{" "}
                    <span className="text-foreground">techStack</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-muted-foreground">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-accent">frontend</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-green-500">"React + TypeScript"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-accent">styling</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-green-500">"Tailwind CSS"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-accent">backend</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-green-500">"Supabase"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-accent">auth</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-green-500">"Row Level Security"</span>
                    <span className="text-muted-foreground">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-accent">export</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-green-500">"PDF Generation"</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{"}"}</span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border/50">
                  {["React", "TypeScript", "Tailwind", "Supabase"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
