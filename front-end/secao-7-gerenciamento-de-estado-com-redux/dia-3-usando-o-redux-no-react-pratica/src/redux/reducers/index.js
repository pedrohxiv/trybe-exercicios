import { combineReducers } from 'redux';

const INITIAL_STATE = {
  personalForm: {},
  professionalForm: {},
};

const individualReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PERSONAL_FORM':
      return {
        ...state,
        personalForm: { ...action.personalForm },
      };
    case 'PROFESSIONAL_FORM':
      return {
        ...state,
        professionalForm: { ...action.professionalForm },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ individual: individualReducer });

export default rootReducer;
