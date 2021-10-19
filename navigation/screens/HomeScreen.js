import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout } from '@ui-kitten/components'
import HomeFirstPart from '../../components/UI/HOME/HomeFirstPart'
import HomeSecondPart from '../../components/UI/HOME/HomeSecondPart'

const WeightScreen = ({ navigation }) => {
    return (
        <Layout style={{ flex: 1 }}>
            <HomeFirstPart navigation={navigation} />
            <HomeSecondPart navigation={navigation} />
        </Layout>
    )
}

export default WeightScreen

const styles = StyleSheet.create({})
