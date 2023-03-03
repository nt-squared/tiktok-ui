import classNames from 'classnames/bind';
import styles from './AccountItem.modules.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <li className={cx('accountItem')}>
            <span className={cx('avatar')}>
                <img
                    loading="lazy"
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a35b26c1df31c2d3b6947253403d2480~c5_300x300.webp?x-expires=1677981600&x-signature=gp4bm6Gw1GmqI7qw583dUXgeYOE%3D"
                    alt="avatar"
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
