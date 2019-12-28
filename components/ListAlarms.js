import React, {Component} from 'react';
import {Button, StyleSheet, FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {ListItem} from 'react-native-elements';
import {deleteAlarm} from '../actions/alarm';

class ListAlarms extends Component {
  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <View style={styles.container}>
      <ListItem
        title={item.time.toString()}
        subtitle={item.date.toString()}
        leftIcon={{name: 'alarm'}}
        bottomDivider
        rightElement={
          <Button
            title="x"
            color="red"
            onPress={e => {
              this.props.delete(item.value);
            }}
          />
        }
      />
    </View>
  );

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.alarms}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

const mapStateToProps = state => {
  return {
    alarms: state.alarms.alarms,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: value => {
      dispatch(deleteAlarm(value));
    },
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(ListAlarms);
