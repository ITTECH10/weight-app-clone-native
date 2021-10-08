import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

// SCREENS
import HomeScreen from './screens/HomeScreen';
import TrendsScreen from './screens/TrendsScreen';
import MyProfileScreen from './screens/MyProfileScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => (
    <Icon {...props} name='home' pack="material-community" />
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
        <BottomNavigationTab title='Home' icon={HomeIcon} />
        <BottomNavigationTab title='Trends' icon={TrendsIcon} />
        <BottomNavigationTab title='My Profile' icon={ProfileIcon} />
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Trends' component={TrendsScreen} />
        <Screen name='MyProfile' component={MyProfileScreen} />
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
);