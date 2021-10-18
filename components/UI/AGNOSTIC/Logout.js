import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from '@ui-kitten/components'
import { useAppContext } from './../../../context/AppContext'

const Logout = ({ navigation }) => {
    const { setAuthenticated, setGeneralAppLoading } = useAppContext()

    const logoutHandler = () => {
        setGeneralAppLoading(true)

        setTimeout(() => {
            setAuthenticated(false)
            setGeneralAppLoading(false)
        }, 2000)
    }

    return (
        <Button
            appearance="ghost"
            size="medium"
            onPress={logoutHandler}
        >
            LOGOUT
        </Button>
    )
}

export default Logout

const styles = StyleSheet.create({})
