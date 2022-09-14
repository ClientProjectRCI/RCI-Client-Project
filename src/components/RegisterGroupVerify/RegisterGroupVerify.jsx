import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function RegisterGroupVerify() {

  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [groupPicture, setGroupPicture] = useState('');
  const groupName = useSelector(
    (store) => store.groups.groupNameReducer
  );
  const groupBio = useSelector(
    (store) => store.groups.groupBioReducer
  );

  const groupPhone = useSelector(
    (store) => store.groups.groupPhoneReducer
  );
  const groupEmail = useSelector(
    (store) => store.groups.groupEmailReducer
  );
  const groupWebsite = useSelector(
    (store) => store.groups.groupWebsiteReducer
  );
  const groupStreet = useSelector(
    (store) => store.groups.groupStreetReducer
  );
  const groupCity = useSelector(
    (store) => store.groups.groupCityReducer
  );
  const groupState = useSelector(
    (store) => store.groups.groupStateReducer
  );
  const groupZip = useSelector(
    (store) => store.groups.groupZipReducer
  );

  const addFile = (event) => setGroupPicture(event.target.files[0]);

  const sendImage = (event) => {
    const data = new FormData();

    data.append('image', groupPicture);

    console.log('data is', data);

    axios
      .post('/api/providers/images', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert('Error with post', error);
      });
  };

  const registerGroup = () => {
    // POST to provider table

    dispatch({
      type: 'ADD_NEW_GROUP',
      payload: {
        user_id: user.id,
        name: groupName,
        bio: groupBio,
        picture: groupPicture.name,
        phone: groupPhone,
        email: groupEmail,
        website: groupWebsite,
        street: groupStreet,
        city: groupCity,
        state: groupState,
        zipcode: groupZip
      },
     
    });
    sendImage();
   
    history.push(`/home`);
  };

  return (
    <center>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>groupProfile: Your ID is: {user.id}</p>
        <form className="container" encType="multipart/form-data">
          <input
            type="file"
            className="input"
            name="image"
            onChange={addFile}
          ></input>
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Your Response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td> {groupName}</td>
              </tr>
              <tr>
                <td>Bio:</td>
                <td> {groupBio}</td>
              </tr>
              <tr>
                <td>Phone: </td>
                <td>{groupPhone}</td>
              </tr>
              <tr>
                <td>E-mail:</td>
                <td> {groupEmail}</td>
              </tr>
              <tr>
                <td>Website:</td>
                <td> {groupWebsite}</td>
              </tr>
              <tr>
                <td>Street: </td>
                <td>{groupStreet}</td>
              </tr>
              <tr>
                <td>City:</td>
                <td> {groupCity}</td>
              </tr>
              <tr>
                <td>State:</td>
                <td> {groupState}</td>
              </tr>
              <tr>
                <td>Zip Code: </td>
                <td>{groupZip}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn" type="submit" onClick={registerGroup}>
            Submit
          </button>
        </form>
      </div>
      <LogOutButton className="btn" />
    </center>
  );
}
