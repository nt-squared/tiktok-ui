import { createContext, useEffect, useState } from 'react';

export const HomeContext = createContext([]);

const fetchLink = [
    'https://tiktok.fullstack.edu.vn/api/videos/1-630268663e570.mp4',
    'https://tiktok.fullstack.edu.vn/api/videos/10-630268a88ce32.mp4',
    'https://tiktok.fullstack.edu.vn/api/videos/11-630268aa7ab55.mp4',
    'https://tiktok.fullstack.edu.vn/api/videos/115-63156330aa547.mp4',
    'https://tiktok.fullstack.edu.vn/api/videos/116-6315634dbb706.mp4',
    'https://tiktok.fullstack.edu.vn/api/videos/117-63156396accc4.mp4',
    'https://tiktok.fullstack.edu.vn/api/videos/12-630268aba31bb.mp4',
    'https://tiktok.fullstack.edu.vn/api/videos/121-631572bd91578.mp4',
    'https://tiktok.fullstack.edu.vn/api/videos/122-6316c86b6927a.mp4',
    'https://tiktok.fullstack.edu.vn/api/videos/123-631812ce5a3ed.mp4',
];

export const HomeProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        let userInfo = [];
        fetchLink.forEach((link) => {
            let fetchData = fetch(link)
                .then((res) => res.json())
                .then((res) => res.data);
            userInfo.push(fetchData);
        });

        Promise.all(userInfo).then((data) => {
            setUserData(data);
        });
    }, []);

    return (
        <>
            {userData.map((data, index) => (
                <HomeContext.Provider key={index} value={data}>
                    {children}
                </HomeContext.Provider>
            ))}
        </>
    );
};
