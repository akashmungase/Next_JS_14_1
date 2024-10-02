'use client'
import styles from '../loader/loader.module.css'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

function Loader() {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 500); // adjust the timeout as needed
        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return (
        <div >
            {loading ? (
                <div className={styles.pageWrapper}>
                    <div className={styles.preloader}>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Loader;