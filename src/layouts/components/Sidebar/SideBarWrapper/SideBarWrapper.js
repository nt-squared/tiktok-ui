import classNames from 'classnames/bind';

import styles from './SideBarWrapper.module.scss';
import MainNavContainer from './components/MainNavContainer';
import FrameContainer from './components/FrameContainer';
import UserContainer from './components/UserContainer';
import DiscoverContainer from './components/DiscoverContainer';
import FooterContainer from './components/FooterContainer';

const cx = classNames.bind(styles);

function SideBarWrapper() {
    return (
        <div className={cx('sidebar-wrapper')}>
            <MainNavContainer />
            <FrameContainer />
            <UserContainer />
            <DiscoverContainer />
            <FooterContainer />
        </div>
    );
}

export default SideBarWrapper;
