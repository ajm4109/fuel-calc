import SideBar from './SideBar'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
