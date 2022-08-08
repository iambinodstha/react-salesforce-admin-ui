import Action from "./Action"
import Nav from "./Nav"

type Props = {}

function index({ }: Props) {
  return (
    <header className='py-1 px-6'>
      <Action />
      <Nav />
    </header>
  )
}

export default index