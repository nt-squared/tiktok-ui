// Libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// Source code
import styles from './AccountItem.modules.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('accountItem')}>
            <span className={cx('avatar')}>
                <Image
                    loading="lazy"
                    src={data.avatar}
                    alt="avatar"
                    fallbackImage="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                />
            </span>
            <div className={cx('userInfo')}>
                <h4 className={cx('userName')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('checkIcon')} />}
                </h4>
                <p className={cx('nickName')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
