import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'

const BMIHistory = () => {
    return (
        <Layout>
            <Text style={{ textAlign: 'center', marginVertical: 5, fontFamily: 'roboto-bold' }} category="h5">
                BMI
            </Text>
            <Layout style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <Layout style={{ width: '33.3%', alignItems: 'center' }}>
                    <Text category="h6">Datum</Text>
                </Layout>
                <Layout style={{ width: '33.3%', alignItems: 'center' }}>
                    <Text category="h6">Gewicht</Text>
                </Layout>
                <Layout style={{ width: '33.3%', alignItems: 'center' }}>
                    <Text category="h6">Unterschied</Text>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default BMIHistory

const styles = StyleSheet.create({})
