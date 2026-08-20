import React from 'react';
import { BarChart2, Headphones, Clock } from 'lucide-react';
import IconCard from './ui/IconCard';

const SERVICES = [
  {
    id: 'customized-solutions',
    title: 'Customized Solutions',
    description: 'We work closely with our clients to understand their specific requirements and offer tailored steel solutions.',
    icon: () => <BarChart2 size={40} color="#FFFFFF" strokeWidth={1.8} />,
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    description: 'Our knowledgeable team provides technical assistance and guidance to ensure optimal product selection and application.',
    icon: () => <Headphones size={40} color="#FFFFFF" strokeWidth={1.8} />,
  },
  {
    id: 'timely-delivery',
    title: 'Timely Delivery',
    description: 'We understand the importance of project timelines and are dedicated to efficient and reliable delivery services.',
    icon: () => <Clock size={40} color="#FFFFFF" strokeWidth={1.8} />,
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {SERVICES.map(({ id, title, description, icon }) => (
            <IconCard
              key={id}
              id={id}
              title={title}
              description={description}
              icon={icon}
              variant="service"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
