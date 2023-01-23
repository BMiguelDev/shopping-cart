import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layouts.module.scss';
import { useEffect, useRef } from 'react';

export default function PageLayout() {

  const appDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if(appDivRef.current) appDivRef.current.style.minHeight = `${window.innerHeight}px`;
    }
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  

  return (
    <div ref={appDivRef} className={styles.app_container}>
        <Navbar/>
        <Outlet />
        <Footer />
    </div>
  )
}
