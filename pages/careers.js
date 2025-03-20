import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Careers.module.scss';
import WaveBackground from '../components/WaveBackground';
import { FaBriefcase, FaClock, FaMapMarkerAlt, FaChevronDown, FaUsers, FaRocket, FaMedal, FaGraduationCap, FaHandshake, FaLightbulb } from 'react-icons/fa';
import Link from 'next/link';
import getImagePath from '../utils/imageLoader';

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

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [activeTab, setActiveTab] = useState('culture');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const containerRef = useRef(null);

  // Track mouse movement for hover effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    if (typeof window !== 'undefined') {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
      
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
        setViewportHeight(window.innerHeight);
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const calculateCardPosition = (index, total) => {
    if (!mousePosition || !containerRef.current) return { x: 0, y: 0 };
    
    const container = containerRef.current.getBoundingClientRect();
    const centerX = container.left + container.width / 2;
    const centerY = container.top + container.height / 2;
    
    const deltaX = (mousePosition.x - centerX) / 30;
    const deltaY = (mousePosition.y - centerY) / 30;
    
    // Apply different offsets based on card position
    const xOffset = Math.cos((index / total) * Math.PI * 2) * deltaX;
    const yOffset = Math.sin((index / total) * Math.PI * 2) * deltaY;
    
    return { x: xOffset, y: yOffset };
  };

  const parallaxVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const jobItemVariants = {
    closed: { 
      height: "auto", 
      transition: { 
        duration: 0.4, 
        ease: [0.4, 0, 0.2, 1] 
      } 
    },
    open: { 
      height: "auto", 
      transition: { 
        duration: 0.6, 
        ease: [0.4, 0, 0.2, 1] 
      } 
    }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Layout title="Careers - Cloud IT Resources">
      <div className={styles.careerContainer}>
        <WaveBackground />
        
        <section className={styles.cultureSection}>
          <div className={styles.container}>
            <motion.h1 
              className={styles.mainTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Join Our Team of Cloud Innovators
            </motion.h1>
            
            <motion.div 
              className={styles.tabsContainer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className={`${styles.tabButton} ${activeTab === 'culture' ? styles.active : ''}`}
                onClick={() => setActiveTab('culture')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Culture
              </motion.button>
              <motion.button 
                className={`${styles.tabButton} ${activeTab === 'benefits' ? styles.active : ''}`}
                onClick={() => setActiveTab('benefits')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Benefits
              </motion.button>
              <motion.button 
                className={`${styles.tabButton} ${activeTab === 'values' ? styles.active : ''}`}
                onClick={() => setActiveTab('values')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Values
              </motion.button>
            </motion.div>

            <div className={styles.tabContent}>
              <AnimatePresence mode="wait">
                {activeTab === 'benefits' && (
                  <motion.div 
                    className={styles.benefitsGrid}
                    key="benefits"
                    ref={containerRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    variants={staggerChildren}
                  >
                    {benefits.map((benefit, index) => {
                      const position = calculateCardPosition(index, benefits.length);
                      
                      return (
                        <motion.div
                          key={index}
                          className={styles.benefitCard}
                          initial="initial"
                          whileInView="animate"
                          whileHover="hover"
                          variants={parallaxVariants}
                          custom={index}
                          viewport={{ once: true, margin: "-100px" }}
                          animate={{ 
                            x: position.x,
                            y: position.y
                          }}
                        >
                          <motion.div 
                            className={styles.benefitIcon}
                            whileHover={{ 
                              rotate: 10, 
                              scale: 1.2,
                              color: "#64b5f6"
                            }}
                          >
                            {benefit.icon}
                          </motion.div>
                          <motion.h3>{benefit.title}</motion.h3>
                          <motion.p>{benefit.description}</motion.p>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}

                {activeTab === 'culture' && (
                  <motion.div 
                    className={styles.cultureContent}
                    key="culture"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={styles.cultureGrid}>
                      <motion.div 
                        className={styles.cultureText}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.h3 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          Work with Purpose
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          Join a team that's passionate about transforming businesses through innovative cloud solutions. We foster a culture of continuous learning, collaboration, and excellence.
                        </motion.p>
                        <motion.ul 
                          className={styles.cultureList}
                          variants={staggerChildren}
                          initial="initial"
                          animate="animate"
                        >
                          <motion.li variants={fadeInUp}>
                            <span className={styles.listHighlight}>✓</span> Flexible remote work environment
                          </motion.li>
                          <motion.li variants={fadeInUp}>
                            <span className={styles.listHighlight}>✓</span> Regular team building events
                          </motion.li>
                          <motion.li variants={fadeInUp}>
                            <span className={styles.listHighlight}>✓</span> Mentorship programs
                          </motion.li>
                          <motion.li variants={fadeInUp}>
                            <span className={styles.listHighlight}>✓</span> Continuous learning opportunities
                          </motion.li>
                        </motion.ul>
                      </motion.div>
                      <motion.div 
                        className={styles.cultureImage}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <img 
                          src={getImagePath('/images/culture-placeholder.jpg')}
                          alt="Team Culture"
                          className={styles.cultureImageContent}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'values' && (
                  <motion.div 
                    className={styles.valuesGrid}
                    key="values"
                    ref={containerRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {values.map((value, index) => {
                      const position = calculateCardPosition(index, values.length);
                      
                      return (
                        <motion.div
                          key={index}
                          className={styles.valueCard}
                          initial="initial"
                          whileInView="animate"
                          whileHover="hover"
                          variants={parallaxVariants}
                          custom={index}
                          viewport={{ once: true, margin: "-100px" }}
                          animate={{ 
                            x: position.x,
                            y: position.y
                          }}
                        >
                          <motion.div 
                            className={styles.valueIcon}
                            whileHover={{ 
                              rotate: 10, 
                              scale: 1.2,
                              color: "#64b5f6"
                            }}
                          >
                            {value.icon}
                          </motion.div>
                          <motion.h3>{value.title}</motion.h3>
                          <motion.p>{value.description}</motion.p>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <motion.section
          className={styles.jobsSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
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
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              {jobPositions.map((job, index) => (
                <motion.div
                  key={job.id}
                  className={`${styles.jobCard} ${expandedJob === job.id ? styles.expanded : ''}`}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ 
                    scale: expandedJob === job.id ? 1 : 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div 
                    className={styles.jobHeader}
                    onClick={() => toggleJob(job.id)}
                  >
                    <div className={styles.jobIconTitle}>
                      <div className={styles.jobIcon}>
                        <FaBriefcase />
                      </div>
                      <h3>{job.title}</h3>
                    </div>
                    <div className={styles.jobMeta}>
                      <span className={styles.jobType}>
                        <FaClock />
                        {job.type}
                      </span>
                      <span className={styles.jobLocation}>
                        <FaMapMarkerAlt />
                        {job.location}
                      </span>
                      <motion.span 
                        className={styles.jobChevron}
                        animate={{ 
                          rotate: expandedJob === job.id ? 180 : 0,
                          color: expandedJob === job.id ? "#64b5f6" : "rgba(255, 255, 255, 0.7)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown />
                      </motion.span>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div 
                        className={styles.jobContent}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: { 
                            height: { duration: 0.4 },
                            opacity: { duration: 0.3, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { 
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2 }
                          }
                        }}
                      >
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {job.description}
                        </motion.p>
                        
                        <motion.h4
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          Requirements
                        </motion.h4>
                        <motion.ul className={styles.requirementsList}>
                          {job.requirements.map((req, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: 0.4 + (i * 0.1)
                              }}
                            >
                              {req}
                            </motion.li>
                          ))}
                        </motion.ul>
                        
                        <motion.div 
                          className={styles.jobApply}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                        >
                          <Link href="/contact">
                            <motion.button
                              className={styles.applyButton}
                              whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)"
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Contact Us
                            </motion.button>
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
} 