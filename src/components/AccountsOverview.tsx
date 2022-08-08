import ButtonGroup from '@salesforce/design-system-react/components/button-group'
import Button from '@salesforce/design-system-react/components/button'
import { ReactComponent as Accounticon } from '../assets/svg/accounts.svg'

type Props = {}

let overviewBalance = [
  { label: 'Total Balance', value: "$2,325,453.34" },
  { label: 'Staked Balance', value: "$2,325,453.34" },
  { label: 'Liquid Balance', value: "$2,325,453.34" },
  { label: 'Total Balance', value: "$2,325,453.34" }
];

let overviewChange = [
  { label: '24 Hour Change', value: "+325,453,34 (2.45%)", isPositive: true },
  { label: 'Week Change', value: "+325,453,34 (2.45%)", isPositive: true },
  { label: 'Month Change', value: "-25,453,34 (2.45%)", isPositive: false },
  { label: 'YTD Change', value: "+325,453,34 (2.45%)", isPositive: true },
];


const AccountsOverview = (props: Props) => {
  return (
    <div className='bg-white rounded overflow-hidden'>

      <div className='bg-gray-200 p-3 flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between border-b'>

        <div className='flex items-center space-x-2'>
          <Accounticon className='w-8 h-8' />
          <div>
            <p className='text-xs font-medium'>Accounts</p>
            <h3 className='text-base font-bold'>Trading Wallet</h3>
          </div>
        </div>

        <div className='flex'>
          <Button
            iconCategory="utility"
            iconName="add"
            iconPosition="left"
            label="Add Tag"
            className="mr-2 bg-white font-medium"
          />

          <ButtonGroup>
            <Button
              label="Edit"
              className="bg-white font-medium"
            />
            <Button
              label="Delete"
              className="bg-white font-medium"
            />
            <Button
              assistiveText={{ icon: 'Icon Border-filled medium' }}
              iconCategory="utility"
              iconName="down"
              iconVariant="border-filled"
              variant="icon"
              className="bg-white"
            />
          </ButtonGroup>
        </div>

      </div>


      <div className='p-3 flex flex-col space-x-0 space-y-4 lg:space-y-0 lg:flex-row lg:space-x-20'>

        <div className='flex space-x-5 lg:space-x-10'>
          {overviewBalance.map((balance, index) => (
            <div key={index} className="space-y-1 md:space-y-2">
              <p className='text-xs font-medium text-gray-600'>{balance.label}</p>
              <p className='text-xs font-bold text-gray-700'>{balance.value}</p>
            </div>
          ))}
        </div>

        <div className='flex space-x-5 lg:space-x-10'>
          {overviewChange.map((change, index) => (
            <div key={index} className="space-y-1 md:space-y-2">
              <p className='text-xs font-medium text-gray-600'>{change.label}</p>
              <p className={`text-xs font-bold ${change.isPositive ? 'text-green-500' : 'text-red-500'}`}>{change.value}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default AccountsOverview