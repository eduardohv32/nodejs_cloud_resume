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
    <div className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <div className={`flex-shrink-0 w-20 h-20 sm:w-16 sm:h-16 rounded-lg overflow-hidden ${certification.color} bg-opacity-10 group-hover:bg-opacity-20 transition-colors duration-300`}>
          <img 
            src={certification.badgeUrl} 
            alt={`${certification.name} Badge`}
            className="w-full h-full object-contain p-1"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-semibold text-gray-800">{certification.name}</h3>
          <p className="text-sm text-gray-500">{certification.date}</p>
        </div>
      </div>
    </div>
  );
}