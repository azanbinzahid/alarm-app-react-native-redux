import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {addAlarm} from './actions/alarm';

class App extends Component {
  state = {
    time: '',
    alarms: [],
  };

  render() {
    return (
      <View>
        <Button styles={styles.addButton} title="Add Alarm" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    width: 100,
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
