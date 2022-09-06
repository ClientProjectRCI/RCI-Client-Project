import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@mui/material/IconButton';
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import Typography from '@mui/material/Typography';
import Paper from '@material-ui/core/Paper';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

//AVERY: DON'T TOUCH FILE

function ProvidersListItem({provider}) {

    const history = useHistory()
    const dispatch = useDispatch();
//
const handleClick=(id)=>{
    console.log('You clicked this Provider!', id)
    dispatch({type: 'FETCH_PROVIDER_DETAILS', payload: id})
     dispatch({ type: 'FETCH_PROVIDER_SPECIALIZATIONS', payload: id });
      dispatch({ type: 'FETCH_PROVIDER_OCCUPATIONS', payload: id });
       dispatch({ type: 'FETCH_PROVIDER_INSURANCES', payload: id });
           dispatch({ type: 'FETCH_PROVIDER_SERVICES', payload: id });
    history.push('/provider-details')
}

    return (
      <div>
        <Paper
          className="bColor"
          direction="row"
          justifycontent="center"
          alignitems="center"
          onClick={() => handleClick(provider.id)}
        >
          <Card>
            <div className="bColor">
              <CardActionArea>
                <Typography gutterBottom variant="h5" component="h3">
                  {provider.name}
                </Typography>
                <CardContent>
                  <CardMedia
                    component="img"
                    image={provider.image}
                    alt={provider.name}
                  />
                  <Typography gutterBottom variant="h5" component="h3">
                    {provider.bio}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </div>
          </Card>
        </Paper>
      </div>
    );
    }
export default ProvidersListItem;
