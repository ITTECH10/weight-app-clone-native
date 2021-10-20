import React from 'react'
import { StyleSheet, Image, Keyboard } from 'react-native'
import { Button, Layout, Input, useTheme } from '@ui-kitten/components'
import AdaptiveText from '../../../constants/components/AdaptiveText'
import axios from 'axios'
import { useAppContext } from '../../../context/AppContext'
import { storeString } from './../../../utils/StoreDataToStorage'

const SignupScreen = ({ navigation }) => {
    const { setAuthenticated, setGeneralAppLoading } = useAppContext()
    const [keyboardVisible, setKeyboardVisible] = React.useState(false)
    const theme = useTheme()

    React.useEffect(() => {
        const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(prevState => !prevState)
        })

        const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false)
        })

        return () => {
            keyboardDidShow.remove()
            keyboardDidHide.remove()
        }
    })

    const [fields, setFields] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (name) => (value) => {
        setFields({ ...fields, [name]: value });
    };

    const signupHandler = () => {
        setGeneralAppLoading(true)
        const data = { ...fields }

        axios.post('/users/signup', data)
            .then(res => {
                if (res.status === 201) {
                    setGeneralAppLoading(false)
                    storeString('token', res.data.token)
                    setAuthenticated(true)
                }
            }).catch(err => {
                setGeneralAppLoading(false)
                console.log(err.response)
            })
    }

    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
                {!keyboardVisible &&
                    <Layout style={{ width: '100%', height: 240, marginTop: 80 }}>
                        <Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={require('./../../../assets/images/scallow-logo.png')} />
                    </Layout>}

                <Layout style={{ width: '80%', marginTop: 20, justifyContent: 'flex-end' }}>
                    <Layout>
                        <Input
                            placeholder="Firstname"
                            onChangeText={handleChange('firstName')}
                            size="large"
                            style={{ marginBottom: 10 }}
                        />
                        <Input
                            placeholder="Lastname"
                            onChangeText={handleChange('lastName')}
                            size="large"
                            style={{ marginBottom: 10 }}
                        />
                        <Input
                            placeholder="E-mail"
                            onChangeText={handleChange('email')}
                            size="large"
                            style={{ marginBottom: 10 }}
                        />
                        <Input
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            size="large"
                            style={{ marginBottom: 10 }}
                            secureTextEntry
                        />
                        <Input
                            placeholder="ConfirmPassword"
                            onChangeText={handleChange('confirmPassword')}
                            size="large"
                            style={{ marginBottom: 20 }}
                            secureTextEntry
                        />
                        <Button disabled={Object.values(fields).some(el => el === '')} size="medium" onPress={signupHandler}>
                            Signup
                        </Button>
                        <AdaptiveText onPress={() => navigation.navigate('Login')} style={{ textAlign: 'center', marginTop: 3 }} color={theme['color-primary-default']}>
                            Already have an account? Login
                        </AdaptiveText>
                    </Layout>
                </Layout>
            </Layout>
        </Layout >
    )
}

export default SignupScreen

const styles = StyleSheet.create({})
