import classNames from 'classnames/bind';
import styles from './ScrollBar.module.scss';

const cx = classNames.bind(styles);

function ScrollBar({ className }) {
    const classes = cx('scroll-bar', {
        [className]: className,
    });

    return (
        <div className={classes}>
            <div className={cx('scroll-bar-thumb')}></div>
        </div>
    );
}

export default ScrollBar;
