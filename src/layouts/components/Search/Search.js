// Libraries
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';

// Source code
import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import PopperWrapper from '~/components/Popper';
import * as searchService from '~/services/searchService';
import { useDebounce } from '~/hook';
import { SearchIcon, SpinnerIcon, ClearIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function Search() {
    // useState
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [seachLoading, setSeachLoading] = useState(false);

    // useDebounce
    const debouncedValue = useDebounce(searchValue, 500);

    // useRef
    const inputRef = useRef();

    // useEffect
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResults([]);
            return;
        }

        const fetchApi = async () => {
            setSeachLoading(true);

            const res = await searchService.search(debouncedValue);

            setSearchResults(res.data);

            setSeachLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    // handle clear search value
    const handleClearSearchValue = () => {
        setSearchValue('');
        setSearchResults([]);
        inputRef.current.focus();
    };

    // handle hide results
    const handleHideResults = () => {
        setShowResults(false);
    };

    // handle changed value
    const handleChangedValue = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue);
        }
    };

    return (
        <div className={cx('searchWrapper')}>
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
                        onChange={handleChangedValue}
                        onFocus={() => setShowResults(true)}
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
    );
}

export default Search;
