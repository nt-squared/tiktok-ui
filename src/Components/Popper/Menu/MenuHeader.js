// Libraries
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

// Source code
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuHeader({ headerText, onBack }) {
    return (
        <div className={cx('menu-header')} onClick={onBack}>
            <span className={cx('back-button')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <p className={cx('header-content')}>{headerText}</p>
        </div>
    );
}

export default MenuHeader;
