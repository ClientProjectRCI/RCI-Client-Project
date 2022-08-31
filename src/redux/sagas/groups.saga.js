// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PROVIDERS" actions
function* fetchGroups(action) {
  try {
    console.log('FetchGroups, action.payload is', action.payload);
    const response = yield axios.get(`/api/groups`);
    console.log('Get all groups:', response.data);
    yield put({ type: 'SET_GROUPS', payload: response.data });
  } catch (error) {
    console.log('Get all groups error', error);
  }
}


function* groupsSaga() {
  yield takeEvery('FETCH_GROUPS', fetchGroups);

}

export default groupsSaga;
