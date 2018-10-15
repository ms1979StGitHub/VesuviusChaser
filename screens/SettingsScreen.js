import React from 'react';
import  VesuviusConfigView from './VesuviusConfigView';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Vesuvius settings view',
  };

  render() {
    
    return <VesuviusConfigView />;
  }
}
