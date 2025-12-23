const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 75 },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Flask', level: 70 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'English (C1 Advanced)', level: 90 },
      { name: 'Hindi', level: 85 },
      { name: 'Telugu', level: 95 },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
              My Skills
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Technical{' '}
              <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and concepts I've mastered through 
              hands-on projects and continuous learning.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="glass-card p-6 glow-effect hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-primary font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
