import classNames from 'classnames/bind';

import styles from './UserContainer.module.scss';
import Button from '~/components/Button';
import UserLinkContainer from './UserLinkContainer';
import { useRef, useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function UserContainer() {
    const userLinkContainerRef = useRef();
    const buttonSeeMoreRef = useRef();

    // let userLinkContainer = userLinkContainerRef.current;
    let [height, setHeight] = useState(240);

    useEffect(() => {
        userLinkContainerRef.current.style.height = height + 'px';
    }, [height]);

    const handleSeeAll = () => {
        if (height === 240) {
            buttonSeeMoreRef.current.textContent = 'See less';
            setHeight(480);
        } else {
            buttonSeeMoreRef.current.textContent = 'See all';
            setHeight(240);
        }
    };

    return (
        <div className={cx('user-container')}>
            <p className={cx('suggest-title')}>Suggested accounts</p>
            <UserLinkContainer className={cx('user-link-container')} ref={userLinkContainerRef} />
            <Button xsmall outline className={cx('see-all-button')} onClick={handleSeeAll} ref={buttonSeeMoreRef}>
                See all
            </Button>
        </div>
    );
}

export default UserContainer;
