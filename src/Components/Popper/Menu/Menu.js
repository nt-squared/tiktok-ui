// Libraries
import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

// Source code
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';
import { PopperWrapper } from '~/Components/Popper';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [menuSetting, setMenuSetting] = useState([{ data: items }]);

    const mainMenu = menuSetting[menuSetting.length - 1];

    const renderItems = () => {
        return mainMenu.data.map((item, index) => {
            const hasChildren = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (hasChildren) {
                            setMenuSetting((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-wrapper')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-list')}>
                        {menuSetting.length > 1 && (
                            <MenuHeader
                                headerText="Language"
                                onBack={() => {
                                    setMenuSetting((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
