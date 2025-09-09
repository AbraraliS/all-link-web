import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube, 
  Mail, 
  Globe, 
  Sun, 
  Moon,
  ExternalLink,
  Facebook
} from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  bgColor: string;
  hoverColor: string;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const socialLinks: SocialLink[] = [
      {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/abraralis',
      icon: <Linkedin className="w-6 h-6" />,
      bgColor: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:shadow-blue-600/25'
    },
     {
      name: 'GitHub',
      url: 'https://github.com/abraralis',
      icon: <Github className="w-6 h-6" />,
      bgColor: 'from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800',
      hoverColor: 'hover:shadow-gray-500/25'
    },
      {
      name: 'Portfolio',
      url: 'https://abrarali-porfolio.vercel.app/',
      icon: <Globe className="w-6 h-6" />,
      bgColor: 'from-emerald-500 to-teal-600',
      hoverColor: 'hover:shadow-emerald-500/25'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/abrar00429',
      icon: <Instagram className="w-6 h-6" />,
      bgColor: 'from-purple-600 via-pink-600 to-orange-500',
      hoverColor: 'hover:shadow-purple-500/25'
    },
      {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/171eyKNhn6/',
      icon: <Facebook className="w-6 h-6" />,
      bgColor: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:shadow-blue-500/25'
    },
    {
      name: 'Twitter / X',
      url: 'https://twitter.com/BlueStar43A',
      icon: <Twitter className="w-6 h-6" />,
      bgColor: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:shadow-blue-500/25'
    }, 
    {
      name: 'YouTube',
      url: 'https://youtube.com/@abraralis7',
      icon: <Youtube className="w-6 h-6" />,
      bgColor: 'from-red-500 to-red-700',
      hoverColor: 'hover:shadow-red-500/25'
    },
  
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      {/* Dark Mode Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-md sm:max-w-lg">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Profile Picture */}
          <div className="relative mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                  AS
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
            Abrar Ali
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 font-medium">
             Developer
          </p>
          
          {/* Bio */}
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
      Backend developer skilled in Java, Spring Boot, Firebase, and REST APIs., passionate about building efficient systems and eager to grow through real-world projects.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="space-y-4 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block w-full p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl ${link.hoverColor} transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${link.bgColor} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {link.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Follow me on {link.name}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300" />
              </div>
            </a>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mb-8">
          <a
            href="mailto:abrarali.sunasara28@gmail.com"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center py-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 AbrarAli S. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
          </p>
        </footer>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 -right-32 w-64 h-64 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
}

export default App;
