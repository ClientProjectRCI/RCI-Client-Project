// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';



//get all details of one provider
function* fetchProviderName(action) {
  try {
    const response = yield axios.get(`/api/providerSearch/${action.payload.className}/${action.payload.searchItem}`);
    console.log(
      'In fetchProviderName, this is response.data',
      response.data
    );
    yield put({type: 'SEND_SEARCH_RESULT', payload: response.data}); //may need [0]
  } catch (error) {
    console.log('error in fetchProviderName', error);
  }
}
function* searchSaga() {
  yield takeEvery('SEARCH_PROVIDER_NAME', fetchProviderName);

}

export default searchSaga;
