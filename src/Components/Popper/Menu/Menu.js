// Libraries
import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

// Source code
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';
import { PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
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
            offset={[13, 10]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-wrapper')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {menuSetting.length > 1 && (
                            <MenuHeader
                                headerText={mainMenu.title}
                                onBack={() => {
                                    setMenuSetting((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <ul className={cx('menu-list')}>{renderItems()}</ul>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setMenuSetting((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
