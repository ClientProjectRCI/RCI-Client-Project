import React from 'react';
import emailjs from '@emailjs/browser'

function ContactPage() {

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm(
            'service_rqpcr8o',
            'template_b2f42ik',
            event.target, 
            '8Fnu5-1ca66Q0y958'
            ).then(res=> {
                console.log('IT WORKS YAYYYYYYY', res);
            })
            .catch(err => 
                console.log('EMAIL IS NOT WORKING>>>>>>>>>>>>', err)
            )
            
    };

    return (
        <center>
            <form onSubmit={sendEmail} action="/action_page.php">
                <label for="fname">First Name</label>
                <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                ></input>
                <label for="lname">Last Name</label>
                <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name.."
                ></input>
                <label for="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="user_email"
                    placeholder="Your email address.."
                ></input>
                <label for="subject">Reason OF Inqury</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Reason of inqury.."
                ></input>
                <label for="message">Message</label>
                <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="How can we help.."
                ></textarea>
                <input 
                type="submit"
                value="Send"
                className='sendBtn'/>
            </form>
        </center>
    );
}

export default ContactPage;
