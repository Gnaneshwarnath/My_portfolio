const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'C', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'Flask', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'CS Fundamentals',
    skills: [
      { name: 'Data Structures', level: 90 },
      { name: 'Algorithms', level: 85 },
      { name: 'OOPS', level: 85 },
      { name: 'DBMS', level: 80 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Linux', level: 75 },
      { name: 'Docker', level: 65 },
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
