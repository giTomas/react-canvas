import React from 'react';
// import Konva from 'konva';
// import {
//   Layer,
//   Stage,
//   Shape,
// } from 'react-konva';
// import R from 'ramda';
// import styled from 'styled-components';


const randomHex = () => (
  `#${Math.floor(Math.random() * 16777215).toString(16)}`
);

const randomRgba = () => (
  `rgba(${Math.floor(Math.random() * 128).toString()},${Math.floor(Math.random() * 128).toString()},${Math.floor(Math.random() * 128).toString()},${Math.round(((Math.random() * 0.9) + 0.05) * 100) / 100})`
);

const style = {};
style.canvas = {
  margin: '16px 0 0 16px',
  boxShadow: '2px 4px 12px rgba(128,128,128,0.85)',
  flexGrow: 1,
};
style.main = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '1em',
  width: '100vw',
  // justifyContent: 'center',
  // minHeight: "100vh"
};

const Canvas = ({
  size={width: 200, height:200},
  style={margin: '16px 0 0 16px', boxShadow: '2px 4px 12px rgba(128,128,128,0.85)'},
  refFn
}) => (
  <canvas
    ref={refFn}
    style={style}
    width={size.width}
    height={size.height}
  />
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canvasRefs: [],
      canvasRefs2: [],
    };
  }

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const { height, width } = this.cnv_data;
    const ctx = this.cnv_data.getContext('2d');
    ctx.rect(0, 0, width, height);
    var imageData = ctx.createImageData(width, height);
    for (var i = 0; i < height * width * 4; i += 4) {
      imageData.data[i] = 0;         //red
      imageData.data[i + 1] = 0;   // green
      imageData.data[i + 2] = 250;     // blue
      imageData.data[i + 3] = 155;   // alpha
    }

    ctx.putImageData(imageData, 0, 0);
  }

  render() {
    return (
      <div style={style.main}>
        <Canvas
          refFn={(cnv_data) => {this.cnv_data = cnv_data}}
          size={{width: 416, height: 200}}
        />
      </div>
    );
  }
}

export default App;
