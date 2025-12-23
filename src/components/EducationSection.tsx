import { GraduationCap, Calendar, Award, BookOpen, Briefcase } from 'lucide-react';

const education = {
  degree: 'B.E. in Computer Science',
  university: 'Saveetha Institute of Medical and Technical Sciences',
  duration: '2022 - 2026',
  cgpa: '8.1',
  courses: [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Object-Oriented Programming',
    'Computer Networks',
    'Software Engineering',
    'Web Development',
  ],
};

const experience = {
  title: 'Software Engineering Intern',
  company: 'Infosys Springboard',
  duration: 'November 2025 - Present',
  description: 'Selected for the competitive Infosys Springboard Internship 6.0, engaging in a corporate simulation focused on digital transformation; applied Agile methodologies under mentor guidance to solve real-world business problems.',
};

const certifications = [
  {
    title: 'Python Foundations',
    issuer: 'Infosys Springboard',
  },
  {
    title: 'EF SET English Certificate (C1 Advanced)',
    issuer: 'Education First',
  },
  {
    title: 'MySQL',
    issuer: 'HackerRank',
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
              Education & Experience
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
              Academic{' '}
              <span className="gradient-text">Background</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="space-y-6">
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
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Calendar size={14} />
                        <span>{education.duration}</span>
                      </div>
                      <span className="text-sm text-accent font-medium">CGPA: {education.cgpa}</span>
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

              {/* Experience Card */}
              <div className="glass-card p-8 glow-effect hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shrink-0">
                    <Briefcase className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground">{experience.company}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-primary">
                      <Calendar size={14} />
                      <span>{experience.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="glass-card p-6 glow-effect hover:border-primary/50 transition-all duration-300 flex items-start gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
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
