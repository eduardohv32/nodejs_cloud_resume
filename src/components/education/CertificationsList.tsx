import React from 'react';
import CertificationCard from './CertificationCard';

const certifications = [
  {
    name: "Microsoft Certified: Azure Administrator - Associate",
    date: "Mar 2024",
    badgeUrl: "https://images.credly.com/size/340x340/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png",
    color: "bg-blue-500"
  },
  {
    name: "CompTIA Cloud+",
    date: "Nov 2023",
    badgeUrl: "https://images.credly.com/size/80x80/images/b2e3c623-cc4a-4f0c-8a3b-aa6231e138fe/blob",
    color: "bg-sky-500"
  },
  {
    name: "CompTIA Network+",
    date: "Apr 2023",
    badgeUrl: "https://images.credly.com/size/80x80/images/c70ba73e-3c8a-46fa-9d60-4a9af94ad662/blob",
    color: "bg-green-500"
  },
  {
    name: "CompTIA Linux+",
    date: "Nov 2022",
    badgeUrl: "https://images.credly.com/size/80x80/images/c8ba8fa6-ab8b-4df7-879f-4ae7b98b2765/blob",
    color: "bg-orange-500"
  },
  {
    name: "CompTIA Cloud Admin Professional CCAP",
    date: "Dec 2023",
    badgeUrl: "https://images.credly.com/size/3400x340/images/18218ce6-e7d4-4479-9500-b7499645b763/CompTIA_CCAP.png",
    color: "bg-purple-500"
  },
  {
    name: "CompTIA Linux Network Professional CLNP",
    date: "Jun 2023",
    badgeUrl: "https://images.credly.com/size/340x340/images/d68e17f2-b591-4f2e-ae64-414ba82665f4/CompTIA_CLNP.png",
    color: "bg-indigo-500"
  }
];

export default function CertificationsList() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} certification={cert} />
        ))}
      </div>
    </div>
  );
}