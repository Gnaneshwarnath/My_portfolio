import { Code2, Database, Brain, Briefcase } from 'lucide-react';

const highlights = [
  {
    icon: Briefcase,
    title: 'Software Engineering Intern',
    description: 'Currently at Infosys Springboard, applying Agile methodologies',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building end-to-end web applications with modern technologies',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Working with MySQL, MongoDB, and designing efficient schemas',
  },
  {
    icon: Brain,
    title: 'Problem Solving',
    description: 'Strong foundation in DSA and algorithmic thinking',
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
                I'm a final-year B.Tech student at Saveetha Institute of Medical and Technical Sciences, 
                passionate about technology and problem-solving. I'm eager to begin my career in the IT sector, 
                where I can apply my programming skills and fresh ideas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working as a Software Engineering Intern at Infosys Springboard, engaging in corporate 
                simulation focused on digital transformation. I apply Agile methodologies under mentor guidance 
                to solve real-world business problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm looking for an opportunity to learn, grow, and contribute as part of a team that values 
                innovation and continuous improvement. My expertise spans Python, web technologies, and database 
                management.
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
