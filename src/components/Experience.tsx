import React from 'react';
import SectionTitle from './SectionTitle';
import ExperienceList from './experience/ExperienceList';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey in Cloud Engineering"
        />
        <ExperienceList />
      </div>
    </section>
  );
}