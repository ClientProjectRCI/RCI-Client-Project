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

//get all details of one Group by USER.ID (Action.payload is user id)
function* fetchGroupProfile(action) {
  try {
    const detailsResponse = yield axios.get(`/api/groupProfile/${action.payload}`);
    console.log(
      'In fetchProviderProfile, this is detailsResponse.data',
      detailsResponse.data
    );
    yield put({ type: 'SEND_DETAILS', payload: detailsResponse.data[0] });
  } catch (error) {
    console.log('error in fetchProviderDetails', error);
  }
}

// Delete group 
function* deleteGroups(action){
  const id = action.payload;
  console.log('payload for DELETE>>>', id);
        try{
            yield axios.delete(`/api/groups/${id}`);
        } catch{
            console.log('delete from db ', id)
        }
        yield put({type:"FETCH_GROUPS"});
}

//get all details of one provider
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


function* groupsSaga() {
  yield takeEvery('FETCH_GROUPS', fetchGroups);
  yield takeEvery('FETCH_GROUP_PROFILE', fetchGroupProfile);
  yield takeEvery('FETCH_GROUP_DETAILS', fetchGroupDetails);
  yield takeEvery('DELETE_GROUPS', deleteGroups);
   yield takeEvery('SEARCH_GROUP_NAME', fetchGroupName);
}



export default groupsSaga;
