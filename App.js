import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import TimePicker from './components/TimePicker';
import ListAlarms from './components/ListAlarms';

class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.listAlarms}>
          <ListAlarms />
        </View>

        <View style={styles.timePicker}>
          <TimePicker />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  timePicker: {
    position: 'absolute',
    bottom: '10%',
    width: '80%',
    // right: '10%',
  },
  listAlarms: {
    width: '100%',
  },
});

export default App;
