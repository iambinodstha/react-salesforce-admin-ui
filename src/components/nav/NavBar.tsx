import { NavLink, useLocation } from "react-router-dom";
import Button from '@salesforce/design-system-react/components/button';
import Popover from '@salesforce/design-system-react/components/popover';
import Icon from '@salesforce/design-system-react/components/icon';

import { ReactComponent as MenuIcon } from '../../assets/svg/dot-menu.svg';
import { navLinkLists } from '../../utility/constants';

type Props = {}

const NavBar = (props: Props) => {
    const location = useLocation();
    return (
        <div className='px-2 mt-2 flex space-x-6 items-center'>
            <MenuIcon className='w-5 h-5 fill-gray-500' />
            <h3 className='text-lg font-semibold text-gray-800'>Hedge Fund Manager</h3>

            <div className='hidden md:flex items-center'>
                {navLinkLists.map(link => {
                    const isActive = location.pathname.includes(link.to);

                    return link.subNavLists ? (
                        <Popover
                            key={link.id}
                            body={
                                <div>
                                    {link?.subNavLists.map(subLink => (
                                        <NavLink
                                            key={subLink.id}
                                            to={link.to + "/" + subLink.to}
                                            style={{ textDecoration: "none" }}
                                            className={({ isActive }) =>
                                                "flex items-center hover:bg-gray-100 py-2 px-4 " + (isActive ? "bg-blue-50" : ""
                                                )}
                                        >
                                            <subLink.icon className='mr-3 w-7 h-7' />
                                            <p className='text-sm font-medium text-gray-800'>{subLink.label}</p>
                                        </NavLink>
                                    ))}
                                </div>
                            }
                            id="popover-heading"
                            align="bottom"
                            hasNoNubbin={true}
                            hasNoCloseButton={true}
                            classNameBody="p-0 py-1"
                            style={{ marginTop: '10px', maxWidth: '220px' }}
                            heading={<div></div>}
                        >
                            <Button variant='base' className={`flex items-center py-1 px-3 border-t-4 hover:bg-sky-50 focus:ring-0 ${isActive ? "bg-blue-50 border-t-sky-500" : ""}`}>
                                <p className=' text-gray-700 text-sm font-medium'>{link.label}</p>
                                <Icon
                                    assistiveText={{ label: 'Account' }}
                                    category="utility"
                                    name="chevrondown"
                                    size="x-small"
                                    className="fill-gray-500 ml-2"
                                />
                            </Button>
                        </Popover>
                    ) : (
                        <NavLink
                            key={link.id}
                            to={link.to}
                            style={{ textDecoration: "none" }}
                            className={({ isActive }) =>
                                "py-1 px-3 border-t-4 border-transparent hover:bg-sky-50 " + (isActive ? "bg-blue-50 border-t-sky-500" : ""
                                )}
                        >
                            <p className="text-gray-700 text-sm font-semibold">{link.label}</p>
                        </NavLink>
                    )
                })}
            </div>

        </div>
    )
}

export default NavBar;