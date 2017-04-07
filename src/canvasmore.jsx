import React from 'react';
// import R from 'ramda';
// import styled from 'styled-components';

const rect = ({ ctx, x, y, width, height }) => ctx.fillRect(x, y, width, height);

class Canvas extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, 300, 300);
    rect({ ctx, x: 10, y: 10, width: 50, height: 50 });
    rect({ ctx, x: 110, y: 110, width: 50, height: 50 });
  }

  render() {
    return (
      <canvas ref={(canvas) => { this.canvas = canvas; }} width={300} height={300} />
    );
  }
}

export default Canvas;
