import { combineReducers } from "redux";

const groupsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_GROUPS':
      return action.payload;
    case 'CLEAR_GROUPS':
      return [];
    default:
      return state;
  }
};

const groupNameReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_GROUP_NAME':
			return action.payload;
		default:
			return state;
	}
};

const groupBioReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_GROUP_BIO':
			return action.payload;
		default:
			return state;
	}
};

const groupPhoneReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_GROUP_PHONE':
			return action.payload;
		default:
			return state;
	}
};

const groupEmailReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_GROUP_EMAIL':
			return action.payload;
		default:
			return state;
	}
};


const groupWebsiteReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_GROUP_WEBSITE':
			return action.payload;
		default:
			return state;
	}
};

const groupStreetReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_GROUP_STREET':
			return action.payload;
		default:
			return state;
	}
};

const groupCityReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_GROUP_CITY':
			return action.payload;
		default:
			return state;
	}
};

const groupStateReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_GROUP_STATE':
			return action.payload;
		default:
			return state;
	}
};


const groupZipReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_GROUP_ZIP':
			return action.payload;
		default:
			return state;
	}
};



export default combineReducers({
groupsReducer,
groupNameReducer,
groupBioReducer,
groupPhoneReducer,
groupEmailReducer,
groupWebsiteReducer,
groupStreetReducer,
groupCityReducer,
groupStateReducer,
groupZipReducer
});
