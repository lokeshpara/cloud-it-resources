import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import styles from '../styles/About.module.scss';
import WaveBackground from '../components/WaveBackground';
import { FaAward, FaUsers, FaGlobe, FaRocket, FaHandshake, FaChartLine, FaLightbulb } from 'react-icons/fa';

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
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Transforming Businesses Through Cloud Innovation
              </motion.h1>
              <motion.p 
                className={styles.heroSubtitle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Cloud IT Resources is a leading cloud consultancy firm helping enterprises navigate their digital transformation journey with innovative cloud solutions and expert guidance.
              </motion.p>

              <motion.div 
                className={styles.valueProps}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className={styles.valueProp}>
                  <FaHandshake className={styles.valueIcon} />
                  <div>
                    <h3>Trusted Partner</h3>
                    <p>Strategic partnership with industry leaders</p>
                  </div>
                </div>
                <div className={styles.valueProp}>
                  <FaChartLine className={styles.valueIcon} />
                  <div>
                    <h3>Proven Results</h3>
                    <p>40% average cost reduction for clients</p>
                  </div>
                </div>
                <div className={styles.valueProp}>
                  <FaLightbulb className={styles.valueIcon} />
                  <div>
                    <h3>Innovation Focus</h3>
                    <p>Cutting-edge cloud solutions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className={styles.heroRight}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className={styles.achievementsGrid}
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className={styles.achievementCard}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.5
                        }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                    }}
                  >
                    <div className={styles.achievementIcon}>
                      {achievement.icon}
                    </div>
                    <span className={styles.achievementNumber}>
                      {achievement.number}
                    </span>
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
                <img src="/aws-certified.png" alt="AWS Certified Partner" />
                <img src="/azure-certified.png" alt="Microsoft Azure Partner" />
                <img src="/gcp-certified.png" alt="Google Cloud Partner" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section 
          className={styles.timelineSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Journey</h2>
            <div className={styles.timeline}>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
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

        <section className={styles.missionSection}>
          <div className={styles.container}>
            <motion.div 
              className={styles.twoColumnGrid}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={styles.content}>
                <h2>Our Mission</h2>
                <p>
                  At Cloud IT Resources, our mission is to empower organizations to achieve their full potential through innovative cloud solutions. We believe in making advanced technology accessible and manageable for businesses of all sizes.
                </p>
                <p>
                  With years of experience and a deep understanding of cloud technologies, we help our clients navigate their digital transformation journey with confidence and success.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <div className={styles.missionImage} />
              </div>
            </motion.div>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <div className={styles.container}>
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Core Values
            </motion.h2>
            <motion.div 
              className={styles.valuesGrid}
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className={styles.valueCard}
                  variants={fadeInUp}
                >
                  <div className={styles.iconWrapper}>
                    {value.icon}
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's work together to build a stronger, more efficient, and future-ready organization.
            </motion.p>
            <motion.a
              href="/contact"
              className={styles.ctaButton}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </section>
      </div>
    </Layout>
  );
} 