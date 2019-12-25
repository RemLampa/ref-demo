import React, { Component, createRef } from 'react';

import areas from '../constants/areas';

class ClassRef extends Component {
  wrapperRef = createRef();

  state = {
    clickedArea: areas.NONE,
  };
  
  componentDidMount() {
    document.addEventListener('mouseup', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleClick);
  }

  handleInnerClick = e => {
    // e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();

    console.log('%cCLASS: handleInnerClick', 'color: yellow');

    this.setState({ clickedArea: areas.INNER });
  };

  handleClick = e => {
    const node = this.wrapperRef.current;

    if (
      node &&
      node !== e.target &&
      !node.contains(e.target)
    ) {
      console.log('%cCLASS: handleClick none', 'color: yellow');

      return this.setState({ clickedArea: areas.NONE });
    }

    console.log('%cCLASS: handleClick container', 'color: yellow');

    this.setState({ clickedArea: areas.CONTAINER });
  }

  render() {
    const { clickedArea } = this.state;

    // return (
    //   <div className="container" ref={this.wrapperRef}>
    //     <h2>Class Ref</h2>
    //     <div className="inner" onClick={this.handleInnerClick}>
    //       <h3>Clicked: {clickedArea}</h3>
    //     </div>
    //   </div>
    // );

    return (
      <div className="container" ref={this.wrapperRef}>
        <h2>Class Ref</h2>
        {clickedArea !== areas.NONE && (
          <div className="inner" onClick={this.handleInnerClick}>
            <h3>Clicked: {clickedArea}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default ClassRef;
