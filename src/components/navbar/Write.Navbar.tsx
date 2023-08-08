import { FC } from 'react'
import { Button } from '../ui/Button'
import { IoCreateOutline } from 'react-icons/io5'
interface WriteNavbarProps {

}

const WriteNavbar: FC<WriteNavbarProps> = ({ }) => {
    return <>
        <Button className='flex gap-2'>
            <IoCreateOutline className='w-6 h-6' />
            <p>Write</p>
        </Button>
    </>
}

export default WriteNavbar