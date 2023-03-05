// Labraries
import classNames from 'classnames/bind';

// Source code
import styles from './Menu.module.scss';
import { Button } from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <li className={cx('menu-item')}>
            <Button className={cx('menu-content')} leftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        </li>
    );
}

export default MenuItem;
