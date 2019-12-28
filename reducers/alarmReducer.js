import {ADD_ALARM, DELETE_ALARM} from '../actions';

const initialState = {
  alarms: [],
};

const alarmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALARM:
      console.log('time', action.payload);
      return {
        ...state,
        alarms: state.alarms.concat(action.payload),
      };

    case DELETE_ALARM:
      console.log('time', action.payload);
      return state;

    default:
      return state;
  }
};

export default alarmReducer;
