import { motion } from 'framer-motion';
import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Contact.module.scss';
import WaveBackground from '../components/WaveBackground';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@clouditresources.com',
      link: 'mailto:info@clouditresources.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: '13237 Cool Meadow Dr, Frisco, Texas – 75035',
      link: 'https://maps.google.com/?q=13237+Cool+Meadow+Dr,+Frisco,+Texas,+75035'
    }
  ];

  return (
    <Layout title="Contact Us - Cloud IT Resources">
      <div className={styles.contactContainer}>
        <WaveBackground />
        
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have a question or want to discuss your project? We're here to help!
            </motion.p>
          </div>
        </section>

        <section className={styles.mapSection}>
          <div className={styles.container}>
            <motion.div
              className={styles.mapContainer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.9761304257404!2d-96.8432978!3d33.1160905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c94d40533c5%3A0x1b32cbb8d7c4e548!2s13237%20Cool%20Meadow%20Dr%2C%20Frisco%2C%20TX%2075035!5e0!3m2!1sen!2sus!4v1715553844158!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Cloud IT Resources Location"
                className={styles.googleMap}
              ></iframe>
            </motion.div>
          </div>
        </section>

        
      </div>
    </Layout>
  );
} 