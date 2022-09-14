import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteGroupBtn from '../DeleteBtn/DeleteGroupBtn';
import emailjs from '@emailjs/browser';

function GroupDetail() {
    //details pertaining to the id of the provider that was clicked on.
    const details = useSelector((store) => store.details);
    const user = useSelector((store) => store.user);

    console.log('In Details');
    const [open, SetOpen] = React.useState(false);

    const history = useHistory();
    const handleClick = () => {
        console.log('Go back to the list.');
        history.push('/providers');
    };

    const handleClickOpen = () => {
        SetOpen(true);
    };
    // upon click btn opens the modal/dialog
    const handleClose = () => {
        SetOpen(false);
    };
    // upon click btn close the modal/dialog

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
    };
    // send email function ends here

    return (
      // group_email
      <div className="row">
        <div className="column">
          <h1>Group detail</h1>
          <img
            src={details.picture}
            style={{
              width: 300,
              height: 300,
              margin: '1rem',
              borderRadius: 20,
            }}
          />
          {/* Start of modal/dialog  */}
          <Button variant="outlined" onClick={handleClickOpen}>
            Email Me!
          </Button>
          <Dialog
            style={{ borderRadius: 20 }}
            open={open}
            onClose={handleClose}
          >
            <DialogTitle>{details.name}</DialogTitle>
            {/* <DialogContentText name="group_email">
            This email will be sent directly to {details.email}.....
          </DialogContentText> */}
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
          {/* End of modal/dialog  */}
        </div>
        <div className="column">
          <div className="info">{details.name}</div>
          <div className="info">{details.bio}</div>
          <div className="info">
            Address: {details.street}, {details.city}, {details.state},{' '}
            {details.zipcode}
          </div>
        </div>
        <div className="column">
          <div className="info">
            <p>{details.website}</p>
            <p> {details.email}</p>
            <p>{details.phone}</p>
          </div>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={handleClick}
          >
            Return to List
          </Button>
        </div>
        <div>{user.id && user.access_level === 1 && <DeleteGroupBtn />}</div>
      </div>
    );
}

export default GroupDetail;
