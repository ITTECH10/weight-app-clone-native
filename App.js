import React from 'react';
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './theme.json'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { MaterialCommunityIconsPack } from './assets/icons/material-community-pack'
import { AppNavigator } from './navigation/AppNavigator';
import SafeArea from './constants/components/SafeArea';
import StatusBar from './constants/components/StatusBar';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false)

  const loadFonts = async () => {
    await Font.loadAsync({
      'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf'),
      'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
      'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
  }

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return (
    <SafeArea>
      <StatusBar />
      <AppNavigator />
    </SafeArea>
  )
}

export default () => (
  <>
    <IconRegistry icons={MaterialCommunityIconsPack} />
    <ApplicationProvider
      {...eva}
      theme={{ ...eva.light, ...theme }}
    >
      <App />
    </ApplicationProvider>
  </>
);