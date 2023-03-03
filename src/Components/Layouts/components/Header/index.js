// Libraries
import clsx from 'clsx';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';

// Source code
import styles from './Header.module.scss';
import images from '~/assets/images';
import { PopperWrapper } from '~/Components/Popper';
import { AccountItem } from '~/Components/AccountItem';
import { Button } from '~/Components/Button';

const inner = clsx('container', styles.inner);
const cx = classNames.bind(styles);

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
                </div>
            </div>
        </header>
    );
}

export default Header;
