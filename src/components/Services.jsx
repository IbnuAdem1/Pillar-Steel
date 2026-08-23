import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Layers, Headphones, Truck } from 'lucide-react';
import IconCard from './ui/IconCard';
import { fadeUp, fadeIn, staggerContainer } from '../lib/motion';

const SERVICES = [
  {
    id: 'customized-solutions',
    title: 'Customized Solutions',
    description: 'We work closely with our clients to understand their specific requirements and offer tailored steel solutions.',
    icon: () => <Layers size={36} strokeWidth={2} />,
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    description: 'Our knowledgeable team provides technical assistance and guidance to ensure optimal product selection and application.',
    icon: () => <Headphones size={36} strokeWidth={2} />,
  },
  {
    id: 'timely-delivery',
    title: 'Timely Delivery',
    description: 'We understand the importance of project timelines and are dedicated to efficient and reliable delivery services.',
    icon: () => <Truck size={36} strokeWidth={2} />,
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();
  const childVariant = shouldReduceMotion ? fadeIn : fadeUp;

  return (
    <section className="services-section" id="services">
      <motion.div
        className="services-container"
        variants={shouldReduceMotion ? fadeIn : staggerContainer(0.12, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="services-title" variants={childVariant}>
          Our Services
        </motion.h2>
        <motion.div
          className="services-grid"
          variants={shouldReduceMotion ? fadeIn : staggerContainer(0.1)}
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
}
