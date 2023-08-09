'use client'
import { FC, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"
import { BiUser, BiLibrary, BiSolidBookOpen, BiSignal4, BiClipboard, BiFoodMenu, BiCaretDown, BiCaretUp, BiGift } from 'react-icons/bi'

interface AvatarNavbarProps {

}

const AvatarNavbar: FC<AvatarNavbarProps> = ({ }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false)
    console.log(isSubMenuOpen)
    return <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="https://github.com/codesan-git.png" />
                    <AvatarFallback>AV</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem><BiUser className='w-5 h-5' />Profile</DropdownMenuItem>
                <DropdownMenuItem><BiLibrary className='w-5 h-5' />Library</DropdownMenuItem>
                <DropdownMenuItem><BiSolidBookOpen className='w-5 h-5' />Stories</DropdownMenuItem>
                <DropdownMenuItem><BiSignal4 className='w-5 h-5' />Stats</DropdownMenuItem>
                <DropdownMenuSeparator />
                <div>
                    <DropdownMenuItem><BiClipboard className='w-5 h-5' />Our Plans</DropdownMenuItem>
                    <DropdownMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                {
                                    isSubMenuOpen === false ?
                                        <>
                                            <div className='flex gap-2'>
                                                <BiFoodMenu className='w-5 h-5' />Our Menus<BiCaretDown className='w-5 h-5' />
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className='flex gap-2'>
                                                <BiFoodMenu className='w-5 h-5' />Our Menus<BiCaretUp className='w-5 h-5' />
                                            </div>
                                        </>
                                }
                                <DropdownMenuContent onAnimationStartCapture={()=>setIsSubMenuOpen(!isSubMenuOpen)}>
                                    <DropdownMenuItem>Our Menus</DropdownMenuItem>
                                    <DropdownMenuItem>Cookbook</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenuTrigger>
                        </DropdownMenu>
                    </DropdownMenuItem>
                    <DropdownMenuItem><BiGift className='w-5 h-5' />Gift Cards</DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <div>
                        <div className='font-semibold'>Sign Out</div>
                        <div>satrianugraha4000@gmail.com</div>
                    </div>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    </div>
}

export default AvatarNavbar