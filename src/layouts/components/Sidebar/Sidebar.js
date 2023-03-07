import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import SideBarContainer from './SidebarContainer';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <SideBarContainer />
        </aside>
    );
}

export default Sidebar;
