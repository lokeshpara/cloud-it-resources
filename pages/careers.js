import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Careers.module.scss';
import WaveBackground from '../components/WaveBackground';
import { FaBriefcase, FaClock, FaMapMarkerAlt, FaChevronDown, FaUsers, FaRocket, FaMedal, FaGraduationCap, FaHandshake, FaLightbulb } from 'react-icons/fa';

const jobPositions = [
  {
    id: 1,
    title: 'Senior Cloud Architect',
    type: 'Full-time',
    location: 'Remote / New York',
    description: 'Lead and design cloud infrastructure solutions for enterprise clients.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '7+ years of experience with AWS/Azure/GCP',
      'Strong knowledge of cloud security and compliance',
      'Experience with Infrastructure as Code (Terraform, CloudFormation)',
      'Excellent communication and leadership skills'
    ]
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Remote / London',
    description: 'Implement and maintain CI/CD pipelines and cloud infrastructure.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '5+ years of DevOps experience',
      'Strong knowledge of Docker and Kubernetes',
      'Experience with CI/CD tools (Jenkins, GitLab CI)',
      'Scripting skills in Python, Bash, or similar'
    ]
  },
  {
    id: 3,
    title: 'Cloud Security Specialist',
    type: 'Full-time',
    location: 'Remote / Singapore',
    description: 'Ensure security and compliance of cloud infrastructure and applications.',
    requirements: [
      'Bachelor\'s degree in Cybersecurity or related field',
      '5+ years of cloud security experience',
      'Security certifications (CISSP, AWS Security)',
      'Experience with security tools and frameworks',
      'Knowledge of compliance standards (SOC2, ISO27001)'
    ]
  }
];

const benefits = [
  {
    icon: <FaRocket />,
    title: 'Career Growth',
    description: 'Continuous learning and development opportunities with access to certifications and training programs.'
  },
  {
    icon: <FaMedal />,
    title: 'Competitive Package',
    description: 'Attractive salary, health benefits, and performance bonuses to reward your excellence.'
  },
  {
    icon: <FaUsers />,
    title: 'Global Team',
    description: 'Work with talented professionals from around the world in a collaborative environment.'
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovation Culture',
    description: 'Be part of cutting-edge projects and shape the future of cloud technology.'
  }
];

const values = [
  {
    icon: <FaHandshake />,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication.'
  },
  {
    icon: <FaRocket />,
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do.'
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovation',
    description: 'We encourage creative thinking and innovative solutions.'
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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [activeTab, setActiveTab] = useState('culture');

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <Layout title="Careers - Cloud IT Resources">
      <div className={styles.careerContainer}>
        <WaveBackground />
        
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Shape the Future of Cloud Technology
            </motion.h1>
            <motion.p 
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join a leading cloud consultancy transforming enterprises through innovative solutions in AWS, Azure, and Google Cloud
            </motion.p>
            
            <motion.div 
              className={styles.heroFeatures}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.featureItem}>
                <FaRocket className={styles.featureIcon} />
                <h3>Cloud Excellence</h3>
                <p>Drive digital transformation with cutting-edge cloud solutions</p>
              </div>
              <div className={styles.featureItem}>
                <FaUsers className={styles.featureIcon} />
                <h3>Global Impact</h3>
                <p>Work with Fortune 500 companies and innovative startups</p>
              </div>
              <div className={styles.featureItem}>
                <FaGraduationCap className={styles.featureIcon} />
                <h3>Continuous Growth</h3>
                <p>Access to certifications and advanced training programs</p>
              </div>
            </motion.div>

            <motion.div
              className={styles.statsContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.stat}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>Enterprise Clients</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Cloud Experts</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Countries</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Remote-First</span>
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
                href="#open-positions"
                className={styles.exploreButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Opportunities
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section className={styles.cultureSection}>
          <div className={styles.container}>
            <motion.div 
              className={styles.tabsContainer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button 
                className={`${styles.tabButton} ${activeTab === 'culture' ? styles.active : ''}`}
                onClick={() => setActiveTab('culture')}
              >
                Our Culture
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'benefits' ? styles.active : ''}`}
                onClick={() => setActiveTab('benefits')}
              >
                Benefits
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'values' ? styles.active : ''}`}
                onClick={() => setActiveTab('values')}
              >
                Values
              </button>
            </motion.div>

            <div className={styles.tabContent}>
              {activeTab === 'benefits' && (
                <motion.div 
                  className={styles.benefitsGrid}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className={styles.benefitCard}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={styles.benefitIcon}>{benefit.icon}</div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'culture' && (
                <motion.div 
                  className={styles.cultureContent}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.cultureGrid}>
                    <motion.div 
                      className={styles.cultureText}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3>Work with Purpose</h3>
                      <p>Join a team that's passionate about transforming businesses through innovative cloud solutions. We foster a culture of continuous learning, collaboration, and excellence.</p>
                      <ul className={styles.cultureList}>
                        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                          Flexible remote work environment
                        </motion.li>
                        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                          Regular team building events
                        </motion.li>
                        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                          Mentorship programs
                        </motion.li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      className={styles.cultureImage}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === 'values' && (
                <motion.div 
                  className={styles.valuesGrid}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      className={styles.valueCard}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                      }}
                    >
                      <div className={styles.valueIcon}>{value.icon}</div>
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </section>

        <section className={styles.jobsSection}>
          <div className={styles.container}>
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Open Positions
            </motion.h2>

            <motion.div 
              className={styles.jobsGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {jobPositions.map((job) => (
                <motion.div
                  key={job.id}
                  className={`${styles.jobCard} ${expandedJob === job.id ? styles.expanded : ''}`}
                  variants={itemVariants}
                  whileHover={{ scale: expandedJob === job.id ? 1 : 1.02 }}
                  onClick={() => toggleJob(job.id)}
                >
                  <div className={styles.jobHeader}>
                    <div className={styles.jobInfo}>
                      <h3>{job.title}</h3>
                      <div className={styles.jobMeta}>
                        <span>
                          <FaBriefcase /> {job.type}
                        </span>
                        <span>
                          <FaMapMarkerAlt /> {job.location}
                        </span>
                      </div>
                    </div>
                    <motion.div 
                      className={styles.expandIcon}
                      animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown />
                    </motion.div>
                  </div>

                  <motion.div 
                    className={styles.jobContent}
                    initial={false}
                    animate={{ 
                      height: expandedJob === job.id ? 'auto' : 0,
                      opacity: expandedJob === job.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className={styles.jobDescription}>{job.description}</p>
                    <div className={styles.requirements}>
                      <h4>Requirements:</h4>
                      <ul>
                        {job.requirements.map((req, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                          >
                            {req}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <motion.a
                      href={`/contact?job=${encodeURIComponent(job.title)}`}
                      className={styles.applyButton}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                    </motion.a>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className={styles.growthSection}>
          <div className={styles.container}>
            <motion.div
              className={styles.growthContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Grow With Us</h2>
              <div className={styles.growthGrid}>
                <motion.div 
                  className={styles.growthCard}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaGraduationCap className={styles.growthIcon} />
                  <h3>Learning & Development</h3>
                  <p>Access to online courses, certification programs, and professional development opportunities.</p>
                </motion.div>
                <motion.div 
                  className={styles.growthCard}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaRocket className={styles.growthIcon} />
                  <h3>Career Advancement</h3>
                  <p>Clear career paths and opportunities for advancement within the organization.</p>
                </motion.div>
              </div>
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
              <h2>Don't see the right position?</h2>
              <p>Send us your resume and we'll keep you in mind for future opportunities.</p>
              <motion.a
                href="/contact"
                className={styles.ctaButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 