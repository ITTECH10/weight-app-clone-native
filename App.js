import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { default as theme } from './theme.json'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const HomeScreen = () => {
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
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1' style={{ fontFamily: 'roboto-regular' }}>HOME</Text>
    </Layout>
  )
}

export default () => (
  <ApplicationProvider
    {...eva}
    theme={{ ...eva.light, ...theme }}
  >
    <HomeScreen />
  </ApplicationProvider>
);