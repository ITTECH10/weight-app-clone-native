import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, useTheme } from '@ui-kitten/components'
import { useAppContext } from '../../../../context/AppContext'

const BodyPartHistoryItem = ({ data, selectedBodyPart }) => {
    const { initialBodyPartMeasurement } = useAppContext()
    const { recordingDate } = data
    const theme = useTheme()

    const formatedDate = new Date(recordingDate).toLocaleDateString()

    // BODY PART CALCULATIONS
    const sizeCalculation = Math.sign(+data[selectedBodyPart] - +initialBodyPartMeasurement[selectedBodyPart])

    const renderRow =
        <Layout style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 5, marginHorizontal: 20 }}>
            <Layout style={{ backgroundColor: theme['color-basic-400'], borderRadius: 20, width: '32%', alignItems: 'center', padding: 6 }}>
                <Text category="h6" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {formatedDate}
                </Text>
            </Layout>
            <Layout style={{ marginHorizontal: 10, backgroundColor: theme['color-basic-400'], borderRadius: 20, width: '32%', alignItems: 'center', padding: 6 }}>
                <Text category="h6" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {data[selectedBodyPart]}cm
                </Text>
            </Layout>
            <Layout style={{ borderRadius: 20, backgroundColor: sizeCalculation === -1 ? theme['color-primary-default'] : sizeCalculation === 0 ? theme['color-primary-default'] : theme['color-danger-default'], width: '32%', alignItems: 'center', padding: 6 }}>
                <Text category="h6" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {`${sizeCalculation === -1 ? '' : sizeCalculation === 0 ? '' : sizeCalculation === 1 ? '+' : ''} ${Number(data[selectedBodyPart] - initialBodyPartMeasurement[selectedBodyPart]).toFixed(1)}cm`}
                </Text>
            </Layout>
        </Layout>

    return renderRow
}

export default BodyPartHistoryItem

const styles = StyleSheet.create({})
