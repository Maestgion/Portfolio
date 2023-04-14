import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  site_link
})=>{
  return (
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>

      {/* container */}

          <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >

          {/* sub-container */}

        <div className='relative w-full h-[200px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

        {/* demo-link-opener */}

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(site_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

          {/* details */}

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        {/* tech-tags */}

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>

    </motion.div>
  )
}

const Works = () => {
  return (
    <>
    {/* heading */}
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* details */}
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The projects presented in my showcase embody my technical creativity and ingenuity, showcasing my ability to think outside the box and develop unique solutions to complex challenges, while adhering to best practices and industry standards. Each project is briefly described with
          links to code repositories and live demos in it.
        </motion.p>
      </div>

      {/* project-card */}

      <div className="mt-20 flex flex-wrap gap-7">
        {
          projects.map((project, index)=>(
            <ProjectCard key={`project-${index} `} index={index} {...project} />
          ))
        }

      </div>

    </>

    
  )
}

export default SectionWrapper(Works, "projects")