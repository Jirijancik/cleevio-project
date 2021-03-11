export const fetchData = (url) => async (dispatch) => {
  try {
    dispatch({
      type: 'TRIP_LIST_LOADING',
    });

    const response = await fetch(url);
    const [fetchedData] = await response.json();

    dispatch({
      type: 'TRIP_LIST_SUCCESS',
      payload: fetchedData.data,
    });
  } catch (e) {
    dispatch({
      type: 'TRIP_LIST_FAIL',
    });
  }
};
