import React, {memo} from 'react';
import styles from './banner.module.css';

const Banner = memo(() => (
    <div className={styles.banner}>
        <span className={styles.description}>Advertisement Banner</span>
    </div>
));

export default Banner;