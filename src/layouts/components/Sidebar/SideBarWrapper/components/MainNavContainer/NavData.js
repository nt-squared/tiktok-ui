import {
    HomeIcon,
    ActiveHomeIcon,
    FollowingIcon,
    ActiveFollowingIcon,
    VideoIcon,
    ActiveVideoIcon,
} from '~/components/Icon';

const navData = [
    {
        navText: 'home',
        to: '/',
        icon: <HomeIcon />,
        activeIcon: <ActiveHomeIcon />,
    },
    {
        navText: 'following',
        to: '/following',
        icon: <FollowingIcon />,
        activeIcon: <ActiveFollowingIcon />,
    },
    {
        navText: 'live',
        to: '/live',
        icon: <VideoIcon />,
        activeIcon: <ActiveVideoIcon />,
    },
];

export default navData;
