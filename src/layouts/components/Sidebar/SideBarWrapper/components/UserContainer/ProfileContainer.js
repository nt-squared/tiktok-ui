import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './UserContainer.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProfileContainer({ data }) {
    return (
        <>
            <div className={cx('profile-header')}>
                <Link to={`/tiktok-ui/`} className={cx('profile-header-link')}>
                    <span>
                        <Image
                            loading="lazy"
                            src={data.avatar}
                            alt="avatar"
                            fallbackImage="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                        />
                    </span>
                </Link>
                <Button xsmall primary className={cx('follow-button')}>
                    Follow
                </Button>
            </div>
            <Link to={'/tiktok-ui/'} className={cx('profile-username')}>
                <span>{data.full_name}</span>
                {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('checkIcon')} />}
            </Link>
            <br />
            <Link to={'/tiktok-ui/'} className={cx('profile-nickname')}>
                <span>{data.nickname}</span>
            </Link>
            <p className={cx('profile-user-stat')}>
                <span className={cx('user-follower', 'count')}>{data.followers_count}</span>
                <span className={cx('user-follower')}>Follwers</span>
                <span className={cx('user-like', 'count')}>{data.likes_count}</span>
                <span className={cx('user-like')}>Likes</span>
            </p>
        </>
    );
}

export default ProfileContainer;
