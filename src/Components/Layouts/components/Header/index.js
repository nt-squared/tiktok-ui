import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';

function Header() {
    const inner = clsx('container', styles.inner);
    return (
        <header className={styles.wrapper}>
            <div className={inner}>
                {/* Logo */}
                <div className={styles.logoContainer}>
                    <Link to="/" className={styles.logo}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                {/* Search Bar */}
                <div className={styles.searchWrapper}>
                    <div className={styles.searchContainer}>
                        <input
                            type="search"
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                            className={styles.searchInput}
                        />
                        <button className={styles.clearIcon}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* <button>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button> */}
                        <span></span>
                        <button type="submit" className={styles.searchIcon}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>

                <div>{/* action field */}</div>
            </div>
        </header>
    );
}

export default Header;
