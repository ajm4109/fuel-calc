import { HiMenu } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import { FaHardHat } from 'react-icons/fa'
import { GiFuelTank, GiLeadPipe } from 'react-icons/gi'
import SideBarLink from './SideBarLink'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuClick = () => setMenuOpen(!menuOpen)
  const logoClick = () => setMenuOpen(false)

  return (
    <>
      <div className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-white px-6 shadow shadow-black md:hidden">
        <div>
          <Link href="/">
            <a
              onClick={logoClick}
              className="flex items-center justify-between "
            >
              <FaHardHat className="text-2xl" />
              <h1 className=" text-center text-base">Water Tech</h1>
            </a>
          </Link>
        </div>
        <div onClick={menuClick} className="cursor-pointer">
          {menuOpen ? (
            <GrClose className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </div>
      </div>
      <div className={menuOpen ? 'relative z-40' : 'relative z-40  hidden'}>
        <div className="fixed top-20 bottom-0 flex  min-h-screen w-full flex-col items-center gap-3 bg-black/80 pt-14 text-3xl text-white backdrop-blur-sm">
          <SideBarLink
            link="/fuelCalc"
            icon={<GiFuelTank />}
            title="Fuel Tank Calc"
          />
          <SideBarLink
            link="/hoseVol"
            icon={<GiLeadPipe />}
            title="Hose Volume Calc"
          />
        </div>
      </div>
    </>
  )
}

export default Navbar
