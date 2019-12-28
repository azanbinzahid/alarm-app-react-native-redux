import React, {Component} from 'react';
import {StyleSheet, View, Button, Text, ScrollView} from 'react-native';
import TimePicker from './components/TimePicker';
import ListAlarms from './components/ListAlarms';

class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.heading}> Alarm App </Text>

        <ScrollView style={styles.listAlarms}>
          <ListAlarms />
        </ScrollView>

        <View style={styles.timePicker}>
          <TimePicker />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    padding: 20,
  },
  timePicker: {
    paddingTop: '10%',
    width: '50%',
    // right: '10%',
    bottom: 20,
  },
  listAlarms: {
    width: '100%',
  },
});

export default App;
