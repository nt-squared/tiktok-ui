import classNames from 'classnames/bind';

import styles from './VideoCardContainer.module.scss';

const cx = classNames.bind(styles);

function VideoCardContainer({ data }) {
    return (
        <div className={cx('video-wrapper')}>
            <div className={cx('video-card-container')}>
                <canvas width="56.25" height="100" className={cx('canvas-card-holder')}></canvas>
                <div className={cx('video-player-container')}>
                    <div className={cx('div-container')}>
                        <div className={cx('basic-player-wrapper')}>
                            <video
                                autoPlay
                                controls
                                className=""
                                // playsinline="true"
                                // x5-playsinline="true"
                                // webkit-playsinline="true"
                                tabIndex="2"
                                mediatype="video"
                                type="video/mp4"
                                name="media"
                                src="https://files.fullstack.edu.vn/f8-tiktok/videos/96-631020f76bee3.mp4"
                            ></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCardContainer;
