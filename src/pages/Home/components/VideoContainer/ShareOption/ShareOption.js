import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './ShareOption.module.scss';
import PopperWrapper from '~/components/Popper';
import { ShareArrowIcon } from '~/components/Icon';
import { shareData } from './ShareData';

const cx = classNames.bind(styles);

function ShareOption({ children }) {
    const [shareOption, setShareOption] = useState(shareData.slice(0, 5));
    const [shareArrow, setShareArrow] = useState(true);

    const handleSeeMoreOption = () => {
        setShareOption(shareData);
        setShareArrow(false);
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                delay={[0, 500]}
                placement="top-start"
                offset={[-30, 0]}
                onHidden={() => {
                    setShareOption(shareData.slice(0, 5));
                    setShareArrow(true);
                }}
                render={(attrs) => (
                    <div className={cx('')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('feed-share-group')}>
                                {shareOption.map((data, index) => (
                                    <Link key={index} to={data.to} className={cx('feed-share-link')}>
                                        <data.icon />
                                        <span className={cx('feed-share-text')}>{data.text}</span>
                                    </Link>
                                ))}
                                {shareArrow && (
                                    <Link to={'#'} className={cx('share-arrow-icon')} onClick={handleSeeMoreOption}>
                                        <ShareArrowIcon />
                                    </Link>
                                )}
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

export default ShareOption;
