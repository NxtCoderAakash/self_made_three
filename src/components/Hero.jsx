import React from 'react'
import {styles} from "../styles"
import {ComputersCanvas} from "./canvas"

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7-xl mx-auto flex flex-row items-start gap-5`}>
        <div></div>

      </div>
    </section>
  )
}

export default Hero