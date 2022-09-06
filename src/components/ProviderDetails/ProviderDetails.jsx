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
          <DialogContent>
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
          </DialogActions>
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
            <DeleteProviderBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProvidersDetail;
