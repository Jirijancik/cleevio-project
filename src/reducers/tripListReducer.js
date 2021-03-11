export const DefaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

export const tripListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'TRIP_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to fetch data',
      };
    case 'TRIP_LIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case 'TRIP_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: '',
      };
    default:
      return state;
  }
};
