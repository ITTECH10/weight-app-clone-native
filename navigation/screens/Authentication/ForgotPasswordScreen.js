import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Button, useTheme, Input } from '@ui-kitten/components'
import axios from 'axios'
import Alert from '../../../constants/components/Alert'

const ForgotPasswordScreen = ({ navigation }) => {
    const theme = useTheme()
    const [email, setEmail] = React.useState('')
    const [errors, setErrors] = React.useState({
        message: ''
    })

    const handleSubmit = () => {
        axios.post('/users/me/forgotPassword', { email })
            .then(res => {
                if (res.status === 200) {
                    navigation.navigate('ResetPassword')
                }
            }).catch(err => {
                // console.log(err.response)
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
                        Passwort vergessen?
                    </Text>
                </Layout>
                <Layout style={styles.subTitleWrapper}>
                    <Text category="s2" style={{ ...styles.subtitle, color: theme['color-basic-600'] }}>
                        Mach dir keine Sorge! Das Zurücksetzen Ihres Passworts ist einfach.
                        Geben Sie die E-Mail-Adresse ein, die Sie für Scallow registriert haben.
                    </Text>
                </Layout>
                <Alert
                    message={errors.message}
                    setMessage={setErrors}
                    severity={theme['color-danger-default']}
                />
                <Layout style={styles.inputWrapper}>
                    <Input
                        placeholder="Geben sie ihre E-Mailadresse ein..."
                        style={styles.emailInput}
                        onChangeText={(text) => setEmail(text)}
                    />
                </Layout>
                <Button
                    size="medium"
                    style={{ marginTop: 10 }}
                    onPress={handleSubmit}
                    disabled={email === ''}
                >
                    FORTSETZEN
                </Button>
            </Layout>
        </Layout>
    )
}

export default ForgotPasswordScreen

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
    emailInput: {
        width: '100%'
    }
})
