import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${styles.header} ${!visible && styles.hidden}`}>
      <div className={styles.container}>
        <Link href="/" passHref legacyBehavior>
          <a className={styles.logo}>
            <Image src="/images/logo.svg" alt="Cloud.IT Resources" width={180} height={60} priority />
          </a>
        </Link>
        <motion.button
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          animate={isOpen ? "open" : "closed"}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>
        <nav className={`${styles.desktopNav} ${isOpen ? styles.open : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path} passHref legacyBehavior>
                  <a onClick={toggleMenu}>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 