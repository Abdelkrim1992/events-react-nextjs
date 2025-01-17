import Image from "next/image"
import Link from "next/link"
import {
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import { checkUser } from "@/app/api/route/checkUser"

const Header = async () => {

  const user = await checkUser();

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
            <Image src="/assets/images/logo.svg" width={120} height={40} alt="logo"/>
        </Link>
        <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
        </nav>
        <div className="flex w-36 items-center justify-end">
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
                <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
          <nav className="md:hidden">
            <MobileNav/>
          </nav>  
      </div>
      </div>
    </header>
  )
}

export default Header
