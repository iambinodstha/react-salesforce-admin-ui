import Input from '@salesforce/design-system-react/components/input';
import InputIcon from '@salesforce/design-system-react/components/icon/input-icon';
import ButtonGroup from '@salesforce/design-system-react/components/button-group';
import Button from '@salesforce/design-system-react/components/button';
import Dropdown from '@salesforce/design-system-react/components/menu-dropdown';
import Icon from '@salesforce/design-system-react/components/icon';

import { ReactComponent as StarIcon } from '../../assets/svg/star.svg'
import logo from '../../assets/image/logo.png';

type Props = {}

let headerIcons = [
    { id: "1", name: "add", class: "bg-gray-500 fill-white rounded" },
    { id: "2", name: "question", class: "" },
    { id: "3", name: "settings", class: "" },
    { id: "4", name: "notification", class: "" },
]

const NavBarAction = (props: Props) => {
    return (
        <div className='flex items-center space-y-0 flex-row justify-between'>
            <img className='h-11 w-11 object-contain' src={logo} alt="hedge-fund-manager-logo" />

            <Input
                id="inline-help-with-left-icon"
                iconLeft={<InputIcon name="search" category="utility" variant='combobox' />}
                placeholder="Global Search"
                className="hidden sm:block"
            />

            <div className='flex space-x-3 items-center'>
                <ButtonGroup id="button-group-more-icon">
                    <Button
                        className="px-1"
                    >
                        <StarIcon className='w-[.875rem] h-[.875rem] fill-gray-500' />
                    </Button>
                    <Dropdown
                        id="ButtonGroupExampleDropdown"
                        assistiveText={{ icon: 'More Options' }}
                        buttonVariant="icon"
                        iconCategory="utility"
                        iconName="down"
                        iconVariant="border-filled"
                        iconSize="small"
                        onSelect={(item: any) => {
                            console.log(item.label, 'selected');
                        }}
                        openOn="click"
                        options={[
                            { label: 'undo', value: 'A0' },
                            { label: 'redo', value: 'B0' },
                            { label: 'activate', value: 'C0' },
                        ]}
                    />
                </ButtonGroup>

                {headerIcons.map(icon => (
                    <Icon
                        key={icon.id}
                        assistiveText={{ label: 'Lock' }}
                        category="utility"
                        colorVariant="default"
                        name={icon.name}
                        size='small'
                        className={'w-[1.175rem] h-[1.175rem] ' + icon.class}
                    />
                ))}

                <Icon
                    assistiveText={{ label: 'Description' }}
                    category="action"
                    name="user"
                    size="x-small"
                />

            </div>
        </div>
    )
}

export default NavBarAction;