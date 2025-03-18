import { useEffect, useCallback, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { FaCloud, FaServer, FaDatabase, FaShieldAlt, FaNetworkWired } from 'react-icons/fa';
import Layout from '../components/Layout';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const moveX = (clientX - innerWidth / 2) / innerWidth;
    const moveY = (clientY - innerHeight / 2) / innerHeight;

    const title = document.querySelector(`.${styles.heroTitle}`) as HTMLElement;
    const clouds = document.querySelectorAll(`.${styles.cloud}`);
    const techIcons = document.querySelectorAll(`.${styles.techIcon}`);

    if (title) {
      title.style.transform = `translate(${moveX * 20}px, ${moveY * 20}px)`;
    }

    clouds.forEach((cloud, index) => {
      const speed = (index + 1) * 2;
      (cloud as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
    });

    techIcons.forEach((icon, index) => {
      const speed = (index + 1) * 1.5;
      (icon as HTMLElement).style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
    });
  }, []);

  const scrollToFeatures = useCallback(() => {
    const featuresSection = document.querySelector(`.${styles.featuresGrid}`);
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    document.querySelectorAll(`.${styles.featureCard}`).forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      <div className={`${styles.container} ${isLoaded ? styles.loaded : ''}`}>
        <Head>
          <title>Cloud IT Resources - Modern Cloud Solutions</title>
          <meta name="description" content="Transform your business with our modern cloud solutions and IT resources." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.waveWrapper}>
          <div className={`${styles.wave} ${styles.wave1}`}></div>
          <div className={`${styles.wave} ${styles.wave2}`}></div>
          <div className={`${styles.wave} ${styles.wave3}`}></div>
        </div>

        <main className={styles.heroSection} onMouseMove={handleMouseMove}>
          <div className={styles.cloudIcons}>
            <FaCloud className={styles.cloud} size={100} />
            <FaCloud className={styles.cloud} size={80} />
            <FaCloud className={styles.cloud} size={120} />
          </div>
          
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Innovative IT Solutions for Your Business
            </h1>
            <p className={styles.heroSubtitle}>
              Cloud.IT Resources helps businesses transform their IT infrastructure with cutting-edge technologies.
              We deliver secure, scalable, and efficient cloud solutions tailored to your needs.
            </p>
            
            <div className={styles.heroButtons}>
              <button onClick={scrollToFeatures} className={`${styles.heroButton} ${styles.primary}`}>
                Our Services
              </button>
              <button className={`${styles.heroButton} ${styles.secondary}`}>
                Contact Us
              </button>
            </div>

            <div className={styles.techIcons}>
              <FaCloud className={styles.techIcon} title="Cloud Solutions" />
              <FaServer className={styles.techIcon} title="Server Infrastructure" />
              <FaDatabase className={styles.techIcon} title="Data Management" />
              <FaShieldAlt className={styles.techIcon} title="Security" />
              <FaNetworkWired className={styles.techIcon} title="Network Solutions" />
            </div>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3>Cloud Infrastructure</h3>
              <p>Build scalable and secure cloud infrastructure tailored to your business needs with our expert guidance.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>DevOps Solutions</h3>
              <p>Streamline your development and operations with modern DevOps practices and automation tools.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Security & Compliance</h3>
              <p>Ensure your cloud infrastructure meets the highest security standards and compliance requirements.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>24/7 Support</h3>
              <p>Get round-the-clock support from our team of certified cloud experts whenever you need assistance.</p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
} 