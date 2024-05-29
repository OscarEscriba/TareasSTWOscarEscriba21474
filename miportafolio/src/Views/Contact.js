import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import styles from './Contact.module.css';

const ContactForm = () => {
  const [fromName, setFromName] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: fromName,
      message: message,
    };

    emailjs.send(
      'service_ja9dq8q', // Reemplaza con tu serviceID
      'template_4ztoc9c', // Reemplaza con tu templateID
      templateParams,
      'qv2BholuyXX5AidLM' // Reemplaza con tu userID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Email enviado correctamente',
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error al enviar el email',
        showConfirmButton: false,
        timer: 1500
      });
    });
  };


  return (
    <section id='Contact' className={styles.Contact} >
    <div id='Contact' className={styles.contactFormContainer}>
      <form onSubmit={sendEmail} className={styles.form}>
        <h2>Contacta Conmigo</h2>
        <div className={styles.inputGroup}>
          <label>Nombre</label>
          <input 
            type="text" 
            value={fromName} 
            onChange={(e) => setFromName(e.target.value)} 
            className={styles.input} 
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Mensaje</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            className={styles.textarea} 
          />
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.button}>Enviar</button>
        </div>
      </form>
    </div>
    </section>
  );
};

export default ContactForm;

