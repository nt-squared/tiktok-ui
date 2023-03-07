import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AvatarAnchor.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AvatarAnchor({ data }) {
    return (
        <Link to={'/'} className={cx('avatar-anchor')}>
            <span className={cx('avatar-box')}>
                <Image
                    loading="lazy"
                    src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                    alt="avatar"
                    fallbackImage="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                />
            </span>
        </Link>
    );
}

export default AvatarAnchor;
