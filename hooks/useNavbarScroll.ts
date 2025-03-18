import { useState, useEffect } from 'react';

export const useNavbarScroll = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar only when at top (0-20px)
      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else {
        // Hide navbar when:
        // 1. Scrolling down beyond 20px
        // 2. Scrolling up but not yet reached 5px
        if (currentScrollY > 20 || (currentScrollY > 5 && currentScrollY < lastScrollY)) {
          setIsVisible(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return isVisible;
}; 