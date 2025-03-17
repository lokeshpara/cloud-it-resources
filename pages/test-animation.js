import { motion } from 'framer-motion';

export default function TestAnimation() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      flexDirection: 'column' 
    }}>
      <h1>Animation Test Page</h1>
      
      <motion.div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '20px',
          backgroundColor: 'blue',
          margin: '2rem'
        }}
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 0],
          borderRadius: ["20%", "50%", "20%"]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <p>If you can see a blue square animating above, Framer Motion is working correctly.</p>
    </div>
  );
} 