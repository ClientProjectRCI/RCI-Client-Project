// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// //get all details of one provider
// function* fetchProviderDetails(action) {
//   try {
//     const detailsResponse = yield axios.get(`/api/providers/${action.payload}`);
//     console.log(
//       'In fetchProviderDetails, this is detailsResponse.data',
//       detailsResponse.data
//     );
//     yield put({ type: 'SEND_DETAILS', payload: detailsResponse.data[0] });
//   } catch (error) {
//     console.log('error in fetchProviderDetails', error);
//   }
// }

//get all PROFILE of one provider by USER.ID (Action.payload is user id)
function* fetchProviderProfile(action) {
    try {
        const detailsResponse = yield axios.get(
            `/api/providerProfile/${action.payload}`
        );
        console.log('Profile Saga Response.data', detailsResponse.data);
        yield put({ type: 'SEND_PROFILE', payload: detailsResponse.data[0] });
    } catch (error) {
        console.log('error in fetchProviderDetails', error);
    }
}

// GET profileInsurances
function* fetchProfileInsurances(action) {
    console.log(`What is action in Profile Insurances:`, action.payload);
    try {
        const detailsResponse = yield axios.get(
            `/api/profileInsurances/${action.payload}`
        );
        yield put({
            type: 'SET_PROFILE_INSURANCES',
            payload: detailsResponse.data,
        });
    } catch (error) {
        console.log('error in fetchProviderDetails', error);
    }
}

// GET profileOccupations
function* fetchProfileOccupations(action) {
    try {
        const occupations = yield axios.get(
            `/api/profileOccupations/${action.payload}`
        );
        yield put({
            type: 'SET_PROFILE_OCCUPATIONS',
            payload: occupations.data,
        });
    } catch (error) {
        console.log('error in fetchProfileOccupations', error);
    }
}

// GET ProfileSpecializations
function* fetchProfileSpecializations(action) {
    try {
        const specializations = yield axios.get(
            `/api/profileSpecializations/${action.payload}`
        );
        yield put({
            type: 'SET_PROFILE_SPECIALIZATIONS',
            payload: specializations.data,
        });
    } catch (error) {
        console.log('error in fetchProfileSpecializations', error);
    }
}

// GET ProfileServices
function* fetchProfileServices(action) {
    try {
        const services = yield axios.get(
            `/api/profileServices/${action.payload}`
        );
        yield put({
            type: 'SET_PROFILE_SERVICES',
            payload: services.data,
        });
    } catch (error) {
        console.log('error in fetchProfileServices', error);
    }
}

function* editProfile(action) {
    console.log('EditProfile is:>>', action.payload);
    const res = yield axios.put(
        `/api/providerProfile/${action.payload}`,
        action.payload
    );
    yield put({
        type: 'FETCH_PROVIDER_PROFILE',
        payload: res.data,
    });
}

function* providerProfileSaga() {
    yield takeEvery('EDIT_PROVIDER_PROFILE', editProfile);
    yield takeEvery('FETCH_PROVIDER_PROFILE', fetchProviderProfile);
    yield takeEvery('FETCH_PROFILE_INSURANCES', fetchProfileInsurances);
    yield takeEvery('FETCH_PROFILE_OCCUPATIONS', fetchProfileOccupations);
    yield takeEvery(
        'FETCH_PROFILE_SPECIALIZATIONS',
        fetchProfileSpecializations
    );
    yield takeEvery('FETCH_PROFILE_SERVICES', fetchProfileServices);
}

export default providerProfileSaga;
