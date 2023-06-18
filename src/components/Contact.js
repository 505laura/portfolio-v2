import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form
    const data = new FormData(form.current);

    if(data.get('name') === "" || data.get('email') === "" || data.get('message') === "") {
      setError("Please fill out all fields.")
      return;
    }

    emailjs.sendForm('Portfolio', 'Portfolio', form.current, 'sDl5AfF2nFyKSRzAf')
      .then((result) => {
          console.log(result.text);
          // Clear form
          form.current.reset();
          // Disable button
          const button = document.getElementById("submit")
          button.disabled = true;
          setSuccess(true)
      }, (error) => {
          setError("Something went wrong. Please try again.");
          console.log(error.text);
      });
  };


  const resetError = () => {
    setError('');
  }


  return (
    <div className="flex pt-16 mx-auto text-offWhite w-3/4">
      <div className="mx-auto w-3/4">
        <h1 className="text-4xl font-medium">Contact me</h1>
        <p className="mt-3">Send me an email at <a href="mailto:laura@505laura.com" className="hover:text-accent">laura@505laura.com</a> or message me here:</p>

        <form ref={form} onSubmit={sendEmail} onChange={resetError} className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "/>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your name
              </label>
            </div>
            <div className="relative z-0">
              <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "/>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your message
              </label>
            </div>
          </div>

          <div>
            <p id="form_error" className={"text-red-500 pt-4 " + (error === '' ? 'invisible' : '')}>{error}</p>
          </div>

          <button id="submit" type="submit" className={"mt-5 rounded-md px-10 py-2 text-black hover:bg-blue-100 " + (success ? "bg-gray-500" : "bg-accent")}>
            {success ?  "Message sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </div>


// Add socials 

  );
}

export default Contact;
