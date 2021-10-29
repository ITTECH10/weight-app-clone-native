import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'

const BodyFatHistory = () => {
    return (
        <Layout>
            <Text style={{ textAlign: 'center', marginVertical: 5, fontFamily: 'roboto-bold' }} category="h5">
                Körperfett
            </Text>
            <Layout style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <Layout style={{ width: '33.3%', alignItems: 'center' }}>
                    <Text category="h6">Datum</Text>
                </Layout>
                <Layout style={{ width: '33.3%', alignItems: 'center' }}>
                    <Text category="h6">Körperfett</Text>
                </Layout>
                <Layout style={{ width: '33.3%', alignItems: 'center' }}>
                    <Text category="h6">Unterschied</Text>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default BodyFatHistory

const styles = StyleSheet.create({})
