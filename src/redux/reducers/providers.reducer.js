import { combineReducers } from "redux";

const providersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROVIDERS':
      return action.payload;
    case 'CLEAR_PROVIDERS':
      return [];
    default:
      return state;
  }
};

const providerNameReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_PROVIDER_NAME':
			return action.payload;
		default:
			return state;
	}
};

const providerBioReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_PROVIDER_BIO':
			return action.payload;
		default:
			return state;
	}
};

const providerPictureReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_PROVIDER_PICTURE':
			return action.payload;
		default:
			return state;
	}
};

const providerPhoneReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_PROVIDER_PHONE':
			return action.payload;
		default:
			return state;
	}
};

const providerEmailReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_PROVIDER_EMAIL':
			return action.payload;
		default:
			return state;
	}
};

const providerInsuranceReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PROVIDER_INSURANCE':
			return action.payload;
		default:
			return state;
	}
};

const providerOccupationReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PROVIDER_OCCUPATION':
			return action.payload;
		default:
			return state;
	}
};

const providerSpecializationReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PROVIDER_SPECIALIZATION':
			return action.payload;
		default:
			return state;
	}
};

const providerServiceReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PROVIDER_SERVICE':
			return action.payload;
		default:
			return state;
	}
};

const providerAvailabilityReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PROVIDER_AVAILABILITY':
			return action.payload;
		default:
			return state;
	}
};



export default combineReducers({
  providersReducer,
  providerNameReducer,
  providerBioReducer,
  providerPictureReducer,
  providerPhoneReducer,
  providerEmailReducer,
  providerInsuranceReducer,
  providerOccupationReducer,
  providerSpecializationReducer,
  providerServiceReducer,
  providerAvailabilityReducer

});

