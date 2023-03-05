import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });

        return res;
    } catch (error) {
        console.error('[ERROR]', error);
    }
};