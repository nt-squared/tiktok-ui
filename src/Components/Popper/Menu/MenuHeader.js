// Libraries
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

// Source code
import styles from './Menu.module.scss';
import { LeftArowIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function MenuHeader({ headerText, onBack }) {
    return (
        <div className={cx('menu-header')} onClick={onBack}>
            <span className={cx('back-button')}>
                <LeftArowIcon />
            </span>
            <p className={cx('header-content')}>{headerText}</p>
        </div>
    );
}

MenuHeader.propTypes = {
    headerText: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default MenuHeader;
