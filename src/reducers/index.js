import { combineReducers } from 'redux';
import { tripListReducer } from './tripListReducer';
import { addTripReducer } from './addTripReducer';

export const rootReducers = combineReducers({
  tripList: tripListReducer,
  addTrip: addTripReducer,
});
