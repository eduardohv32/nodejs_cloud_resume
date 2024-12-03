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
    title: "Cloud Engineer",
    company: "Acronis GmbH",
    period: "Mar 2021 - Present",
    description: [
      "Managed and optimized cloud backup, disaster recovery, and cybersecurity solutions across AWS, Azure, and GCP, automating processes to improve effciency.",
      "Collaborated with the development team to identify issues, other solutions, and ensure a smooth deployment pipeline.",
      "Designed and deployed Acronis Cyber Protect Cloud solutions, leveraging cloud automation for scalability and operational effciency.",
    ]
  },
  {
    title: "Operations Manager",
    company: "Omega HV Asociados",
    period: "Feb 2020 - Feb 2021",
    description: [
      "Spearheaded automation projects, implementing RMM systems and internal knowledge base scripts to enhance operational effciency and reduce response times.",
      "Optimized infrastructure by establishing processes for remote monitoring, reducing downtime and improving overall service delivery.",
      "Implemented key customer service KPIs and SLAs, streamlining operations and improving customer satisfaction."
    ]
  },
  {
    title: "IT Manager",
    company: "Prime Global Solutions",
    period: "Jan 2019 - Feb 2020",
    description: [
      "Led the migration of on-premise infrastructure to Azure cloud, streamlining operations and improving scalability.",
      "Implemented cloud-based solutions for disaster recovery and business continuity, ensuring secure and efficient systems.",
      "Developed and deployed APIs and microservices, supporting the launch of a mobile app and enhancing integration across platforms.",
      "Implemented and optimized a CI/CD pipeline using Azure DevOps, automating the deployment process and ensuring faster, more reliable application releases."
    ]
  },
  {
    title: "Technical Support Specialist",
    company: "Telus International",
    period: "Jun 2015 - Jan 2018",
    description: [
      "Technical support representative in charge to deliver solutions to Google business-class customer using G Suite products",
      "Google G Suite Certified Administrator"
    ]
  },
  {
    title: "Presales Engineer",
    company: "Omega HV Asociados",
    period: "Jan 2010 - Jun 2015",
    description: [
      "Determine technical requirements to meet client goals and collaborate with sales support team.",
      "Respond to any request or information to the proposals from the customer, supplying technical details of the proposed solutions.", 
      "Coordinate transitions between pre-sales specifications and implementation engineering."
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