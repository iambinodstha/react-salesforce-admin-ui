import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import AccountsOverview from '../../components/AccountsOverview';
import SubNav from '../../components/SubNav';
import { assetBreakDownOptions, averageMonthlyWeatherOptions, donutPieChartOptions, quarterlyPerfomanceOptions } from '../../utility/constants';
import { exchangesNavLinkLists } from "../../utility/constants";

type Props = {}


const index = (props: Props) => {
  return (
    <div className='px-2 py-4 bg-sky-800 grid grid-cols-12 gap-4'>

      <div className='col-span-12'>
        <AccountsOverview />
      </div>

      <div className='col-span-12'>
        <SubNav navLinks={exchangesNavLinkLists} rootPath="/exchange"/>
      </div>

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

    </div>
  )
}

export default index;