import { Outlet } from 'react-router-dom';

import AccountsOverview from '../../components/AccountsOverview';
import SubNavBar from '../../components/nav/SubNavBar';
import { exchangesNavLinkLists } from "../../utility/constants";

type Props = {}


const index = (props: Props) => {
  return (
    <div className='px-2 py-4 bg-sky-800 grid grid-cols-12 gap-4'>

      <div className='col-span-12'>
        <AccountsOverview />
      </div>

      <div className='col-span-12'>
        <SubNavBar navLinks={exchangesNavLinkLists} />
      </div>

      {/* render sub route component */}
      <Outlet />
    </div>
  )
}

export default index;