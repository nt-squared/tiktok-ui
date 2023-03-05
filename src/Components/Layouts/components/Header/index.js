// Libraries
import clsx from 'clsx';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// Source code
import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '../Search';
import routesConfig from '~/config/routes';
import { Button } from '~/Components/Button';
import { Menu } from '~/Components/Popper/Menu';
import { PlusIcon, MoreButton, LanguageIcon, QuestionIcon, KeyboardIcon } from '~/Components/Icon';

const inner = clsx(styles.inner);
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
                    <Link to={routesConfig.home} className={cx('logo')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                {/* Search Field */}
                <Search />

                {/* Action Field */}
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
