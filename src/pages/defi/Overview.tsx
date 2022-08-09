import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import ProtocolTable from './ProtocolTable';
import { protocolSplitOptions } from '../../utility/constants';

type Props = {}

const DEFIOverview = (props: Props) => {
    return (
        <>
            <div className='col-span-12 xl:col-span-8'>
                <ProtocolTable />
            </div>

            <div className='col-span-12 lg:col-span-6 xl:col-span-4'>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={protocolSplitOptions}
                />
            </div>
        </>
    )
}

export default DEFIOverview