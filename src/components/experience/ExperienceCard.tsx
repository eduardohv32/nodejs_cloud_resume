import React from 'react';
import { Building2, Calendar } from 'lucide-react';

interface ExperienceCardProps {
  experience: {
    title: string;
    company: string;
    period: string;
    description: string[];
  };
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 border-l-4 border-blue-500 hover:border-blue-600 transition-all duration-300">
      <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{experience.title}</h3>
        <div className="flex items-center gap-4 mb-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Building2 className="w-4 h-4 text-blue-500" />
            <span>{experience.company}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span>{experience.period}</span>
          </div>
        </div>
        <ul className="space-y-3">
          {experience.description.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}