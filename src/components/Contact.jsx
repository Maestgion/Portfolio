import React, { useRef, useState } from "react";import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <>
      {/* container */}

      <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
        {/* motion-container */}

        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={`${styles.sectionSubText} `}>Get in touch</p>
          <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
