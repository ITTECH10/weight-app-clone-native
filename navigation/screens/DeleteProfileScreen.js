import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Button, Text, Icon } from '@ui-kitten/components'
import axios from 'axios'
import { useAppContext } from '../../context/AppContext'

const RemoveProfileIcon = (props) => (
    <Icon {...props} style={[props.style, { width: 80, height: 80 }]} name="account-remove" pack="material-community" />
)

const DeleteProfileScreen = () => {
    const { logout } = useAppContext()

    const handleSubmit = () => {
        axios.delete('/users/me')
            .then(res => {
                if (res.status === 204) {
                    logout()
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={styles.container}>
                <Layout>
                    <Button
                        accessoryRight={RemoveProfileIcon}
                        status="danger"
                        appearance="ghost"
                    />
                </Layout>
                <Layout>
                    <Text category="h5" style={{ textAlign: 'center', fontFamily: 'roboto-bold' }}>
                        Es gibt kein Zurück!
                    </Text>
                    <Text category="h6" style={{ marginVertical: 20, paddingHorizontal: 10 }}>
                        Durch Auswahl von "Konto löschen" werden alle Informationen angezeigt
                        auf dem Konto und den daran gebundenen Geräten gelöscht.
                        Sie können dieses Konto nicht mehr verwenden oder darauf zugreifen
                        seiner Informationen.
                    </Text>
                </Layout>
                <Layout>
                    <Button
                        size="medium"
                        status="danger"
                        onPress={handleSubmit}
                    >
                        KONTO LÖSCHEN
                    </Button>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default DeleteProfileScreen

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})
