import classNames from 'classnames/bind';

import styles from './ActionItemContainer.module.scss';
import { HeartIcon, EllipsisIcon, ShareIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function ActionItemContainer({ data }) {
    return (
        <div className={cx('action-container')}>
            <button type="button" className={cx('button-action')}>
                <span className={cx('icon-wrapper')}>
                    <HeartIcon />
                </span>
                <strong className={cx('strong-text')}>174.8K</strong>
            </button>
            <button type="button" className={cx('button-action')}>
                <span className={cx('icon-wrapper')}>
                    <EllipsisIcon />
                </span>
                <strong className={cx('strong-text')}>977</strong>
            </button>
            <button type="button" className={cx('button-action')}>
                <span className={cx('icon-wrapper')}>
                    <ShareIcon />
                </span>
                <strong className={cx('strong-text')}>595</strong>
            </button>
        </div>
    );
}

export default ActionItemContainer;
