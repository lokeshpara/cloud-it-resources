import React from 'react';
import styles from '../styles/WaveBackground.module.scss';

const WaveBackground = () => {
  return (
    <div className={styles.waveWrapper}>
      <div className={`${styles.wave} ${styles.wave1}`}></div>
      <div className={`${styles.wave} ${styles.wave2}`}></div>
      <div className={`${styles.wave} ${styles.wave3}`}></div>
    </div>
  );
};

export default WaveBackground; 