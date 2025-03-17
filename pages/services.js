import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import styles from '../styles/Services.module.scss';
import Link from 'next/link';

export default function Services() {
  return (
    <Layout title="Our Services - Cloud.IT Resources">
      {/* Hero Section */}
      <section className={styles.servicesHero}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <h1>Our Services</h1>
            <p>Comprehensive IT solutions tailored to your business needs</p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.servicesOverview}>
        <div className="container">
          <AnimatedSection>
            <h2 className="sectionTitle">What We Offer</h2>
            <p className="sectionSubtitle">Explore our range of IT services designed to help your business thrive</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Individual Services */}
      <section id="cloud" className={styles.serviceSection}>
        <div className="container">
          <div className={styles.serviceCard}>
            <AnimatedSection className={styles.serviceContent}>
              <h2>Cloud Solutions</h2>
              <p>Leverage the power of cloud computing to improve scalability, flexibility, and efficiency.</p>
              <ul className={styles.serviceList}>
                <li>Cloud migration and deployment</li>
                <li>Multi-cloud environment management</li>
                <li>Cloud security and compliance</li>
                <li>SaaS, PaaS, and IaaS solutions</li>
                <li>Public, private, and hybrid cloud architecture</li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className={styles.serviceBtn}>
                  Get Started
                </Link>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className={styles.serviceImage} delay={0.3}>
              <div className={styles.imagePlaceholder}>Cloud Image</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="infrastructure" className={styles.serviceSection}>
        <div className="container">
          <div className={`${styles.serviceCard} ${styles.reversed}`}>
            <AnimatedSection className={styles.serviceImage}>
              <div className={styles.imagePlaceholder}>Infrastructure Image</div>
            </AnimatedSection>
            <AnimatedSection className={styles.serviceContent} delay={0.3}>
              <h2>IT Infrastructure</h2>
              <p>Build a robust IT foundation to support your business operations and growth.</p>
              <ul className={styles.serviceList}>
                <li>Network design and implementation</li>
                <li>Server infrastructure and virtualization</li>
                <li>Storage solutions and data management</li>
                <li>Backup and disaster recovery</li>
                <li>Infrastructure monitoring and maintenance</li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className={styles.serviceBtn}>
                  Get Started
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="security" className={styles.serviceSection}>
        <div className="container">
          <div className={styles.serviceCard}>
            <AnimatedSection className={styles.serviceContent}>
              <h2>Cybersecurity</h2>
              <p>Protect your business assets and data with comprehensive security solutions.</p>
              <ul className={styles.serviceList}>
                <li>Security assessment and planning</li>
                <li>Endpoint protection and management</li>
                <li>Network security and firewall implementation</li>
                <li>Data encryption and protection</li>
                <li>Security awareness training</li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className={styles.serviceBtn}>
                  Get Started
                </Link>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className={styles.serviceImage} delay={0.3}>
              <div className={styles.imagePlaceholder}>Security Image</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="consulting" className={styles.serviceSection}>
        <div className="container">
          <div className={`${styles.serviceCard} ${styles.reversed}`}>
            <AnimatedSection className={styles.serviceImage}>
              <div className={styles.imagePlaceholder}>Consulting Image</div>
            </AnimatedSection>
            <AnimatedSection className={styles.serviceContent} delay={0.3}>
              <h2>IT Consulting</h2>
              <p>Get expert guidance and strategy to align your IT with business objectives.</p>
              <ul className={styles.serviceList}>
                <li>IT strategy development</li>
                <li>Technology roadmap planning</li>
                <li>Digital transformation consulting</li>
                <li>IT cost optimization</li>
                <li>Vendor selection and management</li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className={styles.serviceBtn}>
                  Get Started
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="development" className={styles.serviceSection}>
        <div className="container">
          <div className={styles.serviceCard}>
            <AnimatedSection className={styles.serviceContent}>
              <h2>Software Development</h2>
              <p>Custom software solutions designed to meet your specific business requirements.</p>
              <ul className={styles.serviceList}>
                <li>Custom application development</li>
                <li>Web and mobile app development</li>
                <li>API integration and development</li>
                <li>Legacy system modernization</li>
                <li>DevOps implementation</li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className={styles.serviceBtn}>
                  Get Started
                </Link>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection className={styles.serviceImage} delay={0.3}>
              <div className={styles.imagePlaceholder}>Development Image</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className="container">
          <AnimatedSection>
            <h2>Ready to Enhance Your IT Infrastructure?</h2>
            <p>Contact us today for a free consultation and learn how our services can benefit your business.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.ctaButton}
            >
              <Link href="/contact" className={styles.primaryBtn}>
                Contact Us
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
} 