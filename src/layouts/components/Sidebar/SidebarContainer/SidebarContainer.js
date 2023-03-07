import classNames from 'classnames/bind';

import styles from './SidebarContainer.module.scss';
import ScrollBar from '../ScrollBar';
import SideBarWrapper from '../SideBarWrapper';

const cx = classNames.bind(styles);

function SideBarContainer() {
    return (
        <div className={cx('sidebar-container')}>
            <SideBarWrapper />
            <ScrollBar className={cx('sidebar-scrollbar')} />
        </div>
    );
}

export default SideBarContainer;
