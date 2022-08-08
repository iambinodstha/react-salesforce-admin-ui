import { FunctionComponent, SVGProps } from 'react'

type Props = {
    navLinks: { id: string, name: string, icon: FunctionComponent<SVGProps<SVGSVGElement>> }[]
}

const SubNav = ({ navLinks }: Props) => {
    return (
        <div className='bg-white px-2 pt-4 flex rounded overflow-x-auto'>
            {navLinks.map(link => (
                <div
                    key={link.id}
                    className={`py-2 px-3 border-b-4 border-b-transparent text-gray-500 ${link.id === "2" ? "border-b-blue-400 text-gray-800" : ""}`}>
                    <p className='text-sm font-medium'>{link.name}</p>
                </div>
            ))}
        </div>
    )
}

export default SubNav