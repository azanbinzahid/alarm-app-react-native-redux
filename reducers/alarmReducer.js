import {ADD_ALARM, DELETE_ALARM} from '../actions';
import Moment from 'moment';

const initialState = {
  alarms: [],
};

const alarmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALARM:
      Moment.locale('en');
      console.log('time', state);
      const time = Moment(action.payload).format('HH:mm');
      const date = Moment(action.payload).format('d/M/YY');
      console.log(time);
      const alarm = {
        value: action.payload,
        time: time,
        date: date,
      };
      return {
        ...state,
        alarms: state.alarms.concat(alarm),
      };

    case DELETE_ALARM:
      return {
        ...state,
        alarms: state.alarms.filter(v => {
          return v.value !== action.payload;
        }),
      };

    default:
      return state;
  }
};

export default alarmReducer;
