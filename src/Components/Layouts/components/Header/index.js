import clsx from 'clsx';
import styles from './Header.module.scss';

function Header() {
    const inner = clsx('container', styles.inner);
    return (
        <header className={styles.wrapper}>
            <div className={inner}>
                {/* Logo */}
                {/* Search Bar */}
            </div>
        </header>
    );
}

export default Header;
