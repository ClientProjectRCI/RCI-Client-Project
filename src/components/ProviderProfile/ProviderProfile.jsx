import React, { useEffect, useState } from 'react';
import '../ProviderProfile/ProviderProfile.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import LogOutButton from '../LogOutButton/LogOutButton';
import {
  Box,
  Card,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Tooltip,
  Input,
} from '@mui/material';
import ProviderSpecializations from '../ProviderSpecializations/ProviderSpecializations';
// import ProviderInsurances from '../ProviderInsurances/ProviderInsurances';
import ProfileInsurances from '../ProfileInsurances/ProfileInsurances';
import ProfileOccupations from '../ProfileOccupations/ProfileOccupations';
import ProfileSpecializations from '../ProfileSpecializations/ProfileSpecializations';
import ProfileServices from '../ProfileServices/ProfileServices';

import ProviderOccupations from '../ProviderOccupations/ProviderOccupations';
import ProviderServices from '../ProviderServices/ProviderServices';
import EditIcon from '@mui/icons-material/Edit';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SaveIcon from '@mui/icons-material/Save';
import RegisterInsurancesDropdown from '../RegisterInsurancesDropdown/RegisterInsurancesDropdown';
import RegisterOccupationsDropdown from '../RegisterOccupationsDropdown/RegisterOccupationsDropdown';
import RegisterServicesDropdown from '../RegisterServicesDropdown/RegisterServicesDropdown';
import RegisterSpecializationsDropdown from '../RegisterSpecializationsDropdown/RegisterSpecializationsDropdown';

