import React from 'react';
import Header from '../Header/Header';
import ContactForm from './ContactForm/ContactForm'
import ContactLocation from './ContactLocation/ContactLocation';

const ContactPage = () => {
  return (
    <>
    <Header />
    <div className="contact-page">
      <h1>This is the contact page</h1>
      <ContactForm />
      <ContactLocation />
    </div>
    </>
  )
}

export default ContactPage