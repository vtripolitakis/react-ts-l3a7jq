import * as React from 'react';
import { ISVGBar } from '../../interfaces';
import { BARDATAXOFFSET, BARDATAYOFFSET } from '../../conf';

const SVGBar = ({ svgwidth, width, height, color }: ISVGBar) => {
  return (
    <svg width={svgwidth} height={height}>
      <rect width={width} height={height} style={{ fill: color }} />
      <text x={width + BARDATAXOFFSET} y={height - BARDATAYOFFSET}>
        {width}
      </text>
    </svg>
  );
};

export default SVGBar;
