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


function* providersSaga() {
  yield takeEvery('FETCH_PROVIDERS', fetchProviders);

}

export default providersSaga;
