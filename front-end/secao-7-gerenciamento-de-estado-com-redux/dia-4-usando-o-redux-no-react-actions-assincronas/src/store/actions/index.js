const requestStarted = () => {
  return {
    type: 'REQUEST_STARTED',
  };
};

const requestSuccessful = (charater) => {
  return {
    type: 'REQUEST_SUCCESSFUL',
    payload: charater,
  };
};

const requestFailed = (error) => {
  return {
    type: 'REQUEST_FAILED',
    payload: error,
  };
};

export const fetchCharaterInfo = (charaterName) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const response = await fetch(
        `https://anapioficeandfire.com/api/characters?name=${charaterName}`,
      );
      const data = await response.json();
      dispatch(requestSuccessful(data[0]));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
