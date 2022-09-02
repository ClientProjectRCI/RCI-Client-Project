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

//small component that will display the specializations related to the specific provider

function ProviderSpecializations() {
  const specializations = useSelector((store) => store.providerSpecializations);


  return (
    <div>
      {specializations.map((specialization) => {
        return (
          <div key={specialization.id}>
            {specialization.specialization}
          </div>
        );
      })}
    </div>
  );
}

export default ProviderSpecializations;
