import React from 'react'
import { StyleSheet, Image, Keyboard } from 'react-native'
import { Button, Layout, Input, useTheme } from '@ui-kitten/components'
import AdaptiveText from '../../../constants/components/AdaptiveText'
import axios from 'axios'
import { useAppContext } from '../../../context/AppContext'
import { storeString } from './../../../utils/StoreDataToStorage'
import Alert from '../../../constants/components/Alert'

const SignupScreen = ({ navigation }) => {
    const { setAuthenticated, setGeneralAppLoading, setToken } = useAppContext()
    const [keyboardVisible, setKeyboardVisible] = React.useState(false)
    const theme = useTheme()
    const [fields, setFields] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = React.useState({
        message: ''
    })

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const passwordEqualityHandler = (password, candidatePassword) => {
        return password === candidatePassword
    }

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

    const handleChange = (name) => (value) => {
        setFields({ ...fields, [name]: value });
    };

    const signupHandler = () => {
        const data = { ...fields }
        if (!passwordEqualityHandler(data.password, data.confirmPassword)) {
            setErrors({
                message: 'Passwords do not match!'
            })
            return
        }

        if (!validateEmail(data.email)) {
            setErrors({
                message: 'Please enter a valid email address!'
            })
            return
        }

        axios.post('/users/signup', data)
            .then(async res => {
                if (res.status === 201) {
                    setAuthenticated(true)
                    await storeString('token', res.data.token)
                    setToken(res.data.token)
                }
            }).catch(err => {
                if (err.response.data.error.isOperational) {
                    setErrors({
                        message: err.response.data.message
                    })
                }
                // console.log(err.response.data)
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
                    <Alert
                        message={errors.message}
                        setMessage={setErrors}
                        severity={theme['color-danger-600']}
                    />
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
