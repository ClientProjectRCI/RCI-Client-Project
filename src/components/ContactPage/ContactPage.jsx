import React from 'react';
import '../ContactPage/ContactPage.css';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function ContactPage() {
  const handleSubmitMessage = (event) => {
    event.preventDefault();
    // add functionality for submitting messages here.
  }
  return (
  
<center> 
    <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
    <label for="email">Email</label>
    <input type="text" id="email" name="email" placeholder="Your email address.."></input>
    <label for="subject">Reason OF Inqury</label>
    <input type="text" id="subject" name="subject" placeholder="Reason of inqury.."></input>
    <label for="message">Message</label>
    <input type="text" id="message" name="message" placeholder="How can we help.."></input>
    <button onClick={handleSubmitMessage}>Submit</button>
  </form>
  </center>
  );
}

export default ContactPage;
