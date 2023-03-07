import classNames from 'classnames/bind';

import styles from './DiscoverContainer.module.scss';

const cx = classNames.bind(styles);

function DiscoverItem({ data }) {
    return (
        <div className={cx('discover-item')}>
            <data.icon className={cx('discover-icon')} />
            <p className={cx('discover-text')}>{data.text}</p>
        </div>
    );
}

export default DiscoverItem;
