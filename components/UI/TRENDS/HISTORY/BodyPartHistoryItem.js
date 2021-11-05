import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, useTheme } from '@ui-kitten/components'
import { useAppContext } from '../../../../context/AppContext'
import { months } from './../../../../utils/DataProviders/data'

const BodyPartHistoryItem = ({ data, selectedBodyPart }) => {
    const { initialBodyPartMeasurement } = useAppContext()
    const { recordingDate } = data
    const theme = useTheme()

    const formatedMinutes = new Date(recordingDate).toLocaleTimeString().split(':').slice(0, 2).join(':')
    const finalDate = `${months[new Date(recordingDate).getMonth()]} ${new Date(recordingDate).getDate()} ${formatedMinutes}`

    // BODY PART CALCULATIONS
    const sizeCalculation = Math.sign(+data[selectedBodyPart] - +initialBodyPartMeasurement[selectedBodyPart])

    const renderRow =
        <Layout style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 5, marginHorizontal: 20 }}>
            <Layout style={{ backgroundColor: theme['color-basic-400'], borderRadius: 20, width: '32%', alignItems: 'center', padding: 8 }}>
                <Text category="s1" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {finalDate}
                </Text>
            </Layout>
            <Layout style={{ marginHorizontal: 10, backgroundColor: theme['color-basic-400'], borderRadius: 20, width: '32%', alignItems: 'center', padding: 8 }}>
                <Text category="s1" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {data[selectedBodyPart]}cm
                </Text>
            </Layout>
            <Layout style={{ borderRadius: 20, backgroundColor: sizeCalculation === -1 ? theme['color-primary-default'] : sizeCalculation === 0 ? theme['color-primary-default'] : theme['color-danger-default'], width: '32%', alignItems: 'center', padding: 8 }}>
                <Text category="s1" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {`${sizeCalculation === -1 ? '' : sizeCalculation === 0 ? '' : sizeCalculation === 1 ? '+' : ''} ${Number(data[selectedBodyPart] - initialBodyPartMeasurement[selectedBodyPart]).toFixed(1)}cm`}
                </Text>
            </Layout>
        </Layout>

    return renderRow
}

export default BodyPartHistoryItem

const styles = StyleSheet.create({})
