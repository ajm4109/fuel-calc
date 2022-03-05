import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/Layout'

const hoseVol = () => {
  const [len, setLen] = useState(null)
  const [lenMu, setLenMu] = useState('km')
  const [dia, setDia] = useState(null)
  const [diaMu, setDiaMu] = useState('inch')
  const [hoseVolume, setHoseVolume] = useState(null)

  const calculate = (e) => {
    e.preventDefault()

    const eqLen = lenMu === 'km' ? len * 1000 : len

    const eqRad = diaMu === 'cm' ? dia / 2 / 100 : (dia * 2.54) / 2 / 100

    const hV = Math.PI * eqRad ** 2 * eqLen

    setHoseVolume(hV.toFixed(3))

    document.getElementById('hoser').scrollIntoView()
  }

  return (
    <div className="block md:flex">
      <Head>
        <title>Hose Volume Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <div className="mx-auto mt-24 flex min-h-screen flex-col items-center py-2 px-10">
        <div>
          <h1 className="my-5 text-center text-4xl">Hose Volume Calculator</h1>
        </div>
        <div className="w-full max-w-4xl rounded border bg-gray-100 px-5 shadow">
          <form
            onSubmit={calculate}
            className="flex flex-col items-center pt-5"
          >
            <div className="mb-4 space-y-4 md:mb-0 md:flex md:items-baseline md:space-x-4">
              <div className="relative">
                <input
                  id="userLength"
                  type="number"
                  step="any"
                  required
                  onChange={(e) => {
                    setLen(e.currentTarget.value)
                  }}
                  placeholder="100"
                  className="peer h-10 w-full rounded border-b-2 border-gray-300 px-3 text-gray-900 placeholder-transparent shadow focus:outline-none"
                />
                <label
                  htmlFor="userLength"
                  className="absolute left-0 -top-3.5 mx-2 cursor-text rounded bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2
                  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
                >
                  Length of the Hose
                </label>
              </div>
              <div className="relative">
                <select
                  id="len-mu-choices"
                  placeholder="km / m "
                  required
                  onChange={(e) => {
                    setLenMu(e.currentTarget.value)
                  }}
                  className=" peer h-10 w-52 rounded border-b-2 border-gray-300 bg-white px-3 text-gray-900 placeholder-transparent shadow focus:outline-none"
                >
                  <option value="km">Kilometers</option>
                  <option value="m">meters</option>
                </select>
                <label
                  htmlFor="len-mu-choices"
                  className="absolute left-0 -top-3.5 mx-2 cursor-text rounded bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
                >
                  Measurment Unit
                </label>
              </div>
            </div>
            <div className="my-5 mb-4 space-y-4 md:mb-0 md:flex md:items-baseline md:space-x-4">
              <div className="relative">
                <input
                  id="userDiameter"
                  type="number"
                  step="any"
                  required
                  onChange={(e) => {
                    setDia(e.currentTarget.value)
                  }}
                  placeholder="100"
                  className="peer h-10 w-full rounded border-b-2 border-gray-300 px-3 text-gray-900 placeholder-transparent shadow focus:outline-none"
                />
                <label
                  htmlFor="userDiameter"
                  className="absolute left-0 -top-3.5 mx-2 cursor-text rounded bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2
                  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
                >
                  Diameter of the Hose
                </label>
              </div>
              <div className="relative">
                <select
                  id="dia-mu-choices"
                  placeholder="cm / in"
                  required
                  onChange={(e) => {
                    setDiaMu(e.currentTarget.value)
                  }}
                  className="peer h-10 w-52 rounded border-b-2 border-gray-300 bg-white px-3 text-gray-900 placeholder-transparent shadow focus:outline-none"
                >
                  <option value="inch">Inches</option>
                  <option value="cm">Centimeters</option>
                </select>
                <label
                  htmlFor="width-mu-choices"
                  className="absolute left-0 -top-3.5 mx-2 cursor-text rounded bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
                >
                  Measurment Unit
                </label>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className=" my-5 max-w-xl rounded border-2 border-slate-500 bg-sky-600 px-4 py-2 text-2xl text-gray-100 shadow-lg shadow-sky-300"
              >
                Calculate
              </button>
              <button
                type="reset"
                onClick={() => {
                  setHoseVolume(null)
                }}
                className=" my-5 w-32 max-w-xl rounded border-2 border-slate-500 bg-sky-600 px-4 py-2 text-2xl text-gray-100 shadow-lg shadow-sky-300"
              >
                Reset
              </button>
            </div>
          </form>
          <h2
            id="hoser"
            className={
              hoseVolume === null
                ? 'hidden px-5 pb-3 text-center text-2xl font-bold'
                : 'px-5 pb-3 text-center text-2xl font-bold'
            }
          >
            Fuel Volume = {hoseVolume * 1000} L or {hoseVolume} m³
          </h2>
        </div>
      </div>
    </div>
  )
}

export default hoseVol
