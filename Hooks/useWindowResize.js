import {useEffect, useState} from 'react';

const UseWindowResize = () => {
    const [size, setSize] = useState();
    useEffect(() => {
            const updateSize = () => {
                setSize(window.innerWidth);
            }

            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []
    )

    return size
};

export default UseWindowResize;
