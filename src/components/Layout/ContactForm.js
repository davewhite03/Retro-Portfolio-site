import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Fragment } from 'react';
import classes from './ContactForm.module.css';
import Button from '../UI/Button';
import WorkerAnimation from '../SvgAnimation/WorkerAnimation';

export const ContactForm = (props) => {
  const [onClose, setOnClose] = useState(false);
  const form = useRef();
  const onCloseHandler = () => {
    setOnClose(false);
    props.onClose(onClose);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vt3ni7h',
        'template_7gud98h',
        e.target,
        'LnPNPTi4yJzVVnmH7'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Fragment>
      <Button className={classes.x} onClick={onCloseHandler}>
        x
      </Button>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className={classes.name} type="text" name="name" />

        <div>
          <label className={classes.emailInput}>Email</label>

          <input className={classes.email} type="email" name="email" />
        </div>
        <label className={classes.messageInput}>Message</label>
        <textarea className={classes.message} name="message" />
        <input className={classes.send} type="submit" value="Send" />
      </form>

      <WorkerAnimation />
    </Fragment>
  );
};
