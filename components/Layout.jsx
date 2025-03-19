import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import CompanyGoals from './CompanyGoals';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children, title = 'Cloud.IT Resources' }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Cloud.IT Resources - IT solutions and services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.siteContainer}>
        <Navbar />
        <main className={styles.mainContent}>{children}</main>
        {isHomePage && <CompanyGoals />}
        <Footer />
      </div>
    </>
  );
};

export default Layout; 