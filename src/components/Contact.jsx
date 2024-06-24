import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/joy/CircularProgress";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { margin: "-300px" });

  const resetForm = () => {
    form.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_dcvaqpr",
        "template_g3p0j5j",
        form.current,
        "bdxkQ88Vb0owuO7Q4"
      )
      .then(
        (result) => {
          setSuccess(true);
          setLoading(false);
          resetForm();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  const handleInputClick = () => {
    setSuccess(null);
  };

  const textVariants = {
    initial: {
      x: -300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      ref={contactRef}
      id="contact"
      className="h-[calc(100vh-120px)] bg-white dark:bg-black/70 dark:text-white"
    >
      <motion.div
        variants={textVariants}
        initial="initial"
        animate={contactInView ? "animate" : {}}
        className="layout h-full flex flex-col justify-center items-center"
      >
        <motion.div
          variants={textVariants}
          className="flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-10 w-full"
        >
          <motion.div
            variants={textVariants}
            className="md:w-1/2 flex items-center justify-center"
          >
            <div className="h-[200px] w-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[400px]">
              <img
                className="h-full w-full object-contain"
                src="/img/accept.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div variants={textVariants} className="md:w-1/2">
            <h1 className="text-2xl text-center md:text-left mb-5">
              Contact Us
            </h1>
            <form className="flex flex-col gap-4">
              <input
                className="border pl-1 py-1 rounded-md dark:text-black"
                type="text"
                name="name"
                placeholder="Name"
                required
                onClick={handleInputClick}
              />
              <input
                className="border pl-1 py-1 rounded-md dark:text-black"
                type="email"
                name="email"
                placeholder="Email"
                required
                onClick={handleInputClick}
              />
              <textarea
                className="border pl-1 py-1 rounded-md dark:text-black"
                cols="30"
                rows="5"
                name="message"
                placeholder="Write you message"
                required
                onClick={handleInputClick}
              ></textarea>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-md text-lg font-medium active:scale-90 duration-100 transition-all w-[100px] flex items-center justify-center"
                type="submit"
              >
                {loading ? (
                  <CircularProgress size="sm" variant="solid" />
                ) : (
                  "Send"
                )}
              </button>
              {success &&
                "Your message has been sent. We'll get back to you soon :)"}
            </form>
          </motion.div>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="mt-5 md:mt-10 text-sm sm:text-left text-justify"
        >
          <motion.h1 variants={textVariants} className="mb-5">
            In order to access the admin account for the project section, please
            use the following credentials:
          </motion.h1>
          <motion.h3
            variants={textVariants}
            className="my-1 sm:text-left text-center"
          >
            Username: admin
          </motion.h3>
          <motion.h3
            variants={textVariants}
            className="sm:text-left text-center"
          >
            Password: 123456
          </motion.h3>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
