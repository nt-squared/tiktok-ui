import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function PopperWrapper({ children, className }) {
    return <ul className={cx('wrapper', className)}>{children}</ul>;
}

export default PopperWrapper;
