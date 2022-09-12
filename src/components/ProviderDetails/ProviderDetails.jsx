import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Box, Grid } from '@material-ui/core';
import ReplyIcon from '@mui/icons-material/Reply';
import MailIcon from '@mui/icons-material/Mail';

export default function ProvidersDetail() {
    const details = useSelector((store) => store.details);
    const user = useSelector((store) => store.user);

    //details pertaining to the id of the provider that was clicked on.
    const [open, SetOpen] = React.useState(false);

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
    }; // send email function ends here

    return (
        <Grid container spacing={2}>
            <Grid item>
                <Grid item id="left-column">
                    <img
                        src={details.picture}
                        style={{
                            height: 180,
                            width: 200,
                            margin: '1rem',
                            borderRadius: 5,
                        }}
                    />
                </Grid>
                <Box id="options-box" style={{ width: 200, height: 400 }}>
                    <Button
                        fullWidth
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
                    <Grid item>
                        <Button
                            fullWidth
                            size="medium"
                            color="primary"
                            variant="contained"
                            onClick={handleClick}
                        >
                            <ReplyIcon /> Return to List
                        </Button>

                        <Grid item>
                            {user.id && user.access_level === 1 && (
                                <DeleteProviderBtn />
                            )}
                        </Grid>
                    </Grid>
                </Box>
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
                            value={details.email}
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
