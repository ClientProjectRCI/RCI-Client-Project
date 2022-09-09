// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';



//Search for the name of this one provider
function* fetchProviderName(action) {
  try {
    const response = yield axios.get(`/api/providerSearch/${action.payload.className}/${action.payload.searchItem}`);
    console.log(
      'In fetchProviderName, this is response.data',
      response.data
    );
    yield put({type: 'SET_PROVIDERS', payload: response.data}); //may need [0]
  } catch (error) {
    console.log('error in fetchProviderName', error);
  }
}

//Filter by specializations
function* filterProviderSpecializations(action) {
  try {
    const response = yield axios.get(
      `/api/providerSpecializationSearch/${action.payload.specialization}`
    );
    console.log('In filterProviderSpecializations, this is response.data', response.data);
    yield put({ type: 'SET_PROVIDERS', payload: response.data }); //may need [0]
  } catch (error) {
    console.log('error in filterProviderSpecializations', error);
  }
}


//Filter by Insurances
function* filterProviderInsurances(action) {
  try {
    const response = yield axios.get(
      `/api/providerInsuranceSearch/${action.payload.insurance}`
    );
    console.log(
      'In filterProviderinsurances, this is response.data',
      response.data
    );
    yield put({ type: 'SET_PROVIDERS', payload: response.data }); //may need [0]
  } catch (error) {
    console.log('error in filterProviderinsurances', error);
  }
}

//Filter by Occupations
function* filterProviderOccupations(action) {
  try {
    const response = yield axios.get(
      `/api/providerOccupationSearch/${action.payload.occupation}`
    );
    console.log(
      'In filterProvideroccupation, this is response.data',
      response.data
    );
    yield put({ type: 'SET_PROVIDERS', payload: response.data }); //may need [0]
  } catch (error) {
    console.log('error in filterProvideroccupation', error);
  }
}
function* providerSearchSaga() {
  yield takeEvery('SEARCH_PROVIDER_NAME', fetchProviderName);
yield takeEvery('FILTER_PROVIDER_SPECIALIZATIONS', filterProviderSpecializations);
yield takeEvery('FILTER_PROVIDER_INSURANCES', filterProviderInsurances);
yield takeEvery('FILTER_PROVIDER_OCCUPATIONS', filterProviderOccupations);

}


export default providerSearchSaga;
