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


//fetch provider specializations by id
function* fetchProviderSpecializations(action) {
  try {
    console.log('FetchSpecializations, action.payload is', action.payload);
    const response = yield axios.get(`/api/specializations/${action.payload}`);
    console.log('Get Provider specific  specializations:', response.data);
    yield put({ type: 'SET_PROVIDER_SPECIALIZATIONS', payload: response.data });
  } catch (error) {
    console.log('Get Provider specific specializations error', error);
  }
}
//fetch provider insurances by id
function* fetchProviderInsurances(action) {
  try {
    console.log('FetchInsurances, action.payload is', action.payload);
    const response = yield axios.get(`/api/insurances/${action.payload}`);
    console.log('Get Provider specific insurances:', response.data);
    yield put({ type: 'SET_PROVIDER_INSURANCES', payload: response.data });
  } catch (error) {
    console.log('Get Provider specific insurances error', error);
  }
}
//fetch provider occupations by id
function* fetchProviderOccupations(action) {
  try {
    console.log('FetchOccupations, action.payload is', action.payload);
    const response = yield axios.get(`/api/occupations/${action.payload}`);
    console.log('Get Provider specific occupations:', response.data);
    yield put({ type: 'SET_PROVIDER_OCCUPATIONS', payload: response.data });
  } catch (error) {
    console.log('Get Provider specific insurances error', error);
  }
}

//fetch provider services by id
function* fetchProviderServices(action) {
  try {
    console.log('FetchServices, action.payload is', action.payload);
    const response = yield axios.get(`/api/services/${action.payload}`);
    console.log('Get Provider specific services:', response.data);
    yield put({ type: 'SET_PROVIDER_SERVICES', payload: response.data });
  } catch (error) {
    console.log('Get Provider specific services error', error);
  }
}

// Delete provider 
function* deleteProviders(action){
  const id = action.payload;
        try{
            yield axios.delete(`/api/providers/${id}`);
        } catch{
            console.log('delete from db ', id)
        }
        yield put({type:"FETCH_PROVIDERS"});
}


function* providersSaga() {
  yield takeEvery('FETCH_PROVIDERS', fetchProviders);
  yield takeEvery('FETCH_PROVIDER_DETAILS', fetchProviderDetails);
  yield takeEvery('FETCH_SPECIALIZATIONS', fetchSpecializations);
  yield takeEvery('FETCH_INSURANCES', fetchInsurances);
  yield takeEvery('FETCH_OCCUPATIONS', fetchOccupations);
  yield takeEvery('FETCH_PROVIDER_SPECIALIZATIONS', fetchProviderSpecializations);
  yield takeEvery('FETCH_PROVIDER_INSURANCES', fetchProviderInsurances);
  yield takeEvery('FETCH_PROVIDER_OCCUPATIONS', fetchProviderOccupations);
  yield takeEvery('FETCH_PROVIDER_SERVICES', fetchProviderServices);
  yield takeEvery('DELETE_PROVIDERS', deleteProviders); 
}

export default providersSaga;
