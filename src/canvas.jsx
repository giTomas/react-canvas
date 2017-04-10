import React from 'react';
// import Konva from 'konva';
// import {
//   Layer,
//   Stage,
//   Shape,
// } from 'react-konva';
// import R from 'ramda';
// import styled from 'styled-components';


const randomColor = () => (
  `#${Math.floor(Math.random() * 16777215).toString(16)}`
);

const style = {};
style.canvas = {
  margin: '16px 0 0 16px',
  boxShadow: '2px 4px 12px rgba(128,128,128,0.85)',
};
style.main = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '1em',
  width: '100vw',
  // minHeight: "100vh"
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canvas_refs: [],
    };
  }

  componentDidMount() {
    this.updateCanvas2(this.state.canvas_refs);
    this.updateCanvas3();
    this.updateCanvas4();
  }

  updateCanvas() {
    const ctx = this.canvas.getContext('2d');
    ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = randomColor();
    ctx.fill();
  }

  updateCanvas2() {
    this.state.canvas_refs.forEach((ref) => {
      const { height, width } = ref;
      const ctx = ref.getContext('2d');
      ctx.rect(0, 0, width, height);
      ctx.fillStyle = randomColor();
      ctx.fill();
      ctx.lineWidth = 35;
      ctx.strokeStyle = randomColor();
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
    ctx.fillStyle = randomColor();
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = randomColor();
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

  render() {
    return (
      <div style={style.main}>
        <canvas
          ref={(canvas) => {
            const refs = this.state.canvas_refs;
            this.setState({ canvas_refs: refs.push(canvas) });
          }}
          style={style.canvas}
          width={200}
          height={200}
        />
        <canvas
          ref={(canvas) => {
            const refs = this.state.canvas_refs;
            this.setState({ canvas_refs: refs.push(canvas) });
          }}
          style={style.canvas}
          width={200}
          height={200}
        />
        <canvas
          ref={(canvas) => {
            const refs = this.state.canvas_refs;
            this.setState({ canvas_refs: refs.push(canvas) });
          }}
          style={style.canvas}
          width={200}
          height={200}
        />
        <canvas
          ref={(cnv) => { this.cnv = cnv}}
          style={style.canvas}
          width={200}
          height={200}
        />
        <canvas
          ref={(cnv_data) => { this.cnv_data = cnv_data}}
          style={style.canvas}
          width={416}
          height={200}
        />
      </div>
    );
  }
}

export default App;
