import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Layout from '../components/Layout'

const fuelCalc = () => {
  const [length, setLength] = useState(null)
  const [lengthMu, setLengthMu] = useState('inch')
  const [width, setWidth] = useState(null)
  const [widthMu, setWidthMu] = useState('inch')
  const [depth, setDepth] = useState(null)
  const [depthMu, setDepthMu] = useState('cm')
  const [vesselVolume, setVesselVolume] = useState(null)

  const calculate = (e) => {
    e.preventDefault()

    const eqLen = lengthMu === 'cm' ? length / 100 : (length * 2.54) / 100

    const eqWid = widthMu === 'cm' ? width / 100 / 2 : (width * 2.54) / 100 / 2

    const eqDep = depthMu === 'cm' ? depth / 100 : (depth * 2.54) / 100

    const vV =
      eqLen *
      (eqWid ** 2 * Math.acos((eqWid - eqDep) / eqWid) -
        (eqWid - eqDep) * Math.sqrt(2 * eqWid * eqDep - eqDep ** 2))

    setVesselVolume(vV.toFixed(3))

    document.getElementById('userWidth').scrollIntoView()
  }

  return (
    <div className=" mt-24 block md:flex">
      <Head>
        <title>Fuel Tank Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <div className="mx-auto flex min-h-screen flex-col items-center py-2 px-10">
        <div>
          <h1 className="my-5 text-4xl">Fuel Calculator</h1>
        </div>
        <div className="w-full max-w-4xl rounded border bg-gray-100 px-5 shadow">
          <form
            onSubmit={calculate}
            className=" flex flex-col items-center pt-5"
          >
            <div className="mb-4 space-y-4 md:mb-0 md:flex md:items-baseline md:space-x-4">
              <div className="relative">
                <input
                  id="userLength"
                  type="number"
                  step="any"
                  required
                  onChange={(e) => {
                    setLength(e.currentTarget.value)
                  }}
                  placeholder="100"
                  className="peer h-10 w-full rounded border-b-2 border-gray-300 px-3 text-gray-900 placeholder-transparent shadow focus:outline-none"
                />
                <label
                  htmlFor="userLength"
                  className="absolute left-0 -top-3.5 mx-2 cursor-text rounded bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2
                  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
                >
                  Length of the Vessel
                </label>
              </div>
              <div className="relative">
                <select
                  id="len-mu-choices"
                  placeholder="cm / in"
                  required
                  onChange={(e) => {
                    setLengthMu(e.currentTarget.value)
                  }}
                  className=" peer h-10 w-52 rounded border-b-2 border-gray-300 bg-white px-3 text-gray-900 placeholder-transparent shadow focus:outline-none"
                >
                  <option value="inch">Inches</option>
                  <option value="cm">Centimeters</option>
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
                  id="userWidth"
                  type="number"
                  step="any"
                  required
                  onChange={(e) => {
                    setWidth(e.currentTarget.value)
                  }}
                  placeholder="100"
                  className="peer h-10 w-full rounded border-b-2 border-gray-300 px-3 text-gray-900 placeholder-transparent shadow focus:outline-none"
                />
                <label
                  htmlFor="userWidth"
                  className="absolute left-0 -top-3.5 mx-2 cursor-text rounded bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2
                  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
                >
                  Width of the Vessel
                </label>
              </div>
              <div className="relative">
                <select
                  id="width-mu-choices"
                  placeholder="cm / in"
                  required
                  onChange={(e) => {
                    setWidthMu(e.currentTarget.value)
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
            <div className="mt-4 space-y-4 md:mb-0 md:flex md:items-baseline md:space-x-4">
              <div className="relative">
                <input
                  id="userDepth"
                  type="number"
                  step="any"
                  required
                  onChange={(e) => {
                    setDepth(e.currentTarget.value)
                  }}
                  placeholder="100"
                  className="peer h-10 w-full rounded border-b-2 border-gray-300 px-3 text-gray-900 placeholder-transparent shadow focus:outline-none"
                />
                <label
                  htmlFor="userDepth"
                  className="absolute left-0 -top-3.5 mx-2 cursor-text rounded bg-white px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2
                  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
                >
                  Fuel Level
                </label>
              </div>
              <div className="relative">
                <select
                  id="depth-mu-choices"
                  placeholder="cm / in"
                  required
                  onChange={(e) => {
                    setDepthMu(e.currentTarget.value)
                  }}
                  className="peer h-10 w-52 rounded border-b-2 border-gray-300 bg-white px-3 text-gray-900 placeholder-transparent shadow focus:outline-none "
                >
                  <option value="cm">Centimeters</option>
                  <option value="inch">Inches</option>
                </select>
                <label
                  htmlFor="depth-mu-choices"
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
                  setVesselVolume(null)
                }}
                className=" my-5 w-32 max-w-xl rounded border-2 border-slate-500 bg-sky-600 px-4 py-2 text-2xl text-gray-100 shadow-lg shadow-sky-300"
              >
                Reset
              </button>
            </div>
          </form>
          <h2
            className={
              vesselVolume === null
                ? 'hidden px-5 pb-3 text-center text-2xl font-bold'
                : 'px-5 pb-3 text-center text-2xl font-bold'
            }
          >
            Fuel Volume = {vesselVolume * 1000} L
          </h2>
        </div>
        <div className="max-w-2xl">
          <h1 className="mt-4 text-center">Accuracy is Key!</h1>
          <p>
            If you are off by 0.05 of an inch on your measurements, that{`'`}s
            about 2L you{`'`}ll be off by. So, 0.5" off and your 20L off. 5" off
            and your 200L off... You get the point I{`'`}m trying to make here.
          </p>
          <p>
            If you know the measurements of the primary tank (the inner tank)
            then use those measurements.
          </p>
          <p>
            If you don{`'`}t know the mesurments of the primary tank, measure
            the secondary tank (the outer tank), but be aware that usually there
            is about a centimeter gap between the two tanks and the wall
            thickness is about .4cm...
          </p>
          <p>
            That being said, you gotta remember to subract 2.8cm or 1.1 inches
            off your measurements.
          </p>
        </div>
      </div>
    </div>
  )
}

export default fuelCalc
