import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import  VesuviusLinksView  from './VesuviusLinksView';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Vesuvius Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <VesuviusLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#446674',
  },
});
