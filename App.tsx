import * as React from 'react';
import { HorizontalChart } from './components';
import { themeProvider } from './styles/themeProvider';
import { MAXSVGWIDTH, DELAY } from './conf';
import { apiGetData } from './api';
import { generateStyle } from './util';
import { IChartData } from './interfaces';

export default function App() {
  const [data, setData] = React.useState<IChartData[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  // inserting an artificial delay to get the data from an API
  React.useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        const data = apiGetData();
        setData(data);
        setLoading(false);
      }, DELAY);
    };
    setLoading(true);
    fetchData();
  }, []);

  // create a theme provider to fetch colors and fonts
  const theme = themeProvider();

  return (
    <div>
      <div>
        <h1 style={generateStyle(theme, 'info', 'primary')}>Simple Graph</h1>
        <p style={generateStyle(theme, null, 'secondary')}>
          Evangelos Tripolitakis 02.03.2023
        </p>
        <p style={generateStyle(theme, null, null)}>vtripolitakis@gmail.com</p>
        {loading && <div>Loading... &#9881;</div>}
        {!loading && (
          <div>
            <h2 style={generateStyle(theme, 'success', null)}>Chart Area</h2>
            <HorizontalChart chartWidth={MAXSVGWIDTH} chartData={data} />
          </div>
        )}
      </div>
      <div style={{ clear: 'both' }}></div>
      <h4>Notes on missing parts and assumptions:</h4>
      <pre>- No unit / E2E tests.</pre>
      <pre>
        - Missing logic to scale the chart properly, it works for the existing
        proportions.
      </pre>
      <pre>
        - Xaxis logic is not responsive and not fully implemented to be
        calculated dynamically.
      </pre>
      <pre>
        - Used lodash for some quick and dirty data retrieval, could use native
        JS of course
      </pre>
    </div>
  );
}
