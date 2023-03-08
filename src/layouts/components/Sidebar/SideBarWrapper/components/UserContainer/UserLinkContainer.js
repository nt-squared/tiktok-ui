import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import styles from './UserContainer.module.scss';
import * as searchService from '~/services/searchService';
import AccountItem from '~/components/AccountItem';
import PopperWrapper from '~/components/Popper';
import ProfileContainer from './ProfileContainer';

const cx = classNames.bind(styles);

function UserLinkContainer({ className, seeMoreUser }) {
    const stringArr = [];

    for (let i = 48; i <= 57; i++) {
        stringArr.push(i);
    }

    for (let i = 65; i <= 90; i++) {
        stringArr.push(i, i + 32);
    }
    const stringArrLength = stringArr.length;
    const randomValue = String.fromCodePoint(stringArr[Math.floor(Math.random() * stringArrLength)]);

    const [suggestAccounts, setSuggestAccounts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await searchService.search(randomValue, 'more');
            const data = res.data;

            setSuggestAccounts(data);
            console.log('fetch');
            return data;
        };

        fetchApi();
    }, []);

    let showAccount;
    seeMoreUser ? (showAccount = suggestAccounts) : (showAccount = suggestAccounts.slice(0, 5));

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
