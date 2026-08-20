import React from 'react';
import { BarChart2, Headphones, Clock } from 'lucide-react';

const SERVICES = [
  {
    id: 'customized-solutions',
    title: 'Customized Solutions',
    description: 'We work closely with our clients to understand their specific requirements and offer tailored steel solutions.',
    Icon: BarChart2,
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    description: 'Our knowledgeable team provides technical assistance and guidance to ensure optimal product selection and application.',
    Icon: Headphones,
  },
  {
    id: 'timely-delivery',
    title: 'Timely Delivery',
    description: 'We understand the importance of project timelines and are dedicated to efficient and reliable delivery services.',
    Icon: Clock,
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {SERVICES.map(({ id, title, description, Icon }) => (
            <div key={id} className="service-card">
              <div className="service-icon-circle">
                <Icon size={40} color="#FFFFFF" strokeWidth={1.8} />
              </div>
              <h3 className="service-card-title">{title}</h3>
              <p className="service-card-desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
