import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Button, useTheme, Input } from '@ui-kitten/components'
import axios from 'axios'
import Alert from '../../../constants/components/Alert'
import { useAppContext } from '../../../context/AppContext'
import { storeString } from './../../../utils/StoreDataToStorage'

const ResetPasswordScreen = ({ navigation }) => {
    const theme = useTheme()
    const { setAuthenticated, setToken } = useAppContext()

    const [resetToken, setResetToken] = React.useState('')
    const [newPassword, setNewPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    const [errors, setErrors] = React.useState({
        message: ''
    })

    const handleSubmit = () => {
        if (newPassword !== confirmPassword) {
            setErrors({
                message: 'Passwords are not the same!'
            })
            return
        }

        axios.post('/users/me/resetPassword', { token: resetToken, password: newPassword })
            .then(async res => {
                if (res.status === 200) {
                    setAuthenticated(true)
                    await storeString('token', res.data.token)
                    setToken(res.data.token)
                }
            }).catch(err => {
                console.log(err.response)
                setErrors({
                    message: 'Something went wrong!'
                })
                if (!err) {
                    navigation.navigate('ResetPassword')
                }
            })
    }

    return (
        <Layout style={styles.screen}>
            <Layout style={styles.contentWrapper}>
                <Layout style={styles.titleWrapper}>
                    <Text category="h4">
                        Passwort Zurücksetzen
                    </Text>
                </Layout>
                <Layout style={styles.subTitleWrapper}>
                    <Text category="s2" style={{ ...styles.subtitle, color: theme['color-basic-600'] }}>
                        Bitte geben Sie den Reset-Token ein,
                        den wir an Ihre E-Mail gesendet haben!
                    </Text>
                </Layout>
                <Alert
                    message={errors.message}
                    setMessage={setErrors}
                    severity={theme['color-danger-default']}
                />
                <Layout style={styles.inputWrapper}>
                    <Input
                        placeholder="Geben sie ihr token ein"
                        style={styles.input}
                        onChangeText={(text) => setResetToken(text)}
                    />
                    <Input
                        placeholder="Neues Passwort"
                        style={styles.input}
                        onChangeText={(text) => setNewPassword(text)}
                    />
                    <Input
                        placeholder="Passwort bestätigen"
                        style={styles.input}
                        onChangeText={(text) => setConfirmPassword(text)}
                    />
                </Layout>
                <Button
                    size="medium"
                    style={{ marginTop: 10 }}
                    onPress={handleSubmit}
                    disabled={resetToken === '' || newPassword === '' || confirmPassword === ''}
                >
                    FORTSETZEN
                </Button>
            </Layout>
        </Layout>
    )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentWrapper: {
        width: '90%',
        marginBottom: 120
    },
    titleWrapper: {
        alignItems: 'center'
    },
    subTitleWrapper: {

    },
    subtitle: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15
    },
    inputWrapper: {
        alignItems: 'center'
    },
    input: {
        width: '100%',
        marginBottom: 10
    },
    newPasswordInput: {

    }
})
