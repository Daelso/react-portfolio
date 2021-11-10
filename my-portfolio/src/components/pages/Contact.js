import github from '../../imgs/github.png'
import linkedin from '../../imgs/linkedin.png'
import resumeIcon from '../../imgs/resume.png'
import resumePDF from '../../imgs/resume.pdf'

import React, { useState } from 'react';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return  name === 'firstName' ? setFirstName(value) : name === 'email' ? setEmail(value) : setMessage(value)
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Message submitted, thank you!`);
    setFirstName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <p>
        Want to contact me? Fill in the form below!
      </p>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <br/>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <br/>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Input your message!"
        />
        <br/>
        <button type="button" onClick={handleFormSubmit}>
          Send
        </button>
      </form>



      <div class="footerWrap">
    <div class="footer">
      <div class="footerContent">
      <a className="links" href='https://github.com/Daelso'><img src={github} alt="Github"/></a>
      &nbsp;
      <a className="links" href='https://www.linkedin.com/in/chase-murtaugh-71ba82109/'><img src={linkedin} alt="LinkedIn"/></a>
      &nbsp;
      <a className="links" href={resumePDF}><img src={resumeIcon} alt="Resume"/></a>
      &nbsp;
      </div>     
    </div>
</div>
    </div>
  );
}

export default Form;

