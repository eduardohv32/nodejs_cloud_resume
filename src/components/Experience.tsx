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
    title: "IT Manager - LATAM & Americas",
    company: "Ubiquity Global Services",
    period: "Aug 2024 - Present",
    description: [
      "Led and coordinated multiple IT teams across NetOps, SysOps, and End User Support to ensure smooth operations for the LATAM and Americas regions."
      "Project Leadership: Directed the end-to-end automation of the deployment of 500 computers for a new site in Ghana, streamlining the process and reducing setup time by 30%."
      "Site Expansion: Managed the expansion of a Ubiquity site in the USA, adding 100 new seats, including workstations, network infrastructure (Wi-Fi), and security systems (cameras), supporting the growth of the operations."
      "New Site Implementation: Oversaw the successful launch and implementation of a new site in El Salvador, including coordinating equipment installation, network setup, and employee onboarding."
      "Team Leadership: Fostered collaboration and streamlined workflows across cross-functional teams to ensure efficient IT operations, including incident management, infrastructure deployment, and user support."
    ]
  },
  {
    title: "Cloud Engineer",
    company: "Acronis GmbH",
    period: "Mar 2021 - Aug 2024",
    description: [
      "Managed and optimized cloud backup, disaster recovery, and cybersecurity solutions across AWS, Azure, and GCP, automating processes to improve effciency."
      "Collaborated with the development team to identify issues, other solutions, and ensure a smooth deployment pipeline."
      "Designed and deployed Acronis Cyber Protect Cloud solutions, leveraging cloud automation for scalability and operational effciency."
    ]
  }
  {
    title: "Cloud Engineer",
    company: "Acronis GmbH",
    period: "Mar 2021 - Aug 2024",
    description: [
      "Managed and optimized cloud backup, disaster recovery, and cybersecurity solutions across AWS, Azure, and GCP, automating processes to improve effciency."
      "Collaborated with the development team to identify issues, other solutions, and ensure a smooth deployment pipeline."
      "Designed and deployed Acronis Cyber Protect Cloud solutions, leveraging cloud automation for scalability and operational effciency."
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