import React from 'react';

// const randomHex = () => (
//   `#${Math.floor(Math.random() * 16777215).toString(16)}`
// );
//
// const randomRgba = () => (
//   `rgba(${Math.floor(Math.random() * 128).toString()},${Math.floor(Math.random() * 128).toString()},${Math.floor(Math.random() * 128).toString()},${Math.round(((Math.random() * 0.9) + 0.05) * 100) / 100})`
// );
//
// const thinger = (zr, zi, cr, ci, iterations) => {
//   if (iterations > 10) {
//     return;
//   }
//   let nextr = (zr * zr) - (zi * zi) + cr;
//   let nexti = ((zr * zi) * 2) + ci;
//   console.log([nextr, nexti]);
//   if (Math.pow(nextr, 2) + Math.pow(nexti, 2) > 4) {
//     return false;
//   }
//   return thinger(nextr, nexti, cr, ci, iterations += 1);
// };

// const isMandelbrot2 = (cr, ci) => {
//   let zr = cr;
//   let zi = ci;
//
//   for (let i = 0; i < 100; i += 1) {
//     if (zr**2 + zi**2 > 4) {
//       return false;
//     }
//     newzr = (zr * zr) - (zi * zi) + cr;
//     newzi = ((zr * zi) * 2) + ci;
//     zr = newzr;
//     zi = newzi;
//   }
//
//   return true;
// };

const isMandelbrot = (coord) => {
  const cr = coord.x;
  const ci = coord.y;
  let zr = cr;
  let zi = ci;

  for (let i = 0; i < 100; i += 1) {
    if ((zr ** 2) + (zi ** 2) > 4) {
      return false;
    }
    const newzr = ((zr * zr) - (zi * zi)) + cr;
    const newzi = ((zr * zi) * 2) + ci;
    zr = newzr;
    zi = newzi;
  }

  return true;
};

// const thinger1 = (z, c, i) => {
//   if (i > 10) {
//     return;
//   }
//   const next = Math.pow(z, 2) + c;
//   console.log(next)
//   return thinger(next, c, i += 1);
// };

// const indexToCoord = (index, context) => {
//   const {height, width} = context;
//   const ix = Math.floor(index / 4);
//   const r = 4;
//   const coord = {
//     x: ix % 10,
//     y: Math.floor(ix / 10),
//   };
//
//   coord.x = ((coord.x * r / height) - r/2);
//   coord.y = ((coord.y * r / width) - r/2) *-1;
//
//   return coord;
// };

function Graph(canvas) {
  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const aspectRatio = canvas.height / canvas.width;
  this.r = 4;
  this.center = {
    x: 0,
    y: 0,
  };
  const indexToCoord = (index) => {
    const ix = index / 4;
    const coord = {
      x: ix % canvas.width,
      y: Math.floor(ix / canvas.width),
    };
    coord.x = ((((coord.x * this.r) / canvas.width) - (this.r / 2)) + (this.center.x * aspectRatio)) / aspectRatio;
    coord.y = (((((coord.y * this.r) / canvas.height) - (this.r / 2)) * -1) + this.center.y);
    return coord;
  };


  this.render = function render(predicate) {
    for (let i = 0; i < canvas.width * canvas.height * 4; i += 4) {
      const set = predicate(indexToCoord(i)) ? 255 : 0;
      imageData.data[i] = 0;
      imageData.data[i + 1] = 0;
      imageData.data[i + 2] = 0;
      imageData.data[i + 3] = set;
    }
    ctx.putImageData(imageData, 0, 0);
  };
}

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
  size = { width: 200, height: 200 },
  style = { margin: '16px 0 0 16px', boxShadow: '2px 4px 12px rgba(128,128,128,0.85)' },
  refFn,
}) => (
  <canvas
    ref={refFn}
    style={style}
    width={size.width}
    height={size.height}
  />
);

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     canvasRefs: [],
  //     canvasRefs2: [],
  //   };
  // }

  componentDidMount() {
    // this.updateCanvas();
    const graph = new Graph(this.cnvData);
    graph.r = 50;
    graph.render(coord => (
      coord.x === coord.y
      ||
      coord.x * 2 === coord.y
      ||
      coord.x * 3 === coord.y
      ||
      coord.x * 4 === coord.y
      ||
      coord.x * 6 === coord.y
      ||
      coord.x * 40 === coord.y
    ));

    const graph2 = new Graph(this.cnvData2);
    graph2.r = 20;
    graph2.render(coord => (
      coord.x % 2 === 0
    ));

    const graph3 = new Graph(this.cnvData3);
    graph3.r = 500;
    graph3.render(coord => (
      coord.x > 100 && coord.y > -27
    ));

    const graph4 = new Graph(this.mandelbrot);
    // graph4.r = 500;
    graph4.render(isMandelbrot);

    const graph5 = new Graph(this.mandelbrot2);
    graph5.center = {
      x: -0.7463,
      y: -0.1102,
    };
    graph5.r = 0.005;
    graph5.render(isMandelbrot);

    const graph6 = new Graph(this.mandelbrot3);
    graph6.center = {
      x: -0.7453,
      y: -0.1127,
    };
    graph6.r = 0.00065;
    graph6.render(isMandelbrot);

    const graph7 = new Graph(this.mandelbrot4);
    graph7.center = {
      x: -1.25066,
      y: 0.02012,
    };
    graph7.r = 0.0005;
    graph7.render(isMandelbrot);

    const graph8 = new Graph(this.mandelbrot5);
    graph8.center = {
      x: -0.16,
      y: 1.0405,
    };
    graph8.r = 0.046;
    graph8.render(isMandelbrot);
  }

  // updateCanvas() {
  //   const { height, width } = this.cnvData;
  //   const ctx = this.cnvData.getContext('2d');
  //   ctx.rect(0, 0, width, height);
  //   var imageData = ctx.createImageData(width, height);
  //   for (var i = 0; i < height * width * 4; i += 4) {
  //     imageData.data[i] = 0;         //red
  //     imageData.data[i + 1] = 0;   // green
  //     imageData.data[i + 2] = 250;     // blue
  //     imageData.data[i + 3] = 155;   // alpha
  //   }
  //
  //   ctx.putImageData(imageData, 0, 0);
  // }

  render() {
    return (
      <div style={style.main}>
        <Canvas
          refFn={(cnvData) => { this.cnvData = cnvData; }}
          size={{ width: 300, height: 300 }}
        />
        <Canvas
          refFn={(cnvData2) => { this.cnvData2 = cnvData2; }}
          size={{ width: 300, height: 300 }}
        />
        <Canvas
          refFn={(cnvData3) => { this.cnvData3 = cnvData3; }}
          size={{ width: 300, height: 300 }}
        />
        <Canvas
          refFn={(mandelbrot) => { this.mandelbrot = mandelbrot; }}
          size={{ width: 300, height: 300 }}
        />
        <Canvas
          refFn={(mandelbrot2) => { this.mandelbrot2 = mandelbrot2; }}
          size={{ width: 300, height: 300 }}
        />
        <Canvas
          refFn={(mandelbrot3) => { this.mandelbrot3 = mandelbrot3; }}
          size={{ width: 300, height: 300 }}
        />
        <Canvas
          refFn={(mandelbrot4) => { this.mandelbrot4 = mandelbrot4; }}
          size={{ width: 300, height: 300 }}
        />
        <Canvas
          refFn={(mandelbrot5) => { this.mandelbrot5 = mandelbrot5; }}
          size={{ width: 300, height: 300 }}
        />
      </div>
    );
  }
}

export default App;
