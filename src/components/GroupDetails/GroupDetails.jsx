import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

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
  
  console.log('In Details');
  const classes = useStyles();

//details pertaining to the id of the provider that was clicked on.
  const details = useSelector((store) => store.details);

  const history = useHistory();
  const handleClick = () => {
    console.log('Go back to the list.');
    history.push('/providers');
  };

  return (

    <div className="row">
    <div className="column">
        <h1>Group detail</h1>
        <img
            style={{ borderRadius: 20 }}
            src={details.picture} alt={details.name}
        />
        <button>Email</button>
        <button>Edit</button>
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
</div>
  );
}

export default GroupDetail;
