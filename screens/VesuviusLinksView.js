import React , { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { WebBrowser } from 'expo';
import Touchable from 'react-native-platform-touchable';

_handlePressSlack = () => {
  WebBrowser.openBrowserAsync('https://performancemanager.successfactors.eu');
};

_handlePressDocs = () => {
  WebBrowser.openBrowserAsync('https://vesuvius.staffbase.com');
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 15,
},
optionsTitleText: {
  fontSize: 16,
  marginLeft: 15,
  marginTop: 9,
  marginBottom: 12,
},
optionIconContainer: {
  marginRight: 9,
},
option: {
  backgroundColor: '#fdfdfd',
  paddingHorizontal: 15,
  paddingVertical: 15,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: '#EDEDED',
},
optionText: {
  fontSize: 15,
  marginTop: 1,
},
});


export default class VesuviusLinksView extends Component {
  render() {
    return (
      <View>
        <Text style={styles.optionsTitleText}>
          Vesuvius Links
        </Text>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressDocs}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../assets/images/successfactor.png')}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 20, height: 20, marginTop: 1 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Run SuccessFactor on your mobile
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          background={Touchable.Ripple('#ccc', false)}
          style={styles.option}
          onPress={this._handlePressSlack}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
                source={require('../assets/images/staffbase.png')}
                fadeDuration={0}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Join StaffBase application on your mobile
              </Text>
            </View>
          </View>
        </Touchable>
        
      </View>
    );
  }
}
 