import classNames from 'classnames/bind';

import styles from './MainNavContainer.module.scss';
import NavItem from './NavItem';
import navData from './NavData';

const cx = classNames.bind(styles);

function MainNavContainer() {
    return (
        <nav className={cx('main-nav-container')}>
            {navData.map((data, index) => (
                <NavItem key={index} data={data}></NavItem>
            ))}
        </nav>
    );
}

export default MainNavContainer;
