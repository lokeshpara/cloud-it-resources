import { useEffect, useRef } from 'react';
import styles from '../styles/CompanyGoals.module.scss';

const CompanyGoals = () => {
  const sectionRef = useRef(null);
  const waveWrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const goals = document.querySelectorAll(`.${styles.goal}`);
    goals.forEach((goal) => observer.observe(goal));

    // Add scroll handler for wave parallax
    const handleScroll = () => {
      if (waveWrapperRef.current) {
        const scrolled = window.scrollY;
        waveWrapperRef.current.style.setProperty('--scroll-y', `${scrolled * 0.001}px`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.goalsSection} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Transforming Business Through Cloud Innovation
          <span className={styles.accent}></span>
        </h2>
        
        <p className={styles.subtitle}>
          We deliver enterprise-grade cloud solutions that drive digital transformation and business growth
        </p>

        <div className={styles.goalsGrid}>
          <div className={styles.goal}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
              </svg>
            </div>
            <h3>Cloud Migration Excellence</h3>
            <p>Seamless transition to cloud infrastructure with zero downtime and comprehensive data security</p>
          </div>

          <div className={styles.goal}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 11c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4 9 4v6zm-9 10c3.75-1 7-5 7-10V6.3l-7-3.11L5 6.3V11c0 5 3.25 9 7 10z"/>
              </svg>
            </div>
            <h3>Advanced Security</h3>
            <p>Enterprise-grade security protocols with real-time threat monitoring and automated incident response</p>
          </div>

          <div className={styles.goal}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
              </svg>
            </div>
            <h3>DevOps Automation</h3>
            <p>Streamlined CI/CD pipelines and infrastructure as code for rapid, reliable deployments</p>
          </div>

          <div className={styles.goal}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-15h-2v6l5.25 3.15.75-1.23-4-2.37V7z"/>
              </svg>
            </div>
            <h3>Cost Optimization</h3>
            <p>Smart resource allocation and automated scaling to maximize ROI on cloud investments</p>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.number}>99.9%</span>
            <span className={styles.label}>Uptime Guaranteed</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>45%</span>
            <span className={styles.label}>Cost Reduction</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>1000+</span>
            <span className={styles.label}>Servers Managed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyGoals; 