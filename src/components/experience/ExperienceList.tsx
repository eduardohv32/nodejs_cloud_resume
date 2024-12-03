import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
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

export default function ExperienceList() {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <div className="space-y-8">
      <div className="space-y-12 relative">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`transform transition-all duration-500 ease-in-out
              ${index >= 2 ? (
                showAll 
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-8 absolute pointer-events-none'
              ) : 'opacity-100 translate-y-0'}
            `}
            style={{
              transitionDelay: showAll ? `${(index - 1) * 100}ms` : '0ms',
              zIndex: experiences.length - index,
            }}
          >
            <ExperienceCard experience={exp} />
          </div>
        ))}
      </div>
      
      {experiences.length > 2 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 rounded-full
                     hover:bg-blue-100 transition-all duration-300 font-medium"
          >
            <span className="transition-transform duration-300 transform group-hover:scale-105">
              {showAll ? 'Show Less' : 'Show More'}
            </span>
            {showAll ? (
              <ChevronUp className="w-5 h-5 transition-transform duration-300 transform group-hover:-translate-y-1" />
            ) : (
              <ChevronDown className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-y-1" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}