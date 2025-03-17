import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="Cloud.IT Resources - Home">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Innovative IT Solutions for Your Business</h1>
            <p>Cloud.IT Resources helps businesses transform their IT infrastructure with cutting-edge technologies.</p>
            <div className={styles.heroCta}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/services" className={styles.primaryBtn}>
                  Our Services
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className={styles.secondaryBtn}>
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <AnimatedSection>
            <h2 className={styles.sectionTitle}>What We Offer</h2>
            <p className={styles.sectionSubtitle}>Comprehensive IT solutions tailored to your needs</p>
          </AnimatedSection>

          <div className={styles.featureGrid}>
            {[
              {
                title: 'Cloud Computing',
                description: 'Scalable cloud solutions that grow with your business',
                icon: '☁️',
              },
              {
                title: 'IT Infrastructure',
                description: 'Robust infrastructure design and implementation',
                icon: '🖥️',
              },
              {
                title: 'Cybersecurity',
                description: 'Protect your business with advanced security solutions',
                icon: '🔒',
              },
              {
                title: 'IT Consulting',
                description: 'Expert guidance for your technology strategy',
                icon: '💼',
              },
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link href={`/services#${feature.title.toLowerCase().replace(' ', '-')}`} className={styles.learnMore}>
                  Learn more →
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className={styles.aboutPreview}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <AnimatedSection className={styles.aboutImage}>
              {/* Replace with an actual image */}
              <div className={styles.imagePlaceholder}>Image here</div>
            </AnimatedSection>
            <AnimatedSection className={styles.aboutContent} delay={0.3}>
              <h2>Who We Are</h2>
              <p>Cloud.IT Resources is a leading IT solutions provider dedicated to helping businesses leverage technology for growth and innovation.</p>
              <p>With over 10 years of experience, our team of experts delivers tailored solutions that drive results.</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about" className={styles.primaryBtn}>
                  About Us
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <AnimatedSection>
            <h2>Ready to Transform Your IT Infrastructure?</h2>
            <p>Contact us today to schedule a consultation with our experts.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className={styles.primaryBtn}>
                Get in Touch
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
} 