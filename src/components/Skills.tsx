import React from 'react';
import SectionTitle from './SectionTitle';

const skills = {
  cloud: ["AWS", "Azure", "GCP", "OpenStack"],
  devops: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions"],
  infrastructure: ["Terraform", "Ansible", "CloudFormation", "Puppet"],
  monitoring: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
  languages: ["Python", "Bash", "JavaScript", "Go"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold capitalize mb-6 text-gray-800">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium
                             hover:bg-blue-100 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}