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

    this.updateCanvas2 = ::this.updateCanvas2;
    this.updateCanvas3 = ::this.updateCanvas3;
    this.updateCanvas4 = ::this.updateCanvas4;
    this.canvasAry = ::this.canvasAry;
  }

  componentDidMount() {
    // setInterval(() => {
    //   setTimeout(this.updateCanvas2, Math.floor(Math.random() * 800) + 100);
    //   this.updateCanvas3();
    // }, 500);
    this.updateCanvas4();
    // setInterval(this.updateCanvas4, 1000)
    this.updateCanvas2();
    this.updateCanvas3();
    // this.updateCanvas2();
  }

  updateCanvas() {
    const ctx = this.canvas.getContext('2d');
    ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = randomHex();
    ctx.fill();
  }

  updateCanvas2() {
    this.state.canvasRefs.forEach((ref) => {
      const { height, width } = ref;
      const ctx = ref.getContext('2d');
      ctx.rect(0, 0, width, height);
      ctx.fillStyle = randomRgba();
      ctx.fill();
      ctx.lineWidth = 35;
      ctx.strokeStyle = randomRgba();
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
    });
  }

  updateCanvas3() {
    const { height, width } = this.cnv;
    const ctx = this.cnv.getContext('2d');
    ctx.rect(0, 0, width, height);
    ctx.fillStyle = randomRgba();
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = randomHex();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 200);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(200,0);
    ctx.lineTo(0, 200);
    ctx.stroke()
  }

  updateCanvas4() {
    console.log('1');
    const { height, width } = this.cnv_data;
    const ctx = this.cnv_data.getContext('2d');
    ctx.rect(0, 0, width, height);
    // console.log('2');
    // const imageData = ctx.createImageData(width, height);
    // console.log(imageData.data);
    // const newImageData = imageData.data.map(data => Math.random() * 255);
    // console.log(newImageData);
    // ctx.putImageData(newImageData, 0, 0);

    var imageData = ctx.createImageData(width, height);
    for (var i = 0; i < imageData.data.length; i += 1) {
      imageData.data[i] = Math.random() * 255;
    }

    ctx.putImageData(imageData, 0, 0);
  }

  canvasAry(canvas) {
    this.setState({canvas_ref: this.state.canvasRefs.push(canvas)})
  }

  render() {
    return (
      <div style={style.main}>
        <Canvas refFn={this.canvasAry} />
        <Canvas refFn={this.canvasAry} />
        <Canvas refFn={this.canvasAry} />
        <Canvas refFn={this.canvasAry} />
        <Canvas refFn={(cnv) => { this.cnv = cnv}} />
        <Canvas
          refFn={(cnv_data) => {this.cnv_data = cnv_data}}
          size={{width: 416, height: 200}}
          // style={{...style.canvas, ...{flexGrow: 2}}}
        />
      </div>
    );
  }
}

export default App;
