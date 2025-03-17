import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import AnimatedSection from '../components/AnimatedSection';
import styles from '../styles/Contact.module.scss';

export default function Contact() {
  const router = useRouter();
  const [formSubject, setFormSubject] = useState('');
  
  // Set form subject based on URL query params
  useEffect(() => {
    if (router.query.job) {
      setFormSubject(`Job Application: ${router.query.job}`);
    } else if (router.query.subject) {
      setFormSubject(router.query.subject);
    }
  }, [router.query]);

  return (
    <Layout title="Contact Us - Cloud.IT Resources">
      {/* Hero Section */}
      <section className={styles.contactHero}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <h1>Get In Touch</h1>
            <p>Have questions or ready to start your project? Contact us today.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className={styles.contactInfo}>
        <div className="container">
          <div className={styles.contactGrid}>
            <AnimatedSection className={styles.contactDetails}>
              <h2>Contact Information</h2>
              <p>Reach out to us using any of the following methods:</p>
              
              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Address</h3>
                    <p>123 Technology Place</p>
                    <p>San Francisco, CA 94123</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4h-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0l-6.54-4.09c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72l6 3.75c.29.18.66.18.96 0l6-3.75c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>info@cloudit.resources</p>
                    <p>support@cloudit.resources</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>(555) 123-4567</p>
                    <p>Mon-Fri: 9AM-6PM PST</p>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-5.99 5.992-5.99-5.992-1.499 1.499 5.99 5.992-5.99 5.992 1.499 1.499 5.99-5.992 5.99 5.992 1.499-1.499-5.99-5.992 5.99-5.992-1.499-1.499z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Social Media</h3>
                    <div className={styles.socialLinks}>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className={styles.formSection} delay={0.3}>
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              <ContactForm initialSubject={formSubject} />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className="container">
          <AnimatedSection>
            <h2 className="sectionTitle">Our Location</h2>
            <div className={styles.map}>
              {/* Replace with actual Google Maps embed */}
              <div className={styles.mapPlaceholder}>
                <p>Google Maps Embed would go here</p>
                <p>123 Technology Place, San Francisco, CA 94123</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
} 