import React,{useState} from 'react'
import {styles} from "../styles"
import {ComputersCanvas} from "./canvas"
import { motion } from 'framer-motion'
import  ChatApp  from "./ChatLike"
const Hero = () => {
  const [stepper,setStepper]=useState(1)

  const handleStepper=(value)=>{
    setStepper(value)
  }

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7-xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'>
          </div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'>
          </div>
        </div>
        <div>
        <h1 className={`${styles.heroHeadText} text-white-100 mt-2`}><ChatApp step={1} handleStepper={handleStepper} message={`Hi, I'm`} speed={2000}/> {stepper>=2 && <span className='text-[#915eff]'><ChatApp step={2} message="Aakash" speed={2000} ani handleStepper={handleStepper}/></span>} </h1>
          <p>{stepper>=3 && <ChatApp step={3} message="I develop Responsive Web Application" speed={2000} handleStepper={handleStepper}/> }<br className='sm:hidden block'/>{stepper>=4 && <ChatApp step={4} message="and Valuable Dashboards" speed={2000} handleStepper={handleStepper}/> }</p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'> 
      <a href="#about">
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
          animate={{y:[0,24,0]}}
          transition={{duration:1.5,repeat:Infinity,repeatType:"loop"}}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
          >
            
          </motion.div>

        </div>
      </a>
      </div>
       

    </section>
  )
}

export default Hero