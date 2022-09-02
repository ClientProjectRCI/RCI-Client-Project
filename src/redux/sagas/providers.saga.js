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
    yield put({ type: 'SEND_DETAILS', payload: detailsResponse.data[0] });
  } catch (error) {
    console.log('error in fetchProviderDetails', error);
  }
}
//fetch specializations
function* fetchSpecializations(action) {
  try {
    console.log('FetchSpecializations, action.payload is', action.payload);
    const response = yield axios.get(`/api/specializations`);
    console.log('Get all specializations:', response.data);
    yield put({ type: 'SET_SPECIALIZATIONS', payload: response.data });
  } catch (error) {
    console.log('Get all specializations error', error);
  }
}
//fetch insurances
function* fetchInsurances(action) {
  try {
    console.log('FetchInsurances, action.payload is', action.payload);
    const response = yield axios.get(`/api/insurances`);
    console.log('Get all insurances:', response.data);
    yield put({ type: 'SET_INSURANCES', payload: response.data });
  } catch (error) {
    console.log('Get all insurances error', error);
  }
}
//fetch occupations
function* fetchOccupations(action) {
  try {
    console.log('FetchOccupations, action.payload is', action.payload);
    const response = yield axios.get(`/api/occupations`);
    console.log('Get all occupations:', response.data);
    yield put({ type: 'SET_OCCUPATIONS', payload: response.data });
  } catch (error) {
    console.log('Get all insurances error', error);
  }
}
function* providersSaga() {
  yield takeEvery('FETCH_PROVIDERS', fetchProviders);
  yield takeEvery('FETCH_PROVIDER_DETAILS', fetchProviderDetails);
  yield takeEvery('FETCH_SPECIALIZATIONS', fetchSpecializations);
  yield takeEvery('FETCH_INSURANCES', fetchInsurances);
  yield takeEvery('FETCH_OCCUPATIONS', fetchOccupations);
}

export default providersSaga;
