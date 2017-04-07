import React from 'react';
// import R from 'ramda';
// import styled from 'styled-components';

class Canvas extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.canvas.getContext('2d');
    ctx.fillRect(0, 0, 100, 100);
  }

  render() {
    return (
      <canvas ref={(canvas) => { this.canvas = canvas; }} width={300} height={300} />
    );
  }
}

export default Canvas;
