import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from './VideoCardContainer.module.scss';
import { HomeContext } from '~/Context/HomeContext';

const cx = classNames.bind(styles);

function VideoCardContainer() {
    const userData = useContext(HomeContext);

    return (
        <div className={cx('video-wrapper')}>
            <div className={cx('video-card-container')}>
                <canvas width="56.25" height="100" className={cx('canvas-card-holder')}></canvas>
                <div className={cx('video-player-container')}>
                    <div className={cx('div-container')}>
                        <div className={cx('basic-player-wrapper')}>
                            <video
                                autoPlay={false}
                                controls
                                className=""
                                playsInline
                                x5-playsinline="true"
                                webkit-playsinline="true"
                                tabIndex={2}
                                mediatype={'video'}
                                type="video/mp4"
                                name="media"
                                src={userData.file_url}
                            ></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCardContainer;
