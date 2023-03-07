import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import ListItemContainer from './ListItemContainer';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('main-content-homepage')}>
            <div>
                <ListItemContainer />
            </div>
        </div>
    );
}

export default Home;
