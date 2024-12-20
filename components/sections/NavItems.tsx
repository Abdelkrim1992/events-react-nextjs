'use client';

import Link from "next/link"
import { headerLinks } from "../constants/HeaderLinks"
import { usePathname } from "next/navigation"

const NavItems = () => {
  const pathName = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link)=>{
        const isActive = pathName === link.route;
        return (
          <li key={link.route} className={`${isActive ? "text-primary-500 " : "text-black"}` }>
            <Link href= {link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
    
  )
}

export default NavItems
