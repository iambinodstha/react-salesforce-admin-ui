import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import AccountsOverview from '../../components/AccountsOverview'
import SubNav from '../../components/SubNav'
import ProtocolTable from './ProtocolTable';
import { defiNavLinkLists, protocolSplitOptions } from '../../utility/constants'

function index() {
  return (
    <div className='px-2 py-4 bg-sky-800 grid grid-cols-12 gap-4'>

      <div className='col-span-12'>
        <AccountsOverview />
      </div>

      <div className='col-span-12'>
        <SubNav navLinks={defiNavLinkLists} rootPath="/defi" />
      </div>

      <div className='col-span-12 xl:col-span-8'>
        <ProtocolTable />
      </div>

      <div className='col-span-12 lg:col-span-6 xl:col-span-4'>
        <HighchartsReact
          highcharts={Highcharts}
          options={protocolSplitOptions}
        />
      </div>

    </div>
  )
}

export default index