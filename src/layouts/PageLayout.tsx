import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layouts.module.scss';

export default function PageLayout() {
  return (
    <div className={styles.app_container}>
        <Navbar/>
        <Outlet />
        <Footer />
    </div>
  )
}
