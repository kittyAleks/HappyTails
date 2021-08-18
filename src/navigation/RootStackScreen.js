import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/* Components */
import { SplashScreen } from '../screens/SplashScreen';
import { HomeScreen } from '../screens/HomeScreen';

const defaultOptions = {
  headerTintColor: 'red',
  headerTitleStyle: {
    fontSize: 20,
    color: 'white',
  },
};
const optionsSplashScreen = {
  headerTitle: 'HappyTails',
  headerBackTitleVisible: false,
  headerTransparent: true,
};


const RootStack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export const RootStackScreen = () => (
  // <SafeAreaProvider>
  <RootStack.Navigator>
    <RootStack.Screen name="SplashScreen" options={{
      ...optionsSplashScreen,
      ...defaultOptions,
    }} component={SplashScreen} />

    <RootStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        ...optionsSplashScreen,
        ...defaultOptions,
      }}
    />
  </RootStack.Navigator>
  // </SafeAreaProvider>

);


// const AllTabNavigation = () => (
//   <Tab.Navigator
//     barStyle={{
//       backgroundColor: 'white',
//     }}
//     tabBarOptions={{
//       headerBackground: '#009493',
//       paddingTop: 20,
//       activeTintColor: 'white',
//       // showLabel: false,
//       style: {
//         height: 75,
//         paddingTop: 5,
//         backgroundColor: "#ca9d9c",
//       },
//     }}>
//
//     <Tab.Screen
//       name='HomeScreen'
//       component={HomeScreen}
//       options={{
//         headerShown: false,
//         tabBarLabel: 'Home',
//         fontSize: 30,
//       }}
//     />
// <Tab.Screen
//  name='HomeScreen'
//  component={HomeScreen}
//   options={{
//    tabBarLabel: 'TodoList'
//   tabBarIcon: () => ()
// }}
// />

// </Tab.Navigator>
// );

