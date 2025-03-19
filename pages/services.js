import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import styles from '../styles/Services.module.scss';
import WaveBackground from '../components/WaveBackground';
import { FaCloud, FaLock, FaCode, FaDatabase, FaRocket, FaCogs, FaChartLine, FaShieldAlt } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaCloud />,
      title: "Cloud Infrastructure",
      description: "Build and manage scalable, secure cloud infrastructure using AWS, Azure, or GCP.",
      features: [
        "Infrastructure as Code",
        "Auto-scaling solutions",
        "High availability architecture",
        "Cost optimization"
      ]
    },
    {
      icon: <FaLock />,
      title: "Cloud Security",
      description: "Implement robust security measures to protect your cloud assets and data.",
      features: [
        "Security assessment",
        "Compliance management",
        "Identity & access control",
        "Threat detection"
      ]
    },
    {
      icon: <FaCode />,
      title: "Cloud Development",
      description: "Develop cloud-native applications and microservices architecture.",
      features: [
        "Serverless applications",
        "Containerization",
        "API development",
        "CI/CD pipelines"
      ]
    },
    {
      icon: <FaDatabase />,
      title: "Data Solutions",
      description: "Implement scalable database solutions and data analytics platforms.",
      features: [
        "Database migration",
        "Big data processing",
        "Analytics platforms",
        "Data warehousing"
      ]
    },
    {
      icon: <FaCogs />,
      title: "DevOps Services",
      description: "Streamline development and operations with modern DevOps practices.",
      features: [
        "Automation pipelines",
        "Configuration management",
        "Monitoring & logging",
        "Performance optimization"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Cloud Optimization",
      description: "Optimize your cloud infrastructure for performance and cost.",
      features: [
        "Cost analysis",
        "Performance tuning",
        "Resource optimization",
        "Capacity planning"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Layout title="Services - Cloud IT Resources">
      <div className={styles.servicesContainer}>
        <WaveBackground />
        
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Enterprise Cloud Solutions
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your business with our comprehensive cloud consulting services. We architect, implement, and optimize cloud solutions that drive innovation and growth.
            </motion.p>

            <motion.div 
              className={styles.heroFeatures}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.featureItem}>
                <FaCloud className={styles.featureIcon} />
                <h3>Cloud Migration</h3>
                <p>Seamless transition to AWS, Azure, or Google Cloud with zero downtime</p>
              </div>
              <div className={styles.featureItem}>
                <FaLock className={styles.featureIcon} />
                <h3>Security & Compliance</h3>
                <p>Enterprise-grade security with regulatory compliance (HIPAA, SOC2, ISO27001)</p>
              </div>
              <div className={styles.featureItem}>
                <FaRocket className={styles.featureIcon} />
                <h3>DevOps Excellence</h3>
                <p>Automated CI/CD pipelines and infrastructure as code solutions</p>
              </div>
            </motion.div>

            <motion.div
              className={styles.heroStats}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.stat}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>Cost Reduction</span>
              </div>
            </motion.div>

            <motion.div 
              className={styles.heroCTA}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className={styles.certifications}>
                <img src="/aws-certified.png" alt="AWS Certified Partner" />
                <img src="/azure-certified.png" alt="Microsoft Azure Partner" />
                <img src="/gcp-certified.png" alt="Google Cloud Partner" />
              </div>
              <motion.a
                href="/contact"
                className={styles.consultButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Consultation
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section className={styles.servicesGrid}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>

          <div className={styles.grid}>
            <motion.div 
              className={styles.serviceCard}
              whileHover={{ y: -10 }}
            >
              <FaCloud className={styles.icon} />
              <h3>Cloud Migration</h3>
              <p>Strategic planning and execution of cloud migrations with minimal disruption to your business operations.</p>
              <ul>
                <li>Infrastructure Assessment</li>
                <li>Migration Strategy</li>
                <li>Data Transfer</li>
                <li>Application Modernization</li>
              </ul>
            </motion.div>

            <motion.div 
              className={styles.serviceCard}
              whileHover={{ y: -10 }}
            >
              <FaLock className={styles.icon} />
              <h3>Security & Compliance</h3>
              <p>Comprehensive security solutions ensuring your cloud infrastructure meets industry standards.</p>
              <ul>
                <li>Security Assessment</li>
                <li>Compliance Auditing</li>
                <li>Identity Management</li>
                <li>Threat Detection</li>
              </ul>
            </motion.div>

            <motion.div 
              className={styles.serviceCard}
              whileHover={{ y: -10 }}
            >
              <FaCode className={styles.icon} />
              <h3>DevOps Services</h3>
              <p>Streamline your development and operations with automated pipelines and modern practices.</p>
              <ul>
                <li>CI/CD Implementation</li>
                <li>Container Orchestration</li>
                <li>Infrastructure as Code</li>
                <li>Monitoring & Logging</li>
              </ul>
            </motion.div>

            <motion.div 
              className={styles.serviceCard}
              whileHover={{ y: -10 }}
            >
              <FaDatabase className={styles.icon} />
              <h3>Data Solutions</h3>
              <p>Modern data architecture and analytics solutions to drive insights and decision-making.</p>
              <ul>
                <li>Data Warehousing</li>
                <li>Big Data Processing</li>
                <li>Analytics Platforms</li>
                <li>Machine Learning Ops</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <motion.div
              className={styles.ctaContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Ready to Transform Your Business?</h2>
              <p>Let's discuss how our cloud solutions can help you achieve your goals.</p>
              <motion.a
                href="/contact"
                className={styles.ctaButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 