// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_GROUPS" actions
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

//get all details of one provider
function* fetchGroupDetails(action) {
  try {
    const detailsResponse = yield axios.get(`/api/groups/${action.payload}`);
    console.log(
      'In fetchGroupDetails, this is detailsResponse.data',
      detailsResponse.data
    );
    yield put({type: 'SEND_DETAILS', payload: detailsResponse.data[0]}); 
  } catch (error) {
    console.log('error in fetchGroupDetails', error);
  }
}
function* groupsSaga() {
  yield takeEvery('FETCH_GROUPS', fetchGroups);
yield takeEvery('FETCH_GROUP_DETAILS', fetchGroupDetails);
}

export default groupsSaga;
