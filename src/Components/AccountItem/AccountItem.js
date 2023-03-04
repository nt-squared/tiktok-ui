// Libraries
import classNames from 'classnames/bind';

// Source code
import styles from './AccountItem.modules.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <li className={cx('accountItem')}>
            <span className={cx('avatar')}>
                <Image
                    loading="lazy"
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a35b26c1df31c2d3b6947253403d2480~c5_300x300.webp?x-expires=1677981600&x-signature=gp4bm6Gw1GmqI7qw583dUXgeYOE%3D"
                    alt="avatar"
                    fallbackImage="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                />
            </span>
            <div className={cx('userInfo')}>
                <h4 className={cx('userName')}>
                    hannah
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('checkIcon')} />
                </h4>
                <p className={cx('nickName')}>hannah</p>
            </div>
        </li>
    );
}

export default AccountItem;
