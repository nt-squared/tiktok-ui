import classNames from 'classnames/bind';

import styles from './VideoContainer.module.scss';
import VideoCardContainer from './VideoCardContainer';
import ActionItemContainer from './ActionItemContainer';

const cx = classNames.bind(styles);

function VideoContainer({ data }) {
    return (
        <div className={cx('video-container')}>
            <VideoCardContainer />
            <ActionItemContainer />
        </div>
    );
}

export default VideoContainer;
