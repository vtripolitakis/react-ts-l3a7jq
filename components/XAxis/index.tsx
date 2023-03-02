import * as React from 'react';
import { MAXSVGWIDTH, XAXISHEIGHT } from '../../conf';

// shameful hardwired implementation of an X-Axis ticked element
// we need some scaling logic and some decisions to be taken for
// responsive design

const XAxis = () => {
  return (
    <div style={{ clear: 'both' }}>
      <div className="leftRowPart">&nbsp;</div>
      <div className="rightRowPart">
        <svg width={MAXSVGWIDTH} height={XAXISHEIGHT}>
          <line x1="0" y1="5" x2="120" y2="5" stroke="black" />
          <line x1="0" y1="0" x2="0" y2={XAXISHEIGHT / 2} stroke="black" />
          <line x1="50" y1="0" x2="50" y2={XAXISHEIGHT / 2} stroke="black" />
          <line x1="100" y1="0" x2="100" y2={XAXISHEIGHT / 2} stroke="black" />
          <text x="0" y={XAXISHEIGHT}>
            0
          </text>
          <text x="42" y={XAXISHEIGHT}>
            50
          </text>
          <text x="90" y={XAXISHEIGHT}>
            100
          </text>
        </svg>
      </div>
    </div>
  );
};

export default XAxis;
