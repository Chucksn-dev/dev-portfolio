import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function SendMessage() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_qo3bdnv",
        "template_dpc3v7s",
        formRef.current,
        "b2jp1ozQMwK-YXvNu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setError(null);
        },
        (error) => {
          console.log(error.text);
          setError(error.text);
        }
      );
  };

  return (
    <div className="send-message-container p-4 md:p-8 bg-slate-300/95 dark:bg-neutral-900/90 w-4/5 mx-auto">
      <span className="block font-prosto font-medium text-lg md:text-xl text-center">
        Send me a message
      </span>
      <form ref={formRef} onSubmit={handleSubmit}>
        {error && <div>Error: {error}</div>}
        {success && <div>Email sent successfully</div>}
        <label
          htmlFor="name"
          className="font-ubuntu text-sm sm:text-base font-medium block mb-1"
        >
          Name
        </label>{" "}
        <input
          type="text"
          name="user_name"
          className="w-full p-2 rounded-lg bg-slate-200 dark:bg-slate-300 mb-4 text-black outline-none"
          placeholder="Your Name"
        />
        <label
          htmlFor="email"
          className="font-ubuntu text-sm sm:text-base font-medium block mb-1"
        >
          Email
        </label>{" "}
        <input
          type="text"
          name="user_email"
          className="w-full p-2 rounded-lg bg-slate-200 dark:bg-slate-300 mb-4 text-black outline-none"
          placeholder="Your Email"
        />
        <label
          htmlFor="subject"
          className="font-ubuntu text-sm sm:text-base font-medium block mb-1"
        >
          Subject
        </label>{" "}
        <input
          type="text"
          name="subject"
          className="w-full p-2 rounded-lg bg-slate-200 dark:bg-slate-300 mb-4 text-black outline-none"
          placeholder="Subject"
        />
        <label
          htmlFor="message"
          className="font-ubuntu text-sm sm:text-base font-medium block mb-1"
        >
          Message
        </label>{" "}
        <textarea
          type="text"
          name="message"
          className="w-full p-2 rounded-lg bg-slate-200 dark:bg-slate-300 mb-4 h-52 text-black outline-none"
          placeholder="Message"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="p-2 md:p-3 bg-sky-700 rounded-xl md md:mt-4 md:text-xl lg:hover:bg-sky-800 text-white"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
