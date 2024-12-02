import React from 'react';

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Tech University",
    period: "2017 - 2019",
    details: "Specialization in Cloud Computing and Distributed Systems"
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Engineering College",
    period: "2013 - 2017",
    details: "Focus on Software Engineering and Network Security"
  }
];

const certifications = [
  "AWS Certified Solutions Architect - Professional",
  "Google Cloud Professional Cloud Architect",
  "Certified Kubernetes Administrator (CKA)",
  "HashiCorp Certified Terraform Associate",
  "Red Hat Certified Engineer (RHCE)"
];

export default function Education() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
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
          
          <div>
            <h2 className="text-3xl font-bold mb-8">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-800">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}