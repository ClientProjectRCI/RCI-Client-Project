// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';



//Search for the name of this one group

function* fetchGroupName(action) {
  try {
    const response = yield axios.get(`/api/groupSearch/${action.payload.className}/${action.payload.searchItem}`);
    console.log(
      'In fetchGroupName, this is response.data',
      response.data
    );
    yield put({type: 'SET_GROUPS', payload: response.data}); //may need [0]
  } catch (error) {
    console.log('error in fetchGroupName', error);
  }
}

function* groupSearchSaga() {
  yield takeEvery('SEARCH_GROUP_NAME', fetchGroupName);

}

export default groupSearchSaga;
