import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './Layouts.module.scss';

export default function Footer() {
    const date = new Date();
    let currentYear = date.getFullYear();

    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_text}>
                <p>Copyright © {currentYear} Bruno Miguel</p>
            </div>
            <div className={styles.footer_icon_container}>
                    <a href="https://github.com/BMiguelDev/shopping-cart" target="_blank" rel="noreferrer" aria-label="Check the app's code">
                        <FontAwesomeIcon icon={faCode} />
                    </a>
                    <a href="https://google.com" target="_blank" rel="noreferrer" aria-label="My Website">
                        <FontAwesomeIcon icon={faDesktop} />
                    </a>
                    <a href="https://github.com/BMiguelDev" target="_blank" rel="noreferrer" aria-label="Github Profile">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/BMiguelDev" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
        </footer>
    );
}
