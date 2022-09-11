import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import providers from './providers.reducer';
import groups from './groups.reducer';
import details from './details.reducer';
import specializations from './specializations.reducer';
import insurances from './insurances.reducer';
import occupations from './occupations.reducer';
import profile from './profile.reducer';
import providerSpecializations from './providerSpecializations.reducer';
import providerInsurances from './providerInsurances.reducer';
import providerOccupations from './providerOccupations.reducer';
import providerServices from './providerServices.reducer';
import search from './search.reducer';
import availability from './availability.reducer';
import services from './services.reducer';
import profileInsurances from './profileInsurances.reducer';
import profileOccupations from './profileOccupations.reducer';
import profileSpecializations from './profileSpecializations.reducer';
import profileServices from './profileServices.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
    errors, // contains registrationMessage and loginMessage
    user, // will have an id and username if someone is logged in
    providers,
    groups,
    details,
    specializations,
    insurances,
    occupations,
    profile,
    providerSpecializations,
    providerInsurances,
    providerOccupations,
    providerServices,
    search,
    availability,
    services,
    profileInsurances,
    profileOccupations,
    profileSpecializations,
    profileServices,
});

export default rootReducer;
