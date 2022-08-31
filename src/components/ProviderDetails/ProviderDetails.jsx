import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent } from '@mui/material';
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
function ProvidersDetail() {
  
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
    <div
    // className="bColor"
    >
      <h1>Details</h1>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs="auto">
          <Card className={classes.detailSize}>
            <Paper className={classes.detailSize}>
              <Typography gutterBottom variant="h5" component="h3">
                {details.name}
              </Typography>
              <Typography>
                {' '}
                <img src={details.picture} alt={details.name} />
              </Typography>
              <CardContent>
                <Typography gutterBottom variant="body2">
                  {details.bio}{' '}
                </Typography>
                <Typography gutterBottom variant="body2">
                  {details.availability}{' '}
                </Typography>
                <Typography gutterBottom variant="body2">
                  {details.email}{' '}
                </Typography>
                {/* <Typography gutterBottom component="div">
                  Genres:
                </Typography> */}
              </CardContent>
              <Button
                size="large"
                color="primary"
                variant="contained"
                onClick={handleClick}
              >
                Return to List
              </Button>
            </Paper>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProvidersDetail;
