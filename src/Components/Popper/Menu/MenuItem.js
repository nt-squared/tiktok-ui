// Labraries
import classNames from 'classnames/bind';

// Source code
import styles from './Menu.module.scss';
import { Button } from '~/Components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <li className={cx('menu-item')}>
            <Button className={cx('menu-content')} leftIcon={data.icon} to={data.to}>
                {data.text}
            </Button>
        </li>
    );
}

export default MenuItem;
