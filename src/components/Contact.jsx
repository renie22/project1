import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/joy/CircularProgress";

const Contact = () => {
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  // Function to reset the form fields
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

  return (
    <div
      id="contact"
      className="flex justify-center bg-white dark:bg-black/70 dark:text-white xl:pt-12 xl:pb-1.5 sm:pb-[120px] pt-40 pb-[90px]"
    >
      <div className="w-[1400px] h-[74vh] md:p-5 p-2 flex flex-col items-center justify-center">
        <div className="flex xl:flex-row flex-col gap-5 xl:items-stretch items-center w-full">
          <div className="w-1/2 flex items-center justify-center">
            <img
              className="xl:h-full xl:w-full h-2/3 w-2/3 object-cover"
              src="/img/accept.png"
              alt=""
            />
          </div>
          <div className="w-1/2 flex flex-col xl:items-stretch items-center">
            <h1 className="text-2xl my-5">Contact Us</h1>
            <form
              ref={form}
              className="flex flex-col gap-5 xl:w-[600px] lg:w-[500px] md:w-[400px] w-[300px]"
              onSubmit={handleSubmit}
            >
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
                rows="8"
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
          </div>
        </div>
        <div className="mt-10 text-sm sm:text-left text-justify">
          <h1 className="mb-5">
            In order to access the admin account for the project section, please
            use the following credentials:
          </h1>
          <h3 className="my-1 sm:text-left text-center">Username: admin</h3>
          <h3 className="sm:text-left text-center">Password: 123456</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
