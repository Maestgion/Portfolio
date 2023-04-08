import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen  mx-auto">
      {/* main hero */}

      <div
        className={`${styles.paddingX} flex flex-row gap-5 items-start  mx-auto max-w-7xl absolute inset-0 top-[100px]`}
      >
        {/* dot-container */}

        <div className="flex flex-col mt-5 justify-center items-center">
          <div className="w-5 h-5  rounded-full bg-[#915eff]" />

          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        {/* Intro */}

        <div>
          <h1 className={`${styles.heroHeadText} text-white-100 mt-2`}>
            Hie There,{" "}
          </h1>
          <h1 className={`${styles.heroHeadText}  text-white-100`}>
            I'm a{" "}
            <span className="text-[#915efd] inline-block">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.changeDelay(50).
                    typeString("Web Developer")
                    .changeDelay(50)
                    .pauseFor(200)
                    .deleteAll()
                    .changeDeleteSpeed(100)
                    .typeString("AR/VR Enthusiast")
                    .changeDelay(50)
                    .pauseFor(200)
                    .deleteAll()
                    .changeDeleteSpeed(100)
                    .typeString("Content Writer")
                    .changeDelay(50)
                    .pauseFor(200)
                    .deleteAll()
                    .changeDeleteSpeed(100)
                    .typeString("Trailbrazer!!")
                    .start();
                    
                }}
              />
            </span>
          </h1>
        </div>
      </div>

      <ComputersCanvas/>

      {/* scroll-gif */}

      <div className="flex justify-center items absolute bottom-4 w-full ">

                <a href="#about">
                  <div className="flex justify-center items-start w-[35px] h-[60px] rounded-3xl border-4 border-secondary p-2" >
                  <motion.div
                    animate={{
                      y: [0,24,0]
                    }}
                    transition={{
                      duration:1.5,
                      repeat:Infinity,
                      repeatType: 'loop'

                    }}
                    className="w-3 h-3 rounded-full bg-secondary mb-1"
                  />

           
                  </div>
                </a>

      </div>

    </section>
  );
};

export default Hero;
