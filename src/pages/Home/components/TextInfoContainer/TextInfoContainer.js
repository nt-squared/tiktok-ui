import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import styles from './TextInfoContainer.module.scss';
import Button from '~/components/Button';
import { MusicNoteIcon } from '~/components/Icon';
import { HomeContext } from '~/Context/HomeContext';
const cx = classNames.bind(styles);

function TextInfoContainer() {
    const userData = useContext(HomeContext);

    return (
        <div className={cx('text-info-container')}>
            <div className={cx('author-container')}>
                <Link to={'/'} className={cx('author-anchor')}>
                    <h3 className={cx('author-username')}>
                        {userData.user.first_name} {userData.user.last_name}
                    </h3>
                    <h4 className={cx('author-nickname')}>{userData.user.nickname}</h4>
                </Link>
                <Button outline xsmall className={cx('video-follow-button')}>
                    Follow
                </Button>
            </div>
            <div className={cx('author-hashtag')}>
                <Link to="/" className={cx('hashtag-text')}>
                    <strong>#uncloggingdrains</strong>
                </Link>
                <Link to="/" className={cx('hashtag-text')}>
                    <strong>#cleaningtiktok</strong>
                </Link>
                <Link to="/" className={cx('hashtag-text')}>
                    <strong>#relax</strong>
                </Link>
                <Link to="/" className={cx('hashtag-text')}>
                    <strong>#drains</strong>
                </Link>
                <Link to="/" className={cx('hashtag-text')}>
                    <strong>#satisfying</strong>
                </Link>
                <Link to="/" className={cx('hashtag-text')}>
                    <strong>#fyp</strong>
                </Link>
            </div>
            <h4>
                <Link to={'/'}>
                    <MusicNoteIcon className={cx('music-note-icon')} />
                    orginal sound - Unclogging Drains
                </Link>
            </h4>
        </div>
    );
}

export default TextInfoContainer;
