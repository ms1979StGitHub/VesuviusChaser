import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StatusBar, 
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Icon } from 'react-native-elements'
import PureChart from 'react-native-pure-chart';

let sampleData = [
  {
    value: 5,
    label: 'Chase',
    color: '#ff0000',
  }, {
    value: 7,
    label: 'Monitor',
    color: '#ffff00'
  }, {
    value: 25,
    label: 'Pet',
    color: '#009900'
  }
]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/vesuvius_logo.png')
                  : require('../assets/images/vesuvius_logo.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            
          </View>

          <View style={styles.pieView}>
                         
          
          <Text style={styles.pieChartText}>Click on a color in pie diagram to see values</Text>

          <View style={styles.pieRowView} >
          <PureChart select data={sampleData} type='pie'  />

          <View style={styles.iconView} >   
          <Icon reverse name='ios-happy' type='ionicon' color='#009900' />
          <Icon reverse type='ionicon' color='#ffff00' />
          <Icon reverse name='ios-alert' type='ionicon' color='#ff0000' />
          </View>

          </View>


          </View>

        </ScrollView>         
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#446674',
  },
  developmentModeText: {
    marginBottom: 20,
    color: '#fcc8c0',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },

  pieView: {
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
  },

  iconView: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginHorizontal: 50,
  },

  pieRowView: {
    flexDirection: 'row',
    justifyContent: 'flex-center',
    alignItems: 'stretch',
    marginHorizontal: 50,
  },

  pieChartText: {
    fontSize: 17,
    color: '#fcc8c0',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: '10%'
  },

  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0, 
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#FFFFFF', 
  },
});
