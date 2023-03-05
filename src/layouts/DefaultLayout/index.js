import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    const inner = clsx(styles.inner);

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

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
