import React, { useState, useRef, useEffect, useCallback } from 'react';

import areas from '../constants/areas';

const HooksRef = () => {
  const wrapperRef = useRef();

  const [ clickedArea, setClickedArea ] = useState(areas.NONE);

  const handleClick = useCallback(e => {
    const node = wrapperRef.current;

    if (
      node &&
      node !== e.target &&
      !node.contains(e.target)
    ) {
      console.log('%cHOOKS: handleClick none', 'color: aqua');

      return setClickedArea(areas.NONE);
    }

    console.log('%cHOOKS: handleClick container', 'color: aqua');

    setClickedArea(areas.CONTAINER) 
  }, []);

  const handleInnerClick = e => {
    // e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();

    console.log('%cHOOKS: handleInnerClick', 'color: aqua');

    setClickedArea(areas.INNER);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleClick);

    return () => document.removeEventListener('mouseup', handleClick);
  }, [handleClick]);

  // return (
  //   <div className="container" ref={wrapperRef}>
  //     <h2>Hooks Ref</h2>
  //     <div className="inner" onClick={handleInnerClick}>
  //       <h3>Clicked: {clickedArea}</h3>
  //     </div>
  //   </div>
  // );

  return (
    <div className="container" ref={wrapperRef}>
      <h2>Hooks Ref</h2>
      {clickedArea !== areas.NONE && (
        <div className="inner" onClick={handleInnerClick}>
          <h3>Clicked: {clickedArea}</h3>
        </div>
      )}
    </div>
  );
}

export default HooksRef;
