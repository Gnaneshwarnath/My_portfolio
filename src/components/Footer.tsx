import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Gnaneshwarnath' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/gnaneshwar-nath-miriyala' },
  { name: 'LeetCode', icon: Code2, href: 'https://leetcode.com/u/Gnaneshwarnath/' },
  { name: 'Email', icon: Mail, href: 'mailto:nathgnaneshwarnath@gmail.com' },
];

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 Miriyala Gnaneshwarnath. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
