// Libraries
import classNames from 'classnames';
import { forwardRef } from 'react';
import { useState } from 'react';

// Source code
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(
    ({ src, alt, loading = 'lazy', fallbackImage: customFallbackImage = images.noImage, className, ...props }, ref) => {
        const [fallbackImage, setFallbackImage] = useState('');

        const handleImageError = () => {
            setFallbackImage(customFallbackImage);
        };
        return (
            <img
                ref={ref}
                className={classNames(styles['image-box'], className)}
                src={fallbackImage || src}
                alt={alt}
                {...props}
                onError={handleImageError}
            />
        );
    },
);

export default Image;
