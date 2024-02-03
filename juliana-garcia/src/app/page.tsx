'use client'
import { getAllData } from '@/data'
import { bgWater } from '@/constants'
import Intro from './components/intro'
import Skills from './components/skills'
import WhatIDo from './components/what-i-do'
import AboutMe from './components/about-me'



export default function Home() {

  const data = getAllData()

  const bgImg = {
    backgroundImage: 'url("/bg.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <main className="grid grid-cols-12 w-100 min-h-screen text-black ">
      <Intro/>
      <div className='col-span-12 lg:col-span-9 bg-white flex flex-col justify-around items-center p-10' style={{ ...bgImg }}>
        <AboutMe />
        <WhatIDo />
      </div>
      <div className='col-span-12 flex flex-col justify-around items-center p-10' style={{background: bgWater}}>
        <Skills />
      </div>
    </main>
  )
}
