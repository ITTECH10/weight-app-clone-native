import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import TrendsScreen from './screens/TrendsScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import HomeScreen from './screens/HomeScreen';
import CircumferencesScreen from './screens/CircumferencesScreen';
import SignupScreen from './screens/Authentication/SignupScreen'
import LoginScreen from './screens/Authentication/LoginScreen'

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Circumferences" component={CircumferencesScreen} />
        </Stack.Navigator>
    );
}

const HomeIcon = (props) => (
    <Icon {...props} name='scale-balance' pack="material-community" />
);

const TrendsIcon = (props) => (
    <Icon {...props} name='chart-bar' pack="material-community" />
);

const ProfileIcon = (props) => (
    <Icon {...props} name='account' pack="material-community" />
);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Measurements' icon={HomeIcon} />
        <BottomNavigationTab title='Trends' icon={TrendsIcon} />
        <BottomNavigationTab title='My Profile' icon={ProfileIcon} />
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Measurements' component={HomeStackNavigator} />
        <Screen name='Trends' component={TrendsScreen} />
        <Screen name='MyProfile' component={MyProfileScreen} />
    </Navigator>
);

const AuthStackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Signup' component={SignupScreen} />
        <Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
)

export const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
);

export const AuthNavigator = () => (
    <NavigationContainer>
        <AuthStackNavigator />
    </NavigationContainer>
)