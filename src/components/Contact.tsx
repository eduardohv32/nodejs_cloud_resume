import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:eduardohv32@gmail.com" className="text-blue-400 hover:text-blue-300">
                eduardohv32@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>San Salvador, El Salvador</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/eduardo-henriquez/" className="text-blue-400 hover:text-blue-300">
                  /in/eduardo-henriquez/
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Github className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <a href="https://github.com/eduardohv32" className="text-blue-400 hover:text-blue-300">
                  @eduardohv32
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}