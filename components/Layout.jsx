import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children, title = 'Cloud.IT Resources' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Cloud.IT Resources - IT solutions and services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.siteContainer}>
        <Navbar />
        <main className={styles.mainContent}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout; 