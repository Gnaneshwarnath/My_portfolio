import { ExternalLink, Github, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Online Examination & AI Proctoring System',
    description:
      'Developed a full-stack online examination platform with multi-section tests, coding rounds, automatic timing, and AI-based proctoring (fullscreen enforcement, tab-switch detection, webcam monitoring). Built using React, TypeScript, Vite, Tailwind CSS, Firebase Authentication, MongoDB, and Node.js/Flask backend.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Flask', 'MongoDB', 'Firebase'],
    icon: Monitor,
    color: 'from-primary to-accent',
    github: 'https://github.com/Gnaneshwarnath',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative section-glow">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
              My Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent projects demonstrating my skills in full-stack 
              development, system design, and problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card group overflow-hidden glow-effect hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0`}
                    >
                      <project.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 pb-6 flex gap-3">
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
