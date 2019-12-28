import React, {Component} from 'react';
import {Button, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {ListItem} from 'react-native-elements';

class ListAlarms extends Component {
  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <ListItem
      title={item.time.toString()}
      subtitle={item.date.toString()}
      leftIcon={{name: 'alarm'}}
      bottomDivider
      //   chevron
    />
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

const mapStateToProps = state => {
  return {
    alarms: state.alarms.alarms,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(ListAlarms);
