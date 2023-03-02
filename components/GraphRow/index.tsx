import * as React from 'react';
import { SVGBar } from '../';
import { IGraphRow } from '../../interfaces';
import '../../styles/index.css';
import { themeProvider } from '../../styles/themeProvider';
import { generateStyle } from '../..//util';

const GraphRow = ({ fullname, svgwidth, width, height, color }: IGraphRow) => {
  const theme = themeProvider();
  return (
    <div>
      <div
        className="leftRowPart"
        style={generateStyle(theme, 'dark', 'secondary')}
      >
        {fullname}
      </div>
      <div className="rightRowPart">
        <SVGBar
          svgwidth={svgwidth}
          width={width}
          height={height}
          color={color}
        />
      </div>
    </div>
  );
};

export default GraphRow;