export default function ProviderProfile() {
  const user = useSelector((store) => store.user); // pulls user info for conditional rendering, and GETTING provider info
  const details = useSelector((store) => store.details); // Pulls a single Provider info from the "Details" store
  const profile = useSelector((store) => store.profile); // Pulls a single Provider info from the "Details" store

  const [edit, setEdit] = useState(false); // edit buttons local state. Starts as false.
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [occupation, setOccupation] = useState('');
  const [insurance, setInsurance] = useState('');
  const [availability, setAvailability] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState('');
  const [specialities, setSpecialities] = useState('');
      const providerOccupations = useSelector(
        (store) => store.providerOccupations
      );
          const providerInsurances = useSelector(
            (store) => store.providerInsurances
          );
const providerServices = useSelector((store) => store.providerServices);
  const providerSpecializations = useSelector((store) => store.providerSpecializations);

const updatedInsurance = useSelector(
  (store) => store.providers.providerInsuranceReducer
);
const updatedOccupation = useSelector(
  (store) => store.providers.providerOccupationReducer
);
const updatedSpecialization = useSelector(
  (store) => store.providers.providerSpecializationReducer
);
const updatedService = useSelector(
  (store) => store.providers.providerServiceReducer
);
  const history = useHistory();
  const dispatch = useDispatch();

  console.log('user:', user); // test user info
  console.log('user.id:', user.id); // test user info
  console.log('edit details:', details); // tests EDIT local state, starts as FALSE
  console.log('what is in the profile.id?????', profile.id);

  // This was to show what is in the DB above the inputs. Couldn't get it to work
  // function handleChange(event) {
  //     dispatch({
  //         type: 'EDIT_ONCHANGE',
  //         payload: { property: 'github_name', value: event.target.value }
  //     });

  // }


  function handleSubmit(event) {
    // PUT/UPDATE Dispatch
    event.preventDefault();
    // console.log('usernameLocal', name);

    dispatch({
      type: 'EDIT_PROVIDER',
      payload: {
        id: profile.id,
        name: name,
        bio: bio,
        phone: phone,
        email: email,
        availability: availability,
        insurance_plan_id: updatedInsurance,
        occupation_id: updatedOccupation,
        service_type_id: updatedService,
        specializations_id: updatedSpecialization,
      },
    });
    // console.log('HandleSubmit, here is the payload', payload);
    
    toggleEdit(); //
    // axios.put(`/api/settings${action.payload}`)
  }

  const toggleEdit = () => {
    // Toggle the EDIT useState between TRUE & FALSE.
    console.log('submitted changes with a DISPATCH Function!');
    setEdit((current) => !current);
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_PROVIDER_PROFILE', payload: user.id });
    dispatch({ type: 'FETCH_SPECIALIZATIONS' });
    dispatch({ type: 'FETCH_INSURANCES' });
    dispatch({ type: 'FETCH_OCCUPATIONS' });
    dispatch({ type: 'FETCH_SERVICES' });
  }, [dispatch]);
  useEffect(() => {
    dispatch({ type: 'FETCH_PROFILE_INSURANCES', payload: user.id });
  }, []);
  useEffect(() => {
    dispatch({ type: 'FETCH_PROFILE_OCCUPATIONS', payload: user.id });
  }, []);
  useEffect(() => {
    dispatch({ type: 'FETCH_PROFILE_SPECIALIZATIONS', payload: user.id });
  }, []);
  useEffect(() => {
    dispatch({ type: 'FETCH_PROFILE_SERVICES', payload: user.id });
  }, []);

  console.log(`What is profile.user_id`, user.id);

  return (
    <div className="row">
      <div></div>
      <div className="column">
        <img
          style={{
            width: 300,
            height: 300,
            margin: '1rem',
            borderRadius: 20,
          }}
          src={profile.picture}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {' '}
          {/* this div controller the "EDIT" buttons conditional rendering*/}
          {edit ? (
            <Button item variant="outlined" onClick={toggleEdit}>
              <CancelPresentationIcon />
              Discard Changes
            </Button>
          ) : (
            <>
              <Button item variant="contained" onClick={toggleEdit}>
                <EditIcon /> Edit Profile
              </Button>
              <Button variant="contained" color="secondary">
                <LogOutButton />
              </Button>
            </>
          )}
        </Box>
      </div>

      <div>
        {/* this div controls the "Input fields & Info" conditional rendering*/}
        {edit ? (
          <div>
            {' '}
            {/* "?" - If TRUE, show input editable fields  */}
            <form onSubmit={handleSubmit}>
              <div className="column">
                <h3>You Are Editing Your Profile Info</h3>
                <br></br>

                {/* NAME INPUT  */}
                <Typography fontWeight="bold">
                  Provider Name: {profile.name}
                </Typography>
                <br></br>
                <TextField
                  label={'Edit Name'}
                  placeholder={profile.name}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <br></br>

                {/* Bio INPUT  */}
                <Typography fontWeight="bold">Bio: {profile.bio}</Typography>
                <br></br>
                <TextField
                  label={'Edit Bio'}
                  placeholder={profile.bio}
                  value={bio}
                  onChange={(event) => setBio(event.target.value)}
                />
                <br></br>

                {/* Insurance INPUT  */}
                <Typography fontWeight="bold">Insurance:</Typography>
                <ProfileInsurances />
                <br></br>
                <RegisterInsurancesDropdown />
                <br></br>

                {/* Occupation INPUT  */}
                <Typography fontWeight="bold">Occupation:</Typography>
                <ProfileOccupations />
                <br></br>
                <RegisterOccupationsDropdown />
                <br></br>
                {/* Availability INPUT  */}
                <Typography fontWeight="bold">
                  Availiability: {availability}
                </Typography>
                <br></br>
                <TextField
                  label={'Edit Availability'}
                  placeholder={profile.availability}
                  value={availability}
                  onChange={(event) => setAvailability(event.target.value)}
                />
                <br></br>
                {/* Phone INPUT  */}
                <Typography fontWeight="bold">
                  Phone: {profile.phone}
                </Typography>
                <br></br>
                <TextField
                  label={'Edit Phone Number'}
                  placeholder={profile.phone}
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                <br></br>
                {/* email INPUT  */}
                <Typography fontWeight="bold">
                  Email: {email}
                </Typography>
                <br></br>
                <TextField
                  label={'Edit Email'}
                  placeholder={profile.email}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <br></br>
                {/* Services INPUT  */}
                <Typography fontWeight="bold">Services:</Typography>
                <ProfileServices />
                <br></br>
           <RegisterServicesDropdown/>
                <br></br>

                {/* Specialities INPUT  */}
                <Typography fontWeight="bold">Specialities:</Typography>
                <ProfileSpecializations />
                <br></br>
               <RegisterSpecializationsDropdown/>
                <br></br>
                <Button
                  variant="contained"
                  type="submit"
                  onSubmit={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="row">
            {' '}
            {/* ":" - If FALSE, show Non-editable Text Below */}
            {/* COLUMN 1 */}
            <div className="column">
              <div className="info">
                <h4>Name:</h4>
                {profile.name}
              </div>
              <div className="info">
                <h4>About:</h4>
                {profile.bio}
              </div>
              <div className="info">
                <h4>Insurance</h4>
                <ProfileInsurances />
              </div>
              <div className="info">
                <h4>Occupation</h4>
                <ProfileOccupations />
              </div>
            </div>
            {/* COLUMN 2 */}
            <div className="column">
              <ul className="info">
                <h4>Contact Info:</h4>
                <li>Availability: {profile.availability}</li>
                <li>Phone: {profile.phone}</li>
                <li>Email: {profile.email}</li>
                <h4>Services: </h4>
                <ProfileServices />
              </ul>
              <ul className="info">
                <h4>Specialties:</h4>
                <ProfileSpecializations />
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
