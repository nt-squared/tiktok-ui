import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function PopperWrapper({ children }) {
    return <ul className={cx('wrapper')}>{children}</ul>;
}

export default PopperWrapper;
