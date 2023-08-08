import { FC } from 'react'
import { ModeToggle } from '../toggle-dark-mode'
import MenuNavbar from './Menu.Navbar'
import WriteNavbar from './Write.Navbar'
import AvatarNavbar from './Avatar.Navbar'
interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
  return <>
    <div className='py-2'>
      <div className='flex justify-between'>
        <div className='flex gap-x-8'>
          <div>
            <h1 className='font-bold text-3xl'>_Codesan</h1>
          </div>
          <div className='hidden lg:block my-auto'>
            <MenuNavbar />
          </div>
        </div>
        <div className='flex gap-4 my-auto'>
          <div>
            <ModeToggle />
          </div>
          <div className='hidden lg:block'>
            <WriteNavbar />
          </div>
          <div>
            <AvatarNavbar />
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Navbar