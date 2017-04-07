import React from 'react';
import Konva from 'konva';
import {
  Layer,
  Rect,
  Stage,
  Group,
} from 'react-konva';
// import R from 'ramda';
// import styled from 'styled-components';

class Canvas extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      color: 'green',
    };

    this.handleClick = ::this.handleClick;
  }

  handleClick() {
    this.setState({
      color: Konva.Util.getRandomColor(),
    });
  }

  render() {
    return (
      <Rect
        x={100}
        y={100}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={10}
        onClick={this.handleClick}
      />
    );
  }
}

const App = () => (
  <Stage width={700} height={700}>
    <Layer>
      <Canvas />
    </Layer>
  </Stage>
);

export default App;
