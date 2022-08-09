import { Outlet } from 'react-router-dom';

import AccountsOverview from '../../components/AccountsOverview'
import SubNavBar from '../../components/nav/SubNavBar'
import { defiNavLinkLists } from '../../utility/constants'

function index() {
  return (
    <div className='px-2 py-4 bg-sky-800 grid grid-cols-12 gap-4'>

      <div className='col-span-12'>
        <AccountsOverview />
      </div>

      <div className='col-span-12'>
        <SubNavBar navLinks={defiNavLinkLists} />
      </div>

      {/* render sub route component */}
      <Outlet />

    </div>
  )
}

export default index;