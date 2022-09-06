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
function GroupDetail() {

  //details pertaining to the id of the provider that was clicked on.
  const details = useSelector((store) => store.details);
  console.log('In Details');
  const classes = useStyles();
  const [open, SetOpen] = React.useState(false);

  const history = useHistory();
  const handleClick = () => {
    console.log('Go back to the list.');
    history.push('/providers');
  };

  const handleClickOpen =()=>{
    SetOpen(true);
  };
  // upon click btn opens the modal/dialog
  const handleClose = ()=>{
    SetOpen(false);
  }
  // upon click btn close the modal/dialog

  return (

    <div className="row">
    <div className="column">
        <h1>Group detail</h1>
        <img
            style={{ borderRadius: 20 }}
            src={details.picture} alt={details.name}
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
            label="Reason of Inqury"
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
    <div className="column">
        <div className="info">{details.name}</div>
        <div className="info">{details.bio}</div>
        <div className="info">Address: {details.street}, {details.city}, {details.state}, {details.zipcode}</div>
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
              >Return to List</Button>
      </div>
      <div>
      <DeleteGroupBtn />
      </div>
</div>
  );
}

export default GroupDetail;
