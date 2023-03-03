// Libraries
import clsx from 'clsx';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEllipsisVertical,
    faLanguage,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';

// Source code
import styles from './Header.module.scss';
import images from '~/assets/images';
import { PopperWrapper } from '~/Components/Popper';
import { AccountItem } from '~/Components/AccountItem';
import { Button } from '~/Components/Button';
import { Menu } from '~/Components/Popper/Menu';

const inner = clsx('container', styles.inner);
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        text: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        text: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        text: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 2000);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={inner}>
                {/* Logo */}
                <div className={styles.logoContainer}>
                    <Link to="/" className={cx('logo')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                {/* Search Bar */}
                <div className={cx('searchWrapper')}>
                    <div className={cx('searchBar')}>
                        <Tippy
                            interactive
                            visible={searchResult.length > 0}
                            render={(attrs) => (
                                <div className={cx('searchResults')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <div className={cx('searchAccount')}>Account</div>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('searchContainer')}>
                                <input
                                    type="search"
                                    placeholder="Search accounts and videos"
                                    spellCheck={false}
                                    className={cx('searchInput')}
                                />
                                <button className={cx('clearIcon')}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                                {/* <button>
                                    <FontAwesomeIcon icon={faSpinner} />
                                </button> */}
                                <span></span>
                                <button type="submit" className={cx('searchIcon')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </Tippy>
                    </div>
                </div>

                <div className={cx('actionButtons')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-button')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
