import github from '../../imgs/github.png'
import linkedin from '../../imgs/linkedin.png'
import resumeIcon from '../../imgs/resume.png'
import resumePDF from '../../imgs/resume.pdf'
import '../../styles/contact.css'
import { validateEmail } from '../../components/helpers';

import React, { useState } from 'react';


function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return  name === 'firstName' ? setFirstName(value) : name === 'email' ? setEmail(value) : setMessage(value)
  };



  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email) || !firstName || !message) {
      setErrorMessage('Please enter a valid email and fill out each text box!');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // Alert the user their first and last name, clear the inputs
    alert(`Message submitted, thank you!`);
    setFirstName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div>
      <p>
        Want to contact me? Fill in the form below!
      </p>
      <form className="form">
        Your name:
        <br/>
        <input
          className="nameEmail"
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <br/>
        Your email:
        <br/>
        <input
          className="nameEmail"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email" required
          placeholder="Email"
        />
        <br/>
        Your message:
        <br/>
        <textarea
          className="messageBox"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Input your message!"
        />
        <br/>
        <button type="button" className="btn btn-dark" onClick={handleFormSubmit}>
          Send
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

      <div className="footerWrap">
    <div className="footer">
      <div className="footerContent">
      <a className="links" href='https://github.com/Daelso' target = "_blank" rel = "noreferrer"><img src={github} alt="Github"/></a>
      &nbsp;
      <a className="links" href='https://www.linkedin.com/in/chase-murtaugh-71ba82109/' target = "_blank" rel = "noreferrer"><img src={linkedin} alt="LinkedIn"/></a>
      &nbsp;
      <a className="links" href={resumePDF} target = "_blank" rel = "noreferrer"><img src={resumeIcon} alt="Resume"/></a>
      &nbsp;
      </div>     
    </div>
</div>
    </div>
  );
}

export default Form;

