import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Cloud Resume Challenge - Azure",
    description: "Designed and implemented a website with React showcasing my work experience and Studies",
    technologies: ["App Service", "CI/CD", "GitHub Actions", "Azure Functions"],
    github: "https://github.com/eduardohv32/nodejs_cloud_resume",
    live: "https://example.com"
  },
  {
    title: "Infrastructure Automation on GCP",
    description: "Automated the deployment of a multi-tier architecture on GCP using Terraform, ensuring consistent and repeatable infrastructure provisioning.",
    technologies: ["Terraform", "GCP", "GitHub Actions"],
    github: "https://github.com",
    live: "https://app.goboxful.com"
  },
  {
    title: "Migration from VM to Kubernetes",
    description: "Infrastructure migration of MongoDB databases running on VM to Google Kubernetes Engine",
    technologies: ["MongoDB", "GKE", "MongoDB Operator"],
    github: "https://github.com",
    live: "https://api.goboxful.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}