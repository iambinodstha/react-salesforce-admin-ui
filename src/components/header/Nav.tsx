import Popover from '@salesforce/design-system-react/components/popover';
import Icon from '@salesforce/design-system-react/components/icon';

import { ReactComponent as MenuIcon } from '../../assets/svg/dot-menu.svg';
import { navLinks } from '../../utility/constants';
import Button from '@salesforce/design-system-react/components/button';

type Props = {}

const Nav = (props: Props) => {
    return (
        <div className='mt-2 flex space-x-6 items-center'>
            <MenuIcon className='w-6 h-6 fill-gray-500' />
            <h3 className='text-lg font-semibold text-gray-600'>Hedge Fund Manager</h3>

            <div className='hidden md:flex'>
                {navLinks.map(link => (
                    <div key={link.id} className={`py-1 px-3 border-t-4 border-transparent hover:bg-blue-50 ${link.id === "2" ? 'bg-blue-50 border-t-blue-400' : ''}`}>
                        {link?.subNavLinks ? (
                            <Popover
                                body={
                                    <div>
                                        {link?.subNavLinks.map(subLink => (
                                            <div key={subLink.id} className="flex items-center hover:bg-gray-100 py-2 px-4">
                                                <subLink.icon className='mr-3 w-7 h-7' />
                                                <p className='text-sm font-medium text-gray-800'>{subLink.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                }
                                id="popover-heading"
                                align="bottom"
                                hasNoNubbin={true}
                                hasNoCloseButton={true}
                                classNameBody="p-0 py-1"
                                style={{ marginTop: '10px', maxWidth: '220px' }}
                                heading=" "
                            >
                                <Button variant='base' className='flex items-center'>
                                    <p className=' text-gray-700 text-sm font-medium'>{link.name}</p>
                                    <Icon
                                        assistiveText={{ label: 'Account' }}
                                        category="utility"
                                        name="down"
                                        size="x-small"
                                        className="fill-gray-500 ml-2"
                                    />
                                </Button>
                            </Popover>
                        ) : (
                            <p className=' text-gray-700 text-sm font-medium'>{link.name}</p>
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Nav;