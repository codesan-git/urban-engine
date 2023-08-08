import { FC } from 'react'
import { ModeToggle } from '../toggle-dark-mode'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return <div>
    <ModeToggle />
  </div>
}

export default Navbar