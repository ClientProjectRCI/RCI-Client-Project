import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import ProviderSpecializations from '../ProviderSpecializations/ProviderSpecializations';
import ProviderInsurances from '../ProviderInsurances/ProviderInsurances';
import ProviderOccupations from '../ProviderOccupations/ProviderOccupations';
import ProviderServices from '../ProviderServices/ProviderServices';
import emailjs from '@emailjs/browser';
import DeleteProviderBtn from '../DeleteBtn/DeleteProviderBtn';
import { Grid } from '@material-ui/core';
import ReplyIcon from '@mui/icons-material/Reply';
import MailIcon from '@mui/icons-material/Mail';
import { Container } from '@mui/material';
import Swal from 'sweetalert2';
// import EmailModal from '../EmailModal/EmailModal';

export default function ProvidersDetail() {
    const details = useSelector((store) => store.details);
    const user = useSelector((store) => store.user);

    //details pertaining to the id of the provider that was clicked on.
    const [open, SetOpen] = React.useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [reason, setReason] = useState('');

    const history = useHistory();

    // upon click btn goes back to the list
    const handleClick = () => {
        history.push('/providers');
    };

    // upon click btn opens the modal/dialog
    const handleClickOpen = () => {
        SetOpen(true);
    };

    // upon click btn close the modal/dialog
    const handleClose = () => {
        SetOpen(false);
     
    };

    // send email function starts here
    const sendEmail = (event) => {
        event.preventDefault();
        emailjs
            .sendForm(
                'service_rqpcr8o',
                'template_bq9zh4d',
                event.target,
                '8Fnu5-1ca66Q0y958'
            )
            .then((res) => {
                console.log('IT WORKS YAYYYYYYY', res);
            })
            .catch((err) =>
                console.log('EMAIL IS NOT WORKING>>>>>>>>>>>>', err)
            );
               Swal.fire('Thanks!', 'Your message was sent!', 'success');
    }; // send email function ends here

    return (
        <Grid container spacing={2}>
            <Grid item>
                <Grid item id="left-column">
                    <img
                        src={details.picture}
                        style={{
                            width: 300,
                            height: 300,
                            margin: '1rem',
                            borderRadius: 20,
                        }}
                    />
                </Grid>
                <Container
                    spacing={2}
                    style={{
                        width: 'fit-content',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
            
                    <Button
                        size="medium"
                        variant="contained"
                        style={{
                            backgroundColor: 'var(--true-orange)',
                            color: 'white',
                        }}
                        onClick={handleClickOpen}
                    >
                        <MailIcon />
                        Email Me
                    </Button>
                    <Button
                        size="medium"
                        color="primary"
                        variant="contained"
                        onClick={handleClick}
                    >
                        <ReplyIcon />
                        Return to List
                    </Button>

                    <Grid item>
                        {user.id && user.access_level === 1 && (
                            <DeleteProviderBtn />
                        )}
                    </Grid>
                </Container>
                <Dialog
                    style={{ borderRadius: 20 }}
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>{details.name}</DialogTitle>

                    <form onSubmit={sendEmail}>
                        <label for="gEmail">Send To:</label>
                        <input
                            type="text"
                            id="gEmail"
                            name="group_email"
                            defaultValue={details.email}
                        
                        />
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
                            className="sendBtn"
                            onClick={handleClose}
                        />
                        <Button onClick={handleClose}>Cancel</Button>
                    </form>
                </Dialog>
            </Grid>
            {/* End of modal/dialog  */}

            {/* COLUMN 1 */}
            <div className="column">
                <div className="info">{details.name}</div>
                <div className="info">{details.bio}</div>
                <div className="info">
                    <h4>Insurance</h4>
                    <ProviderInsurances />
                </div>
                <div className="info">
                    <h4>Occupation</h4>
                    <ProviderOccupations />
                </div>
            </div>

            {/* COLUMN 2 */}
            <div className="column">
                <ul className="info">
                    <h4>Contact Info:</h4>
                    <li>Availability: {details.availability}</li>
                    <li>Phone: {details.phone}</li>
                    <li>Email: {details.email}</li>
                    <h4>Services:</h4>
                    <ProviderServices />
                </ul>
                <ul className="info">
                    <h4>Specialties:</h4>
                    <ProviderSpecializations />
                </ul>
            </div>
        </Grid>
    );
}
