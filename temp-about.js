import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import styles from '../styles/About.module.scss';
import WaveBackground from '../components/WaveBackground';
import { FaAward, FaUsers, FaGlobe, FaRocket, FaHandshake, FaChartLine, FaLightbulb } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { SiGooglecloud, SiAmazonaws } from 'react-icons/si';

const achievements = [
  {
    icon: <FaAward />,
    number: "10+",
    label: "Years Experience",
    description: "Delivering enterprise cloud solutions"
  },
  {
    icon: <FaUsers />,
    number: "200+",
    label: "Enterprise Clients",
    description: "Across various industries"
  },
  {
    icon: <FaGlobe />,
    number: "15+",
    label: "Countries",
    description: "Global presence and support"
  },
  {
    icon: <FaRocket />,
    number: "500+",
    label: "Projects Delivered",
    description: "Successfully completed"
  }
];

const milestones = [
  {
    year: "2013",
    title: "Company Founded",
    description: "Started with a vision to transform cloud computing"
  },
  {
    year: "2015",
    title: "Cloud Partnership",
    description: "Became certified partners with AWS, Azure, and GCP"
  },
  {
    year: "2018",
    title: "Global Expansion",
    description: "Extended operations to 15+ countries"
  },
  {
    year: "2023",
    title: "Industry Leader",
    description: "Recognized as top cloud consultancy firm"
  }
];

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  const values = [
    {
      icon: <FaUsers />,
      title: 'Customer Focus',
      description: 'We put our clients first, understanding their unique needs and delivering tailored solutions that drive success.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We stay ahead of the curve, embracing cutting-edge technologies and creative solutions to solve complex challenges.'
    },
    {
      icon: <FaRocket />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, maintaining the highest standards of quality and professionalism.'
    },
    {
      icon: <FaHandshake />,
      title: 'Partnership',
      description: 'We build lasting relationships with our clients, working together as trusted partners in their digital journey.'
    }
  ];

  return (
    <Layout title="About Us - Cloud IT Resources">
      <div className={styles.aboutContainer}>
        <WaveBackground />

        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <motion.div
              className={styles.heroLeft}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Transforming Businesses Through Cloud Innovation
              </motion.h1>
              <motion.p
                className={styles.heroSubtitle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Cloud IT Resources is a leading cloud consultancy firm helping enterprises navigate their digital transformation journey with innovative cloud solutions and expert guidance.
              </motion.p>

              <motion.div
                className={styles.valueProps}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className={styles.valueProp}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut"
                        }
                      }
                    }}
                    whileHover={{
                      x: 20,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <span className={styles.valueIcon}>{value.icon}</span>
                    <div>
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.heroRight}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className={styles.achievementsGrid}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className={styles.achievementCard}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut"
                        }
                      }
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}
                  >
                    <motion.div
                      className={styles.achievementIcon}
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <motion.span
                      className={styles.achievementNumber}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {achievement.number}
                    </motion.span>
                    <span className={styles.achievementLabel}>
                      {achievement.label}
                    </span>
                    <p className={styles.achievementDesc}>
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className={styles.certifications}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className={styles.certificationIcon}>
                  <SiAmazonaws className={styles.cloudIcon} size={48} />
                  <span>AWS</span>
                </div>
                <div className={styles.certificationIcon}>
                  <VscAzure className={styles.cloudIcon} size={48} />
                  <span>Azure</span>
                </div>
                <div className={styles.certificationIcon}>
                  <SiGooglecloud className={styles.cloudIcon} size={48} />
                  <span>GCP</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section
          className={styles.timelineSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.container}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Journey
            </motion.h2>
            <div className={styles.timeline}>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className={styles.timelineContent}>
                    <span className={styles.year}>{milestone.year}</span>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}



