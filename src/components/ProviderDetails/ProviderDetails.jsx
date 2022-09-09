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
import ProviderSpecializations from '../ProviderSpecializations/ProviderSpecializations';
import ProviderInsurances from '../ProviderInsurances/ProviderInsurances';
import ProviderOccupations from '../ProviderOccupations/ProviderOccupations';
import ProviderServices from '../ProviderServices/ProviderServices';
import emailjs from '@emailjs/browser'
import DeleteProviderBtn from '../DeleteBtn/DeleteProviderBtn';

const useStyles = makeStyles({
  backColor: {
    backgroundColor: '#FAEDCD',
  },
  detailSize: {
    backgroundColor: '#FAEDCD',
    height: '800px',
    width: '600px',
  },
});
function ProvidersDetail() {

  const details = useSelector((store) => store.details);
  const user = useSelector((store)=> store.user);


  console.log('In Details');
  //details pertaining to the id of the provider that was clicked on.
  const [open, SetOpen] = React.useState(false);
  const classes = useStyles();

  const history = useHistory();
  const handleClick = () => {
    console.log('Go back to the list.');
    history.push('/providers');
  };
  // upon click btn goes back to the list

  const handleClickOpen = () => {
    SetOpen(true);
  };
  // upon click btn opens the modal/dialog
  const handleClose = () => {
    SetOpen(false);
  }
  // upon click btn close the modal/dialog

  // send email function starts here
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm(
        'service_rqpcr8o',
        'template_bq9zh4d',
        event.target, 
        '8Fnu5-1ca66Q0y958'
        ).then(res=> {
            console.log('IT WORKS YAYYYYYYY', res);
        })
        .catch(err => 
            console.log('EMAIL IS NOT WORKING>>>>>>>>>>>>', err)
        )
};
// send email function ends here

  return (
    <div className="row">
      <div className="column">
        <img
          style={{ borderRadius: 20 }}
          src={details.picture}
          alt={details.name}
        />
        {/* Start of modal/dialog  */}
        <Button variant="outlined" onClick={handleClickOpen}>
          Email Me!
        </Button>
        <Dialog style={{ borderRadius: 20 }} open={open} onClose={handleClose}>
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
        className='sendBtn'
        onClick={handleClose}/>
        <Button onClick={handleClose}>Cancel</Button>
        </form>

          {/* <DialogContent>
            <DialogContentText>
              This email will be sent directly to this provider.....
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="First Name"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Last Name"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Reason of Inquiry"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Message"
              type="email"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Send</Button>
          </DialogActions> */}
        </Dialog>
        {/* End of modal/dialog  */}
      </div>

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
        <div>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={handleClick}>
            Return to List
          </Button>

          <div>
      {(user.id && user.access_level ===1) &&
            <DeleteProviderBtn />
    }
      </div>

        </div>
      </div>
    </div>
  );
}

export default ProvidersDetail;
