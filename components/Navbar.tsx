'use client'

import Image from "next/image"
import Link from "next/link"
import {NAV_LINKS} from "@/constants"
import Button from "./Button";
import { MouseEventHandler } from "react";
const Navbar = () => {

    const tailwindLinkClasses: string[] = ['text-gray-600',
        'hover:scale-110',
        'hover:text-black',
        'hover:-translate-y-1',
        'transform transition', 
        'ease-in-out'
    ];

    const handelMenuClick: MouseEventHandler<HTMLAnchorElement> = () => {
        const menu: HTMLElement | null = document.getElementById('menu');
        menu?.classList.toggle('hidden');
    }

  return (
    <div className="relative z-[100] max-container padding-container m-0 p-0">
        <nav className="flex justify-between items-center mb-5 p-2">
            <Link href='/' >
            <Image src='/campat.svg' alt="logo" width={160} height={160}/>
            </Link>
            <ul className="hidden h-full lg:flex gap-12">
            
            
                {
                    NAV_LINKS.map(link => 
                        <Link 
                        href={link.href} 
                        key={link.key}
                        className={tailwindLinkClasses.join(' ')}
                        >
                            {link.label}
                        </Link>
                    )
                }

            </ul>
            <div className="hidden lg:flexCenter">
                <Button type="button" label="Login" svg="/user.svg" variant="btn_dark_green" /> 
            </div>
            <Link href='' className="lg:hidden inline-block hover:scale-[1.1] ease-in-out" onClick={handelMenuClick}>
            <Image src='/menu.svg' alt="menu" width={32} height={32} />
            </Link>
        </nav>
        <div id="menu" className="z-[1000] hidden max-container lg:hidden absolute top-[48px] right-[0] h-[100vh]">
            <ul className="flex-col gap-3 w-[70vw] h-full bg-[#071827]">
                
                
                {
                    NAV_LINKS.map(link => 
                        <Link 
                        onClick={handelMenuClick}
                        href={link.href} 
                        key={link.key}
                        className={`w-full h-[12vh]  block text-xl p-10 border-t bg-[#071827] ${tailwindLinkClasses.join(' ')} hover:bg-[#a0c4e4]`}
                        >
                            {link.label}
                        </Link>
                    )
                }
        
            </ul>
        </div>
    </div>

  )
}

export default Navbar