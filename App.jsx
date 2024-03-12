import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useFonts } from 'expo-font';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import * as Splassscreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/onboarding/Onboarding';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import Search from './screens/search/Search';
import CountryDetails from './screens/details/CountryDetails';
import Recommended from './screens/details/Recommended';
import PlaceDetails from './screens/details/PlaceDetails';
const Stack = createNativeStackNavigator();

const App = () => {
  const [ fontsLoaded ] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf'),
  })
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await Splassscreen.hideAsync();
    }
  }, [ fontsLoaded ]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <><StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name="Bottom" component={BottomTabNavigation} options={{ headerShown: false }} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="CountryDetails" component={CountryDetails} />
          <Stack.Screen name="Recommended" component={Recommended} />
          <Stack.Screen name="PlaceDetails" component={PlaceDetails} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'xtrabold',
    fontSize: 18,
  }
});


export default App;