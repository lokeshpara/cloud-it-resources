import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Services.module.scss';
import WaveBackground from '../components/WaveBackground';
import { FaCloud, FaLock, FaCode, FaDatabase, FaRocket, FaCogs, FaChartLine, FaShieldAlt, FaServer, FaNetworkWired, FaDesktop, FaSyncAlt, FaChevronDown } from 'react-icons/fa';

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const calculateParallax = (serviceId, index) => {
    if (!mousePosition) return { x: 0, y: 0 };
    
    // Only apply parallax to the currently expanded item
    if (expandedService !== serviceId) return { x: 0, y: 0 };
    
    const speed = 0.01;
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
    
    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;
    
    const offsetX = (mousePosition.x - centerX) * speed;
    const offsetY = (mousePosition.y - centerY) * speed;
    
    return { x: offsetX, y: offsetY };
  };

  const services = [
    {
      id: 'cloud-migration',
      icon: <FaCloud />,
      title: "Cloud Migration",
      description: "Strategic planning and execution of cloud migrations with minimal disruption to your business operations.",
      features: [
        "Infrastructure Assessment",
        "Migration Strategy",
        "Data Transfer",
        "Application Modernization"
      ]
    },
    {
      id: 'security',
      icon: <FaLock />,
      title: "Security & Compliance",
      description: "Comprehensive security solutions ensuring your cloud infrastructure meets industry standards.",
      features: [
        "Security Assessment",
        "Compliance Auditing",
        "Identity Management",
        "Threat Detection"
      ]
    },
    {
      id: 'devops',
      icon: <FaCode />,
      title: "DevOps Services",
      description: "Streamline your development and operations with automated pipelines and modern practices.",
      features: [
        "CI/CD Implementation",
        "Container Orchestration",
        "Infrastructure as Code",
        "Monitoring & Logging"
      ]
    },
    {
      id: 'data',
      icon: <FaDatabase />,
      title: "Data Solutions",
      description: "Modern data architecture and analytics solutions to drive insights and decision-making.",
      features: [
        "Data Warehousing",
        "Big Data Processing",
        "Analytics Platforms",
        "Machine Learning Ops"
      ]
    },
    {
      id: 'serverless',
      icon: <FaServer />,
      title: "Serverless Computing",
      description: "Build and deploy applications without managing server infrastructure for enhanced scalability.",
      features: [
        "Function as a Service (FaaS)",
        "Event-driven Architecture",
        "Microservices Design",
        "Automated Scaling"
      ]
    },
    {
      id: 'networking',
      icon: <FaNetworkWired />,
      title: "Cloud Networking",
      description: "Design and implement secure, high-performance networking solutions for cloud environments.",
      features: [
        "VPC Architecture",
        "Load Balancer Configuration",
        "Network Security Groups",
        "Global Content Delivery"
      ]
    },
    {
      id: 'desktop',
      icon: <FaDesktop />,
      title: "Desktop as a Service",
      description: "Provide secure, virtual desktop experiences for remote teams with centralized management.",
      features: [
        "Virtual Desktop Infrastructure",
        "Remote Access Solutions",
        "Desktop Security",
        "Performance Optimization"
      ]
    },
    {
      id: 'recovery',
      icon: <FaSyncAlt />,
      title: "Disaster Recovery",
      description: "Implement robust disaster recovery solutions to ensure business continuity during disruptions.",
      features: [
        "Recovery Point Objectives",
        "Backup Strategies",
        "Cross-region Replication",
        "Failover Automation"
      ]
    }
  ];

  return (
    <Layout title="Services - Cloud IT Resources">
      <div className={styles.servicesContainer}>
        <WaveBackground />
        
        <section className={styles.servicesSection}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          
          <motion.p 
            className={styles.sectionDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive cloud solutions to accelerate your digital transformation
          </motion.p>

          <div className={styles.servicesAccordion}>
            {services.map((service, index) => {
              const parallax = calculateParallax(service.id, index);
              
              return (
                <motion.div 
                  key={service.id}
                  className={`${styles.serviceItem} ${expandedService === service.id ? styles.expanded : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    x: parallax.x,
                    y: parallax.y,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ 
                    duration: 0.3, 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20
                  }}
                >
                  <div 
                    className={styles.serviceHeader}
                    onClick={() => toggleService(service.id)}
                  >
                    <motion.div 
                      className={styles.serviceIcon}
                      whileHover={{ rotate: 5 }}
                      animate={{ 
                        scale: expandedService === service.id ? 1.1 : 1
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3>{service.title}</h3>
                    <motion.div 
                      className={styles.chevron}
                      animate={{ 
                        rotate: expandedService === service.id ? 180 : 0,
                        scale: expandedService === service.id ? 1.2 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div 
                        className={styles.serviceContent}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98]
                        }}
                      >
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {service.description}
                        </motion.p>
                        <ul>
                          {service.features.map((feature, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.3, 
                                delay: 0.1 + (i * 0.1),
                                type: "spring", 
                                stiffness: 200 
                              }}
                              whileHover={{ x: 5, color: "#64b5f6" }}
                            >
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
} 