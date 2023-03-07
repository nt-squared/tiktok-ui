import classNames from 'classnames/bind';

import styles from './DiscoverContainer.module.scss';
import discoverData from './DiscoverData';
import DiscoverItem from './DiscoverItem';
import DiscoverList from './DiscoverList';

const cx = classNames.bind(styles);

function DiscoverContainer() {
    return (
        <div className={cx('discover-container')}>
            <p className={cx('discover-title')}>Discover</p>
            <DiscoverList>
                {discoverData.map((data, index) => (
                    <DiscoverItem key={index} data={data} />
                ))}
            </DiscoverList>
        </div>
    );
}

export default DiscoverContainer;
