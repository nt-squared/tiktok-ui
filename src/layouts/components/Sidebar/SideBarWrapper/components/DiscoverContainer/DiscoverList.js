import classNames from 'classnames/bind';

import styles from './DiscoverContainer.module.scss';

const cx = classNames.bind(styles);

function DiscoverList({ children }) {
    return <div className={cx('discover-list')}>{children}</div>;
}

export default DiscoverList;
