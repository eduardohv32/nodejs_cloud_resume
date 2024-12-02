import React from 'react';
import { Github, Linkedin, Mail, Cloud } from 'lucide-react';
import ProfilePhoto from './ProfilePhoto';

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center">
          <ProfilePhoto 
            imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400"
            alt="Eduardo Henriquez - Cloud Engineer"
          />
          <div className="relative">
            <Cloud className="w-20 h-20 mb-6 text-blue-400" />
            <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Eduardo Henriquez
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-400 mb-8 font-light">
            Cloud Engineer
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mb-10 text-gray-300 leading-relaxed">
          Experienced Cloud Engineer with a strong background in designing, optimizing, and migrating secure solutions across Azure, AWS 
          and GCP. Adept at automating infrastructure, managing cloud-based environments, and leveraging containerization technologies 
          like Docker and Kubernetes. Passionate about enabling continuous delivery and implementing DevOps practices to drive 
          efficiencies in cloud operations.
          </p>
          <div className="flex gap-8">
            <a 
              href="https://github.com" 
              className="transform hover:scale-110 transition-transform duration-200 hover:text-blue-400"
            >
              <Github className="w-7 h-7" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="transform hover:scale-110 transition-transform duration-200 hover:text-blue-400"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="transform hover:scale-110 transition-transform duration-200 hover:text-blue-400"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}