import * as React from 'react';
import { GraphRow, XAxis } from '../';
import { IHorizontalChart } from '../../interfaces';
import { MAXSVGWIDTH, ROWHEIGHT } from '../../conf';
import { themeProvider } from '../../styles/themeProvider';

const HorizontalChart = ({ chartWidth, chartData }: IHorizontalChart) => {
  const theme = themeProvider();

  if (chartData.length === 0) {
    return <div>no data available</div>
  }

  return (
    <div>
      {chartData
        .filter((chartDataItem) => {
          if (chartDataItem.age !== -1) {
            return chartDataItem;
          }
        })
        .map((chartDataItem, idx) => {
          return (
            <GraphRow
              key={`graphrow-${idx}`}
              fullname={chartDataItem.fullname}
              svgwidth={chartWidth}
              width={chartDataItem.age}
              height={ROWHEIGHT}
              color={
                idx % 2 === 0
                  ? theme.getColor('primary')
                  : theme.getColor('secondary')
              }
            />
          );
        })}
      <XAxis />
    </div>
  );
};

export default HorizontalChart;
