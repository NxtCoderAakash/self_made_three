import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { motion } from 'framer-motion'


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
          What are my skills
      </p>
      <h2 className={styles.sectionHeadText}>
          Skills
      </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10' >
      {technologies.map((technology)=>(
         <div 
         className='h-56' 
         key={technology.name} >
          <BallCanvas icon={technology.icon}/>
          <p className='w-full text-center h-14'>{technology.name}</p>
          </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech,"skills")