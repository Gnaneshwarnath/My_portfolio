import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const education = {
  degree: 'Bachelor of Engineering in Computer Science',
  university: 'University Name',
  duration: '2021 - 2025',
  courses: [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Object-Oriented Programming',
    'Computer Networks',
    'Software Engineering',
    'Web Development',
    'Machine Learning Basics',
  ],
};

const achievements = [
  {
    icon: Award,
    title: 'Strong Problem Solver',
    description: 'Consistent practice in competitive programming and DSA',
  },
  {
    icon: BookOpen,
    title: 'Placement Ready',
    description: 'Thorough preparation in Python, SQL, and system design',
  },
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Strong academic performance with focus on core CS subjects',
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
              Education & Achievements
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Academic{' '}
              <span className="gradient-text">Background</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="glass-card p-8 glow-effect hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-muted-foreground">{education.university}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-primary">
                    <Calendar size={14} />
                    <span>{education.duration}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Highlights & Achievements
              </h3>
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="glass-card p-6 glow-effect hover:border-primary/50 transition-all duration-300 flex items-start gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <achievement.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
