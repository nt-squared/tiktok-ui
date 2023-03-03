import clsx from 'clsx';

import styles from './DefaultLayout.module.scss';
import Header from '~/Components/Layouts/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    const inner = clsx('container', styles.inner);

    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={inner}>
                <Sidebar />
                <div className={styles.content}>{children}</div>
            </main>
        </div>
    );
}

export default DefaultLayout;