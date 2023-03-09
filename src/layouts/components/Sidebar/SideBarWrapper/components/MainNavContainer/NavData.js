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
        to: '/tiktok-ui',
        icon: <HomeIcon />,
        activeIcon: <ActiveHomeIcon />,
    },
    {
        navText: 'following',
        to: '/tiktok-ui/following',
        icon: <FollowingIcon />,
        activeIcon: <ActiveFollowingIcon />,
    },
    {
        navText: 'live',
        to: '/tiktok-ui/live',
        icon: <VideoIcon />,
        activeIcon: <ActiveVideoIcon />,
    },
];

export default navData;
