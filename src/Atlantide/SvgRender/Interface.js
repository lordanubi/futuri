import React, { useEffect,useRef } from 'react';
function Interface({width, height, children, image, ...props}) {
    useEffect(() => {
        const box = svg.current.getBBox()
        //svg.current.setAttribute('viewBox', `${box.x} ${box.y} ${box.width} ${box.height}`);
      }, []);

    const svg = useRef()
    return <svg viewBox={`0 0 ${width} ${height}`} ref={svg} xmlns={image ? "http://www.w3.org/2000/svg" : undefined}>{children}</svg>
}
export default Interface