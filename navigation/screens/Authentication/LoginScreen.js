import React from 'react'
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import { Button, Layout, Input, useTheme } from '@ui-kitten/components'
import AdaptiveText from '../../../constants/components/AdaptiveText'

// const PasswordHiddenIcon = (props) => (
//     <Icon {...props} name="eye" pack="material-community" />
// )

// const PasswordShownIcon = (props) => (
//     <Icon {...props} name="eye-off" pack="material-community" />
// )

const LoginScreen = ({ navigation }) => {
    // const [passwordVisible, setPasswordVisible] = React.useState(false)
    const theme = useTheme()

    // const showPasswordHandler = () => {
    //     setPasswordVisible(prevState => !prevState)
    // }

    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Layout style={{ width: '100%', height: 240, marginTop: 80 }}>
                    <Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={require('./../../../assets/images/scallow-logo.png')} />
                </Layout>

                <KeyboardAvoidingView behavior="padding" style={{ width: '80%', marginTop: 20, justifyContent: 'flex-end' }}>
                    <Layout>
                        <Input
                            placeholder="E-mail"
                            size="large"
                            style={{ marginBottom: 10 }}
                        />
                        <Input
                            placeholder="Password"
                            size="large"
                            style={{ marginBottom: 10 }}
                            secureTextEntry
                        />
                        <Button size="medium" onPress={() => navigation.navigate('Signup')}>
                            Login
                        </Button>
                        <AdaptiveText onPress={() => navigation.navigate('Signup')} style={{ textAlign: 'center', marginTop: 3 }} color={theme['color-primary-default']}>
                            Don't have an account? Signup
                        </AdaptiveText>
                    </Layout>
                </KeyboardAvoidingView>
            </Layout>
        </Layout>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
