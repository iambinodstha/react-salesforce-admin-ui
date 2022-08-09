import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { assetBreakDownOptions, averageMonthlyWeatherOptions, donutPieChartOptions, quarterlyPerfomanceOptions } from '../../utility/constants';

type Props = {}

const ExchangeOverview = (props: Props) => {
  return (
    <>
      <div className='col-span-12 xl:col-span-8'>
        <HighchartsReact
          highcharts={Highcharts}
          options={quarterlyPerfomanceOptions}
        />
      </div>

      <div className='col-span-12 lg:col-span-6 xl:col-span-4'>
        <HighchartsReact
          highcharts={Highcharts}
          options={assetBreakDownOptions}
        />
      </div>

      <div className='col-span-12 lg:col-span-6 xl:col-span-4'>
        <HighchartsReact
          highcharts={Highcharts}
          options={donutPieChartOptions}
        />
      </div>

      <div className='col-span-12 lg:col-span-6 xl:col-span-4'>
        <HighchartsReact
          highcharts={Highcharts}
          options={averageMonthlyWeatherOptions}
        />
      </div>

      <div className='col-span-12 lg:col-span-6 xl:col-span-4'>
        <HighchartsReact
          highcharts={Highcharts}
          options={donutPieChartOptions}
        />
      </div>
    </>
  )
}

export default ExchangeOverview;