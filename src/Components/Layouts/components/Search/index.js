// Libraries
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';

// Source code
import styles from './Search.module.scss';
import { useDebounce } from '~/hook';
import { PopperWrapper } from '~/Components/Popper';
import { AccountItem } from '~/Components/AccountItem';
import { SearchIcon, SpinnerIcon, ClearIcon } from '~/Components/Icon';

const cx = classNames.bind(styles);

function Search() {
    // useState
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setshowResults] = useState(true);
    const [seachLoading, setSeachLoading] = useState(false);

    // useDebounce
    const debounced = useDebounce(searchValue, 500);

    // useRef
    const inputRef = useRef();

    // useEffect
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResults([]);
            return;
        }

        setSeachLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResults(res.data);
                setSeachLoading(false);
            })
            .finally(() => {
                setSeachLoading(false);
            });
    }, [debounced]);

    // handle clear search value
    const handleClearSearchValue = () => {
        setSearchValue('');
        setSearchResults([]);
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
                    visible={showResults && searchResults.length > 0}
                    render={(attrs) => (
                        <div className={cx('searchResults')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('searchAccount')}>Account</div>
                                {searchResults.map((searchResult) => (
                                    <AccountItem key={searchResult.id} data={searchResult} />
                                ))}
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
                        {!!searchValue && !seachLoading && (
                            <button className={cx('clearIcon')} onClick={handleClearSearchValue}>
                                <ClearIcon />
                            </button>
                        )}
                        {seachLoading && (
                            <button className={cx('spinnerIcon')}>
                                <SpinnerIcon />
                            </button>
                        )}
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
