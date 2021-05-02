import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";
import ContactInfo from "./ContactInfo";

const ContactMe = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_2m7nus9",
      "template_o5uwcu6",
      toSend,
      "user_y7AeAl4ldCX1VeHZsi2uJ"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="row mt-5">
      <h1 className="text-center">Contact Me</h1>
      <div className="col-md-5">
        <ContactInfo></ContactInfo>
      </div>
      <div className="col-md-7">
        <form onSubmit={onSubmit} className="w-75 m-auto">
          <div>
            <div>
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="from_name"
                placeholder="Name"
                value={toSend.from_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-2">
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="reply_to"
                placeholder="Your email"
                value={toSend.reply_to}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-2">
            <div>
              <label htmlFor="message">Message</label>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                type="text"
                name="message"
                placeholder="Your message"
                value={toSend.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-2">
            <input className="btn btn-primary px-4" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
