// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';


// //get all details of one provider
// function* fetchProviderDetails(action) {
//   try {
//     const detailsResponse = yield axios.get(`/api/providers/${action.payload}`);
//     console.log(
//       'In fetchProviderDetails, this is detailsResponse.data',
//       detailsResponse.data
//     );
//     yield put({ type: 'SEND_DETAILS', payload: detailsResponse.data[0] });
//   } catch (error) {
//     console.log('error in fetchProviderDetails', error);
//   }
// }

//get all PROFILE of one provider by USER.ID (Action.payload is user id)
function* fetchProviderProfile(action) {
  try {
    const detailsResponse = yield axios.get(`/api/providerProfile/${action.payload}`);
    console.log(
      'Prpfile Saga Response.data',
      detailsResponse.data
    );
    yield put({ type: 'SEND_DETAILS', payload: detailsResponse.data[0] });
  } catch (error) {
    console.log('error in fetchProviderDetails', error);
  }
}


function* providerProfileSaga() {
  
 
  yield takeEvery('FETCH_PROVIDER_PROFILE', fetchProviderProfile);

}

export default providerProfileSaga;
