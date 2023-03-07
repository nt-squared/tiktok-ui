import classNames from 'classnames/bind';

import styles from './FooterContainer.module.scss';
import footerData from './FooterData';
const cx = classNames.bind(styles);

function FooterContainer() {
    return (
        <div className={cx('footer-container')}>
            {footerData.map((data, index) => (
                <div key={index} className={cx('footer-link-container')}>
                    {data.map((data, index) => (
                        <span key={index} className={cx('footer-link-item')}>
                            {data}
                        </span>
                    ))}
                </div>
            ))}
            <span className={cx('copyright')}>© 2023 TikTok</span>
        </div>
    );
}

export default FooterContainer;
