import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@ui-kitten/components'

const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button onPress={() => navigation.navigate('Signup')}>
                Signup
            </Button>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})
