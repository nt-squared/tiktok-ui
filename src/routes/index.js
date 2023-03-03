// Layouts
import { HeaderLayout } from '~/Components/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public Routes
const publicRoutes = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/profile', element: Profile },
    { path: '/upload', element: Upload, layout: HeaderLayout },
    { path: '/search', element: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };