import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactComponent = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });
  const [notification, setNotification] = useState({
    show: false,
    message: ""
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_n8izkvj", "template_b16k0ly", form.current, {
        publicKey: "cxnw1z_6qO8BjZht8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          resetForm();
          showNotification("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          showNotification("Failed to send message. Please try again.");
        }
      );
  };

  const resetForm = () => {
    setFormValues({
      user_name: "",
      user_email: "",
      message: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const showNotification = (message) => {
    setNotification({
      show: true,
      message: message
    });
    // Hide the notification after 3 seconds
    setTimeout(() => {
      setNotification({
        show: false,
        message: ""
      });
    }, 3000);
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={formValues.user_name}
          onChange={handleChange}
          className="contactform"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={formValues.user_email}
          onChange={handleChange}
          className="contactform"
        />
        <label>Message</label>
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
          className="contactform"
        />
        <input type="submit" value="Send" />
      </form>
      {notification.show && (
        <NotificationMessage>{notification.message}</NotificationMessage>
      )}

    
    </StyledContactForm>
   
  );
};

export default ContactComponent;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(135, 206, 250);
      color: white;
      border: none;
    }
  }
`;

const NotificationMessage = styled.div`
  background-color: rgba(0, 206, 158, 0.2);
  color: rgba(0, 206, 158, 1);
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;