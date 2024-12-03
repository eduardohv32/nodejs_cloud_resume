import React from 'react';
import EducationTimeline from './education/EducationTimeline';
import CertificationsList from './education/CertificationsList';

export default function Education() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <EducationTimeline />
          <CertificationsList />
        </div>
      </div>
    </section>
  );
}