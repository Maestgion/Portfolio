import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* main hero */}

      <div
        className={`${styles.paddingX} flex flex-row gap-5 items-start  mx-auto max-w-7xl absolute inset-0 top-[120px]`}
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
          <h1 className={`${styles.heroHeadText} mt-2 text-white-100`}>
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

    </section>
  );
};

export default Hero;
