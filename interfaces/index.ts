interface ISVGBar {
  svgwidth: number;
  width: number;
  height: number;
  color: string;
}

interface IGraphRow extends ISVGBar {
  fullname: string;
}

interface IChartData {
  fullname: string;
  age: number;
}

interface IHorizontalChart {
  chartWidth: number;
  chartData: IChartData[];
}

interface IThemeProvider {
  getColor: (color: string) => string;
  getFont: (font: string) => string;
}

export { IGraphRow, ISVGBar, IHorizontalChart, IChartData, IThemeProvider };
