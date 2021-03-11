import { DefaultState } from './tripListReducer';

export const addTripReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'ADD_TRIP':
      return {
        ...state,
        loading: false,
        data:
          [...state.data, action.payload],

      };
    case 'TRIP_LIST_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
