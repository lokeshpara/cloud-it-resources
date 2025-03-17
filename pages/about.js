import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import styles from '../styles/About.module.scss';

export default function About() {
  return (
    <Layout title="About Us - Cloud.IT Resources">
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <h1>About Cloud.IT Resources</h1>
            <p>Learn about our journey, mission, and the team behind our success</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={styles.ourStory}>
        <div className="container">
          <div className={styles.twoColumnGrid}>
            <AnimatedSection className={styles.storyContent}>
              <h2>Our Story</h2>
              <p>Cloud.IT Resources was founded in 2013 with a clear vision: to help businesses harness the power of technology to achieve their goals.</p>
              <p>What started as a small team of passionate IT professionals has grown into a comprehensive technology partner trusted by businesses across various industries.</p>
              <p>Over the years, we've evolved alongside the rapidly changing technology landscape, continuously expanding our expertise to provide cutting-edge solutions for our clients.</p>
            </AnimatedSection>
            <AnimatedSection className={styles.storyImage} delay={0.3}>
              <div className={styles.imagePlaceholder}>Image here</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className={styles.missionValues}>
        <div className="container">
          <AnimatedSection>
            <h2 className="sectionTitle">Our Mission & Values</h2>
            <p className="sectionSubtitle">What drives us and defines our approach</p>
          </AnimatedSection>

          <div className={styles.valuesGrid}>
            {[
              {
                title: 'Client Success',
                description: 'We measure our success by the success of our clients. Their growth and achievement of objectives is our primary goal.',
                icon: '🏆',
              },
              {
                title: 'Innovation',
                description: 'We continuously explore new technologies and approaches to provide the most effective solutions.',
                icon: '💡',
              },
              {
                title: 'Integrity',
                description: 'We operate with transparency and honesty in all our interactions and recommendations.',
                icon: '🤝',
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from technical implementation to client communication.',
                icon: '⭐',
              },
            ].map((value, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className="container">
          <AnimatedSection>
            <h2 className="sectionTitle">Our Leadership Team</h2>
            <p className="sectionSubtitle">Meet the experts leading our company</p>
          </AnimatedSection>

          <div className={styles.teamGrid}>
            {[
              {
                name: 'Jane Smith',
                position: 'CEO & Founder',
                bio: 'Jane has over 15 years of experience in the IT industry and leads our company vision and strategy.',
              },
              {
                name: 'Michael Johnson',
                position: 'CTO',
                bio: 'Michael oversees our technical operations and ensures we stay at the cutting edge of technology.',
              },
              {
                name: 'Sarah Williams',
                position: 'Head of Client Services',
                bio: 'Sarah ensures our clients receive exceptional service and support throughout their journey with us.',
              },
              {
                name: 'David Chen',
                position: 'Lead Solutions Architect',
                bio: 'David designs and implements custom IT solutions tailored to our clients specific needs.',
              },
            ].map((member, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1} className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <div className={styles.photoPlaceholder}>Photo</div>
                </div>
                <h3>{member.name}</h3>
                <p className={styles.position}>{member.position}</p>
                <p>{member.bio}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 