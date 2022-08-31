// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PROVIDERS" actions
function* fetchProviders(action) {
  try {
    console.log('FetchProviders, action.payload is', action.payload);
    const response = yield axios.get(`/api/providers`);
    console.log('Get all providers:', response.data);
    yield put({ type: 'SET_PROVIDERS', payload: response.data });
  } catch (error) {
    console.log('Get all providers error', error);
  }
}

//get all details of one provider
function* fetchProviderDetails(action) {
  try {
    const detailsResponse = yield axios.get(`/api/providers/${action.payload}`);
    console.log(
      'In fetchProviderDetails, this is detailsResponse.data',
      detailsResponse.data
    );
    yield put({type: 'SEND_DETAILS', payload: detailsResponse.data[0]}); 
  } catch (error) {
    console.log('error in fetchProviderDetails', error);
  }
}
function* providersSaga() {
  yield takeEvery('FETCH_PROVIDERS', fetchProviders);
  yield takeEvery('FETCH_PROVIDER_DETAILS', fetchProviderDetails);
}

export default providersSaga;
