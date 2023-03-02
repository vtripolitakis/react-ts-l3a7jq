import * as React from 'react';
import { ISVGBar } from '../../interfaces';

const SVGBar = ({ svgwidth, width, height, color }: ISVGBar) => {
  return (
    <svg width={svgwidth} height={height}>
      <rect width={width} height={height} style={{ fill: color }} />
      <text x={width + 10} y={height - 5}>
        {width}
      </text>
    </svg>
  );
};

export default SVGBar;
