import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import styles from './UserContainer.module.scss';
import AccountItem from '~/components/AccountItem';
import PopperWrapper from '~/components/Popper';
import ProfileContainer from './ProfileContainer';

const cx = classNames.bind(styles);

function UserLinkContainer({ className, seeMoreUser }) {
    const [suggestAccounts, setSuggestAccounts] = useState([]);

    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=a&type=more`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data);
                setSuggestAccounts(res.data);
            });
    }, []);

    let showAccount = suggestAccounts;

    !seeMoreUser && (showAccount = suggestAccounts.slice(0, 5));

    return (
        <>
            {showAccount.map((acc, index) => (
                <div key={index}>
                    <HeadlessTippy
                        interactive
                        delay={[500, 0]}
                        placement="bottom"
                        offset={[-100, 5]}
                        render={(attr) => (
                            <PopperWrapper className={cx('profile-container')} {...attr} tabIndex="-1">
                                <ProfileContainer data={acc} />
                            </PopperWrapper>
                        )}
                    >
                        <div>
                            <AccountItem data={acc} className={cx('suggest-account-link')} />
                        </div>
                    </HeadlessTippy>
                </div>
            ))}
        </>
    );
}

export default UserLinkContainer;
