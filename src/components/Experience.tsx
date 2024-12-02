import React from 'react';
import SectionTitle from './SectionTitle';
import { Calendar, Building2 } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior DevOps Engineer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: [
      "Architected and maintained AWS infrastructure using Terraform, reducing deployment time by 60%",
      "Implemented Kubernetes clusters for microservices architecture, improving scalability",
      "Developed CI/CD pipelines using Jenkins and GitHub Actions",
      "Managed monitoring and alerting using Prometheus and Grafana"
    ]
  },
  {
    title: "Cloud Infrastructure Engineer",
    company: "Digital Innovations Corp",
    period: "2019 - 2021",
    description: [
      "Migrated legacy applications to cloud-native architecture on AWS",
      "Implemented Infrastructure as Code using CloudFormation and Terraform",
      "Automated backup and disaster recovery procedures",
      "Reduced cloud infrastructure costs by 40% through optimization"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey in DevOps and Cloud Engineering"
        />
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-8 border-l-4 border-blue-500 hover:border-blue-600 transition-colors duration-300"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Building2 className="w-4 h-4 text-blue-500" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}