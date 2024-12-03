import React from 'react';

interface CertificationProps {
  certification: {
    name: string;
    date: string;
    badgeUrl: string;
    color: string;
  };
}

export default function CertificationCard({ certification }: CertificationProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center space-x-4">
        <div className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden ${certification.color} bg-opacity-10 group-hover:bg-opacity-20 transition-colors duration-300`}>
          <img 
            src={certification.badgeUrl} 
            alt={`${certification.name} Badge`}
            className="w-full h-full object-contain p-1"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{certification.name}</h3>
          <p className="text-sm text-gray-500">{certification.date}</p>
        </div>
      </div>
    </div>
  );
}