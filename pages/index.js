import Layout from '../components/Layout'

const index = () => {
  return (
    <div className="block md:flex">
      <Layout />
      <div className="mx-auto mt-24 flex justify-center p-5">
        <h1 className="text-center">Welcome to the Water Tech Helper Site</h1>
      </div>
    </div>
  )
}

export default index
