import classNames from 'classnames/bind';

import styles from './ListItemContainer.module.scss';
import AvatarAnchor from '../components/AvatarAnchor';
import TextInfoContainer from '../components/TextInfoContainer';
import VideoContainer from '../components/VideoContainer/VideoContainer';
const cx = classNames.bind(styles);

function ListItemContainer() {
    return (
        <div className={cx('recommend-list-item-container')}>
            <AvatarAnchor />
            <div className={cx('content-container')}>
                <TextInfoContainer />
                <VideoContainer />
            </div>
        </div>
    );
}

export default ListItemContainer;
