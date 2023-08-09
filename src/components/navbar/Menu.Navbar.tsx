'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/NavigationMenu"

import { FC } from 'react'
import { Button } from "../ui/Button"
import Link from "next/link"

interface MenuNavbarProps {

}

const MenuNavbar: FC<MenuNavbarProps> = ({ }) => {
    return <div className="flex h-full">
        <Button variant={"ghost"} className="text-xl">Our Plans</Button>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-xl">Our Menus</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-2 text-xl">
                        <Link href="#" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Our Menus</NavigationMenuLink>
                        </Link>
                        <Link href="#" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Cookbook</NavigationMenuLink>
                        </Link>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <Button variant={"ghost"} className="text-xl">Gift Cards</Button>
    </div>
}

export default MenuNavbar

