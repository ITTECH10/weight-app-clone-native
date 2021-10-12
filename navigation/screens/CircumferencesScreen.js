import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import WeightCircumferenceSwitcher from '../../components/UI/HOME/WeightCircumferenceSwitcher'

const CircumferencesScreen = () => {
    return (
        <Layout style={{ flex: 1 }}>
            <WeightCircumferenceSwitcher />
            <Text>
                CircumferencesScreen
            </Text>
        </Layout>
    )
}

export default CircumferencesScreen

const styles = StyleSheet.create({})
