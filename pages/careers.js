import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import styles from '../styles/Careers.module.scss';
import Link from 'next/link';

export default function Careers() {
  const jobPositions = [
    {
      title: 'Cloud Solutions Architect',
      type: 'Full-time',
      location: 'San Francisco, CA (Hybrid)',
      description: 'We are looking for an experienced Cloud Solutions Architect to design and implement innovative cloud solutions for our clients.',
      requirements: [
        'Bachelor'/'s degree in Computer Science or related field',
        '5+ years of experience with major cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of cloud architecture principles',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Excellent communication and problem-solving skills'
      ]
    },
    {
      title: 'Cybersecurity Analyst',
      type: 'Full-time',
      location: 'Remote (US-based)',
      description: 'Join our security team to help protect our clients'/' digital assets and implement robust security measures.',
      requirements: [
        'Bachelor'/'s degree in Cybersecurity or related field',
        '3+ years of experience in cybersecurity',
        'Knowledge of security frameworks (NIST, ISO 27001)',
        'Experience with security tools and technologies',
        'Security certifications (CISSP, CEH, or equivalent) preferred'
      ]
    },
    {
      title: 'Senior Software Developer',
      type: 'Full-time',
      location: 'San Francisco, CA or Remote',
      description: 'We are seeking a talented Senior Software Developer to create custom solutions for our enterprise clients.',
      requirements: [
        'Bachelor'/'s degree in Computer Science or related field',
        '5+ years of experience in software development',
        'Proficiency in JavaScript/TypeScript, React, and Node.js',
        'Experience with cloud-native application development',
        'Strong problem-solving skills and attention to detail'
      ]
    },
    {
      title: 'IT Project Manager',
      type: 'Full-time',
      location: 'San Francisco, CA (Hybrid)',
      description: 'Lead IT implementation projects from planning to successful delivery for our clients.',
      requirements: [
        'Bachelor'/'s degree in IT, Business, or related field',
        '4+ years of IT project management experience',
        'PMP certification preferred',
        'Experience with Agile and traditional project methodologies',
        'Strong leadership and client communication skills'
      ]
    }
  ];

  return (
    <Layout title="Careers - Cloud.IT Resources">
      {/* Hero Section */}
      <section className={styles.careersHero}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <h1>Join Our Team</h1>
            <p>Build your career at Cloud.IT Resources and help shape the future of IT</p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className={styles.whyJoinUs}>
        <div className="container">
          <AnimatedSection>
            <h2 className="sectionTitle">Why Cloud.IT Resources?</h2>
            <p className="sectionSubtitle">Join a team that values innovation, growth, and collaboration</p>
          </AnimatedSection>

          <div className={styles.benefitsGrid}>
            {[
              {
                title: 'Professional Growth',
                description: 'Continuous learning opportunities, certifications, and career advancement paths',
                icon: '📈'
              },
              {
                title: 'Innovative Environment',
                description: 'Work with cutting-edge technologies and contribute to meaningful projects',
                icon: '💡'
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible work arrangements and policies that support your wellbeing',
                icon: '⚖️'
              },
              {
                title: 'Competitive Benefits',
                description: 'Comprehensive health coverage, retirement plans, and competitive compensation',
                icon: '🏆'
              },
              {
                title: 'Collaborative Culture',
                description: 'Join a supportive team that values diverse perspectives and ideas',
                icon: '🤝'
              },
              {
                title: 'Make an Impact',
                description: 'Contribute to solutions that transform businesses and drive innovation',
                icon: '🚀'
              }
            ].map((benefit, index) => (
              <AnimatedSection key={index} delay={0.1 + index * 0.1} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className={styles.openPositions}>
        <div className="container">
          <AnimatedSection>
            <h2 className="sectionTitle">Open Positions</h2>
            <p className="sectionSubtitle">Explore current opportunities to join our growing team</p>
          </AnimatedSection>

          <div className={styles.jobList}>
            {jobPositions.map((job, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1} className={styles.jobCard}>
                <div className={styles.jobHeader}>
                  <h3>{job.title}</h3>
                  <div className={styles.jobMeta}>
                    <span className={styles.jobType}>{job.type}</span>
                    <span className={styles.jobLocation}>{job.location}</span>
                  </div>
                </div>
                <p className={styles.jobDescription}>{job.description}</p>
                <div className={styles.jobRequirements}>
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={`/contact?job=${job.title}`} className={styles.applyBtn}>
                    Apply Now
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className="container">
          <AnimatedSection>
            <h2>Don't See Your Perfect Role?</h2>
            <p>We're always looking for talented individuals to join our team. Send us your resume for future opportunities.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.ctaButton}
            >
              <Link href="/contact?subject=General Application" className={styles.primaryBtn}>
                Submit General Application
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
} 