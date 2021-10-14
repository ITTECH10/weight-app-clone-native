import React from 'react'
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import { Button, Layout, Input, Datepicker, Icon, useTheme } from '@ui-kitten/components'
import AdaptiveText from '../../../constants/components/AdaptiveText'

const DateIcon = (props) => (
    <Icon {...props} name="calendar-range" pack="material-community" />
)

// const PasswordHiddenIcon = (props) => (
//     <Icon {...props} name="eye" pack="material-community" />
// )

// const PasswordShownIcon = (props) => (
//     <Icon {...props} name="eye-off" pack="material-community" />
// )

const SignupScreen = ({ navigation }) => {
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
                            placeholder="First name"
                            size="large"
                            style={{ marginBottom: 10 }}
                        />
                        <Input
                            placeholder="Last name"
                            size="large"
                            style={{ marginBottom: 10 }}
                        />
                        <Datepicker
                            placeholder="Birth date"
                            style={{ marginBottom: 10 }}
                            accessoryRight={DateIcon}
                        />
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
                        <Input
                            placeholder="ConfirmPassword"
                            size="large"
                            style={{ marginBottom: 20 }}
                            secureTextEntry
                        />
                        <Button size="medium" onPress={() => navigation.navigate('Login')}>
                            Signup
                        </Button>
                        <AdaptiveText onPress={() => navigation.navigate('Login')} style={{ textAlign: 'center', marginTop: 3 }} color={theme['color-primary-default']}>
                            Already have an account? Login
                        </AdaptiveText>
                    </Layout>
                </KeyboardAvoidingView>
            </Layout>
        </Layout>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})
