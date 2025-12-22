import { Code2, Database, Brain, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building end-to-end web applications with modern technologies',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Designing efficient and scalable database architectures',
  },
  {
    icon: Brain,
    title: 'Problem Solving',
    description: 'Strong foundation in DSA and algorithmic thinking',
  },
  {
    icon: Rocket,
    title: 'System Design',
    description: 'Creating robust and maintainable software systems',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative section-glow">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Passionate About{' '}
              <span className="gradient-text">Technology</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated Computer Science Engineering student with a passion for building 
                innovative software solutions. My journey in technology has equipped me with 
                strong skills in full-stack development, data structures, and system design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in creating secure and intelligent web applications, with particular 
                interest in online examination systems, proctoring platforms, and educational 
                technology. I believe in writing clean, maintainable code that solves real-world 
                problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently focused on mastering placement preparation with emphasis on Python, 
                SQL, and advanced data structures. I'm always eager to learn new technologies 
                and collaborate on challenging projects.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card p-6 glow-effect group hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
