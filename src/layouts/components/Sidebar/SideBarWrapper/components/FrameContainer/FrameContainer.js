import classNames from 'classnames/bind';

import styles from './FrameContainer.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function FrameContainer() {
    return (
        <div className={cx('frame-container')}>
            <p className={cx('frame-text')}>Log in to follow creators, like videos, and view comments.</p>
            <Button large outline className={cx('frame-button')}>
                Log in
            </Button>
        </div>
    );
}

export default FrameContainer;
