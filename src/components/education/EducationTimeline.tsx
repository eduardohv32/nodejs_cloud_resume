import React from 'react';

const education = [
  {
    degree: "Project Management Diploma",
    school: "ADEN Business School",
    period: "2019",
    details: "Specialization in Agile Methodologies"
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Universidad Francisco Gavidia",
    period: "2014 - 2021",
    details: "Focus on Software Engineering and Network Operations"
  }
];

export default function EducationTimeline() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-blue-600">{edu.school}</p>
            <p className="text-gray-600">{edu.period}</p>
            <p className="text-gray-700 mt-2">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}