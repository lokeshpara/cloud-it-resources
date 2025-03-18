import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.company}>
            <h3>Cloud.IT Resources</h3>
            <p>Leading provider of innovative cloud solutions and IT services, empowering businesses to thrive in the digital age.</p>
          
          </div>
          
          <div className={styles.expertise}>
            <h4>Our Expertise</h4>
            <ul>
              <li>Cloud Infrastructure & Migration</li>
              <li>DevOps & Automation</li>
              <li>Cybersecurity Solutions</li>
              <li>Digital Transformation</li>
              <li>24/7 IT Support</li>
            </ul>
          </div>
          
          <div className={styles.contact}>
            <h4>Contact Information</h4>
            <address>
              <div className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                </svg>
                <div>
                  <p>123 Technology Place</p>
                  <p>San Francisco, CA 94123</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div>
                  <p>Email: info@cloudit.resources</p>
                  <p>Support: support@cloudit.resources</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                </svg>
                <div>
                  <p>Main: (555) 123-4567</p>
                  <p>Support: (555) 987-6543</p>
                </div>
              </div>
            </address>
          </div>
          
          <div className={styles.hours}>
            <h4>Business Hours</h4>
            <ul>
              <li>
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM PST</span>
              </li>
              <li>
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM PST</span>
              </li>
              <li>
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
              <li className={styles.support}>
                <span>24/7 Technical Support Available</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Cloud.IT Resources. All rights reserved.</p>
          <div className={styles.legal}>
            <a>Created by</a>
            <span>•</span>
            <Link href="https://github.com/lokeshpara">Lokesh Para</Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 