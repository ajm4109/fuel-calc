import Link from 'next/link'

const SideBarLink = ({ link, icon, title }) => {
  return (
    <div className="my-8">
      <Link href={link}>
        <a className="flex">
          <div className="mr-2">{icon}</div>
          <h3>{title}</h3>
        </a>
      </Link>
    </div>
  )
}

export default SideBarLink
