import React, {Component} from 'react';
import {Button} from 'react-native';
import {connect} from 'react-redux';

import {addAlarm} from '../actions/alarm';
import DateTimePicker from 'react-native-modal-datetime-picker';

class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
    };
  }

  showDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: true});
  };

  hideDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: false});
  };

  handleDatePicked = date => {
    console.log('A date has been picked: ', date);
    this.props.add(date);
    this.hideDateTimePicker();
  };

  render() {
    return (
      <>
        <Button title="Add Alarm" onPress={this.showDateTimePicker} />
        <DateTimePicker
          mode="datetime"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    alarms: state.alarms,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: time => {
      dispatch(addAlarm(time));
    },
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
