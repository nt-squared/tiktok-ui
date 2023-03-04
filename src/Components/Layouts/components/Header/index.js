// Libraries
import clsx from 'clsx';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Source code
import styles from './Header.module.scss';
import images from '~/assets/images';
import { PopperWrapper } from '~/Components/Popper';
import { AccountItem } from '~/Components/AccountItem';
import { Button } from '~/Components/Button';
import { Menu } from '~/Components/Popper/Menu';
import {
    SearchIcon,
    PlusIcon,
    MoreButton,
    LanguageIcon,
    QuestionIcon,
    KeyboardIcon,
    SpinnerIcon,
    ClearIcon,
} from '~/Components/Icon';

const inner = clsx('container', styles.inner);
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 2000);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
        }
    };

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
                            // visible={searchResult.length > 0}
                            visible
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
                                    <ClearIcon style={{ margin: '0px 12px' }} />
                                </button>
                                {/* <button>
                                    <SpinnerIcon style={{'margin: 0px 12px;'}}/>
                                </button> */}
                                <span></span>
                                <button type="submit" className={cx('searchIcon')}>
                                    <SearchIcon />
                                </button>
                            </div>
                        </Tippy>
                    </div>
                </div>

                <div className={cx('actionButtons')}>
                    <Button text leftIcon={<PlusIcon />}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-button')}>
                            <MoreButton />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
