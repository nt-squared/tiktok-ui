import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import styles from './AvatarAnchor.module.scss';
import Image from '~/components/Image';
import { HomeContext } from '~/Context/HomeContext';

const cx = classNames.bind(styles);

function AvatarAnchor() {
    const userData = useContext(HomeContext);

    return (
        <Link to={'/'} className={cx('avatar-anchor')}>
            <span className={cx('avatar-box')}>
                <Image
                    alt="avatar"
                    loading="lazy"
                    src={userData.user.avatar}
                    fallbackImage="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                />
            </span>
        </Link>
    );
}

export default AvatarAnchor;
