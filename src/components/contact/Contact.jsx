import'./contact.css';
import {MdOutlineMail} from "react-icons/md";
import {useRef} from "react";
import * as emailjs from "@emailjs/browser";
import swal from 'sweetalert';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o6g7zh6', 'template_drcymel', form.current, 'nxj1Eb4AdUdsZeAmi')
        .then((result) => {
          swal("Great News!", "Your message was sent!", "success");
          e.target.reset();
        }, (error) => {
          console.log(error.text);
        });
  };

  return (
      <section id="contact">
        <h5>Let's work together</h5>
        <h2>Contact</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>admin@tsudoworthy.com</h5>
              <a href="mailto:admin@tsudoworthy.com" target="_blank" rel="noreferrer">Send a message</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="name" name="name" placeholder="Enter your name" required/>
            <input type="email" name="email" placeholder="Enter your email" required/>
            <textarea name="message" rows="7" placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
  );
};

export default Contact;
