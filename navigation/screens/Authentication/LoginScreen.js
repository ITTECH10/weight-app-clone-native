import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Button, Layout, Input, useTheme } from '@ui-kitten/components'
import AdaptiveText from '../../../constants/components/AdaptiveText'
import { useAppContext } from '../../../context/AppContext'
import axios from 'axios'
import { storeString } from './../../../utils/StoreDataToStorage'

const LoginScreen = ({ navigation }) => {
    const theme = useTheme()
    const { setAuthenticated, setGeneralAppLoading } = useAppContext()

    const [fields, setFields] = React.useState({
        email: '',
        password: ''
    })

    const handleChange = (name) => (value) => {
        setFields({ ...fields, [name]: value });
    };

    const loginHandler = () => {
        setGeneralAppLoading(true)
        const data = { ...fields }

        axios.post('/users/login', data)
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
                <Layout style={{ width: '100%', height: 240, marginTop: 80 }}>
                    <Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={require('./../../../assets/images/scallow-logo.png')} />
                </Layout>

                <Layout style={{ width: '80%', marginTop: 20, justifyContent: 'flex-end' }}>
                    <Layout>
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
                        <Button disabled={Object.values(fields).some(el => el === '')} size="medium" onPress={loginHandler}>
                            Login
                        </Button>
                        <AdaptiveText onPress={() => navigation.navigate('Signup')} style={{ textAlign: 'center', marginTop: 3 }} color={theme['color-primary-default']}>
                            Don't have an account? Signup
                        </AdaptiveText>
                        <AdaptiveText style={{ textAlign: 'center', marginTop: 3 }} color={theme['color-primary-default']}>
                            Forgot your password?
                        </AdaptiveText>
                    </Layout>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
