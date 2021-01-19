import React from "react";
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <form className="contact-form" >
      <input type="text" name="name" id="name" className="form-name" />
      <input type="text" name="email" id="email" className="form-email" />
      <input type="text" name="subject" id="subject" className="form-subject" />
      <textarea name="content" id="content" cols="30" rows="10" className="form-description" ></textarea>
      <input type="submit" value="Submit"/>
    </form>
  );
};

export default ContactForm;
