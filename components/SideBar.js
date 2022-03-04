import Link from 'next/link'
import SideBarLink from './SideBarLink'
import { FaHardHat } from 'react-icons/fa'
import { GiFuelTank, GiLeadPipe } from 'react-icons/gi'

const SideBar = () => {
  return (
    <div className=" hidden h-full min-h-screen min-w-max max-w-2xl bg-slate-700 px-2 py-3 text-white md:block">
      <Link href="/">
        <a className="mb-8 flex items-center justify-between border-b-2 p-4">
          <div>
            <FaHardHat className="text-2xl" />
          </div>
          <h1 className=" text-center text-base">Water Tech</h1>
        </a>
      </Link>
      <div>
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
  )
}

export default SideBar
