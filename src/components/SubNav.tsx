import { FunctionComponent, SVGProps } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
    navLinks: { id: string, label: string, to: string; icon: FunctionComponent<SVGProps<SVGSVGElement>> }[],
    rootPath: string
}

const SubNav = ({ navLinks, rootPath }: Props) => {
    return (
        <div className='bg-white px-2 pt-4 flex rounded overflow-x-auto'>
            {navLinks.map(link => (
                <NavLink
                    key={link.id}
                    to={rootPath + "/" + link.to}
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                        "py-2 px-3 border-b-4 border-b-transparent text-gray-500 " + (isActive ? "border-b-sky-500 text-gray-800" : ""
                        )}
                >
                    <p className='text-xs font-bold'>{link.label}</p>
                </NavLink>
            ))}
        </div>
    )
}

export default SubNav