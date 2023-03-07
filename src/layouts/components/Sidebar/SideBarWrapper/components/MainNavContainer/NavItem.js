import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

import styles from './MainNavContainer.module.scss';
const cx = classNames.bind(styles);

function NavItem({ data }) {
    const resolvedPath = useResolvedPath(data.to);
    const isActive = useMatch({ path: resolvedPath.pathname });

    return (
        <NavLink className={({ isActive }) => cx('nav-item', { active: isActive })} to={data.to}>
            {isActive ? data.activeIcon : data.icon}
            <h2 className={cx('nav-item-text')}>{data.navText}</h2>
        </NavLink>
    );
}

NavItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default NavItem;

// {
//     ({ isActive }) =>
//         isActive ? (
//             <>
//                 {activeIcon}
//                 <h2 className={cx('nav-item-text')}>{navText}</h2>
//             </>
//         ) : (
//             <>
//                 {icon}
//                 <h2 className={cx('nav-item-text')}>{navText}</h2>
//             </>
//         );
// }
