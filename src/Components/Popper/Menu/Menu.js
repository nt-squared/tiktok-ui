// Libraries
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

// Source code
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { PopperWrapper } from '~/Components/Popper';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-wrapper')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-list')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
