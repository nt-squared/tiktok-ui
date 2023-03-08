import classNames from 'classnames/bind';

import styles from './UserContainer.module.scss';
import Button from '~/components/Button';
import UserLinkContainer from './UserLinkContainer';
import { useState } from 'react';

const cx = classNames.bind(styles);

function UserContainer() {
    const [seeMoreUser, setSeeMoreUser] = useState(false);

    return (
        <div className={cx('user-container')}>
            <p className={cx('suggest-title')}>Suggested accounts</p>
            <div className={cx('user-link-container')}>
                <UserLinkContainer seeMoreUser={seeMoreUser} />
            </div>
            <Button xsmall outline className={cx('see-all-button')} onClick={() => setSeeMoreUser(!seeMoreUser)}>
                {seeMoreUser ? 'See less' : 'See all'}
            </Button>
        </div>
    );
}

export default UserContainer;
