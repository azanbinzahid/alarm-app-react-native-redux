import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {addAlarm} from './actions/alarm';
import TimePicker from './components/TimePicker';

class App extends Component {
  state = {
    time: '',
  };

  render() {
    console.log(this.props.alarms);
    return (
      <View style={styles.mainContainer}>
        <TimePicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
});

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
export default connect(mapStateToProps, mapDispatchToProps)(App);
