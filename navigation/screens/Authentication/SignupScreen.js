import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@ui-kitten/components'

const SignupScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Signup Screen</Text>
            <Button onPress={() => navigation.navigate('Login')}>
                Login
            </Button>
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})
