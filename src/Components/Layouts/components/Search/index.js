// Libraries
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';

// Source code
import styles from './Search.module.scss';
import { PopperWrapper } from '~/Components/Popper';
import { AccountItem } from '~/Components/AccountItem';
import { SearchIcon, SpinnerIcon, ClearIcon } from '~/Components/Icon';

const cx = classNames.bind(styles);

function Search() {
    // useState
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setshowResults] = useState(true);

    // useRef
    const inputRef = useRef();

    // useEffect
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 0);
    }, []);

    // handle clear search value
    const handleClearSearchValue = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    // handle hide results
    const handleHideResults = () => {
        setshowResults(false);
    };

    return (
        <div className={cx('searchWrapper')}>
            <div className={cx('searchBar')}>
                <HeadlessTippy
                    interactive
                    visible={showResults && searchResult.length > 0}
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
                    onClickOutside={handleHideResults}
                >
                    <div className={cx('searchContainer')}>
                        <input
                            ref={inputRef}
                            type="search"
                            spellCheck={false}
                            placeholder="Search accounts and videos"
                            className={cx('searchInput')}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => setshowResults(true)}
                        />
                        {!!searchValue && (
                            <button className={cx('clearIcon')} onClick={handleClearSearchValue}>
                                <ClearIcon style={{ margin: '0px 12px' }} />
                            </button>
                        )}
                        {/* <button>
                    <SpinnerIcon style={{ margin: '0px 12px' }} />
                </button> */}
                        <span></span>
                        <button type="submit" className={cx('searchIcon')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>
            </div>
        </div>
    );
}

export default Search;
