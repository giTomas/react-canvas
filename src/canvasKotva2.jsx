import React from 'react';
// import Konva from 'konva';
import {
  Layer,
  Stage,
  Shape,
} from 'react-konva';
// import R from 'ramda';
// import styled from 'styled-components';


const MyShape = () => (
  <Shape
    fill="#00D2FF"
    draggable
    sceneFunc={function (ctx) {
      ctx.beginPath();
      ctx.moveTo(10, 50);
      ctx.lineTo(220, 80);
      ctx.quadraticCurveTo(150, 100, 260, 170);
      ctx.closePath();

      // Konva specific method
      ctx.fillStrokeShape(this);
    }}
  />
);

const App = () => (
  <Stage width={700} height={700}>
    <Layer>
      <MyShape />
    </Layer>
  </Stage>
);

export default App;
