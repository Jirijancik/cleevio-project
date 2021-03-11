export const addTrip = (trip) => (dispatch) => {
  dispatch({
    type: 'ADD_TRIP',
    payload: trip,
  });
};
