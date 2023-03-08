import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from './ActionItemContainer.module.scss';
import ShareOption from '../ShareOption';
import { HeartIcon, EllipsisIcon, ShareIcon } from '~/components/Icon';
import { HomeContext } from '~/Context/HomeContext';

const cx = classNames.bind(styles);

function ActionItemContainer() {
    const userData = useContext(HomeContext);

    return (
        <div className={cx('action-container')}>
            <button type="button" className={cx('button-action')}>
                <span className={cx('icon-wrapper')}>
                    <HeartIcon />
                </span>
                <strong className={cx('strong-text')}>{userData.likes_count}</strong>
            </button>
            <button type="button" className={cx('button-action')}>
                <span className={cx('icon-wrapper')}>
                    <EllipsisIcon />
                </span>
                <strong className={cx('strong-text')}>{userData.comments_count}</strong>
            </button>
            <ShareOption>
                <button type="button" className={cx('button-action')}>
                    <span className={cx('icon-wrapper')}>
                        <ShareIcon />
                    </span>
                    <strong className={cx('strong-text')}>{userData.shares_count}</strong>
                </button>
            </ShareOption>
        </div>
    );
}

export default ActionItemContainer;
