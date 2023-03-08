import classNames from 'classnames/bind';

import styles from './ListItemContainer.module.scss';
import AvatarAnchor from '../components/AvatarAnchor';
import TextInfoContainer from '../components/TextInfoContainer';
import VideoContainer from '../components/VideoContainer/VideoContainer';
import { HomeProvider } from '~/Context/HomeContext';

const cx = classNames.bind(styles);

function ListItemContainer() {
    return (
        <HomeProvider>
            <div className={cx('recommend-list-item-container')}>
                <AvatarAnchor />
                <div className={cx('content-container')}>
                    <TextInfoContainer />
                    <VideoContainer />
                </div>
            </div>
        </HomeProvider>
    );
}

export default ListItemContainer;
