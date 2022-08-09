import NavBarAction from "./NavBarAction"
import NavBar from "./NavBar"

type Props = {}

function index({ }: Props) {
  return (
    <header className='py-1 px-6'>
      <NavBarAction />
      <NavBar />
    </header>
  )
}

export default index