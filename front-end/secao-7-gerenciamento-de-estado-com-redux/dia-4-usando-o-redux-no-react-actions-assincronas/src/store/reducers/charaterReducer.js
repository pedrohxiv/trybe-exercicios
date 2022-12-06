const INITIAL_STATE = {
  charater: {},
  isFetching: false,
  errorMessage: '',
};

const charaterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_STARTED':
      return {
        ...state,
        charater: {},
        isFetching: true,
        errorMessage: '',
      };
    case 'REQUEST_SUCCESSFUL':
      return {
        ...state,
        charater: action.payload,
        isFetching: false,
        errorMessage: '',
      };
    case 'REQUEST_FAILED':
      return {
        ...state,
        charater: {},
        isFetching: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export default charaterReducer;
