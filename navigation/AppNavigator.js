import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeIcon, TrendsIcon, ProfileIcon } from './../components/UI/ICONS/icons'

// SCREENS
import SignupScreen from './screens/Authentication/SignupScreen'
import LoginScreen from './screens/Authentication/LoginScreen'
import TrendsScreen from './screens/TrendsScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import HomeScreen from './screens/HomeScreen';
import CircumferencesScreen from './screens/CircumferencesScreen';
import SettingsScreen from './screens/SettingsScreen'
import RecordWeightScreen from './screens/RecordWeightScreen'
import SetGoalScreen from './screens/SetGoalScreen'
import TakeNoteScreen from './screens/TakeNoteScreen'
import HistoryScreen from './screens/HistoryScreen'
import EditProfileScreen from './screens/EditProfileScreen'
import DeleteProfileScreen from './screens/DeleteProfileScreen'
import ForgotPasswordScreen from './screens/Authentication/ForgotPasswordScreen'
import ResetPasswordScreen from './screens/Authentication/ResetPasswordScreen'
import VideoTutorialScreen from './screens/VideoTutorialScreen';

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Circumferences" component={CircumferencesScreen} />
            <Stack.Screen name="RecordWeight" component={RecordWeightScreen} options={{ headerShown: true, headerTitle: 'Manuelle Eingabe' }} />
            <Stack.Screen name="SetGoal" component={SetGoalScreen} options={{ headerShown: true, headerTitle: 'Ziel Setzen' }} />
            <Stack.Screen name="TakeNote" component={TakeNoteScreen} options={{ headerShown: true, headerTitle: 'Beachten' }} />
        </Stack.Navigator>
    );
}

function TrendsStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TrendsScreen" component={TrendsScreen} />
            <Stack.Screen
                name="History"
                component={HistoryScreen}
                options={{ headerShown: true, headerTitle: 'Geschichte' }}
            />
        </Stack.Navigator>
    );
}

function ProfileStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" options={{ headerShown: false }} component={MyProfileScreen} />
            <Stack.Screen name="Settings" options={{ headerTitle: 'Einstellungen' }} component={SettingsScreen} />
            <Stack.Screen name="EditProfile" options={{ headerTitle: 'Konto Bearbeiten' }} component={EditProfileScreen} />
            <Stack.Screen name="DeleteProfile" options={{ headerTitle: 'Konto L??schen' }} component={DeleteProfileScreen} />
            <Stack.Screen name="VideoTutorial" options={{ headerTitle: 'Videoanleitung' }} component={VideoTutorialScreen} />
        </Stack.Navigator>
    );
}

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Messungen' icon={HomeIcon} />
        <BottomNavigationTab title='Trends' icon={TrendsIcon} />
        <BottomNavigationTab title='Mein Konto' icon={ProfileIcon} />
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Measurements' component={HomeStackNavigator} />
        <Screen name='Trends' component={TrendsStackNavigator} />
        <Screen name='MyProfile' component={ProfileStackNavigator} />
    </Navigator>
);

const AuthStackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Signup' component={SignupScreen} />
        <Stack.Screen
            name='ForgotPassword'
            component={ForgotPasswordScreen}
            options={{ headerShown: true, headerTitle: '' }}
        />
        <Stack.Screen
            name='ResetPassword'
            component={ResetPasswordScreen}
            options={{ headerShown: true, headerTitle: '' }}
        />
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