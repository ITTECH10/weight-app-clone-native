import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, useTheme } from '@ui-kitten/components'
import { useAppContext } from '../../../../context/AppContext'

const HistoryItem = ({ data, selectedCategoryIndex }) => {
    const { currentWeight: weight, BMI, bodyFat, recordingDate } = data
    const { initialRecording } = useAppContext()
    const { currentWeight: initialWeight, BMI: initialBMI, bodyFat: initialBodyFat } = initialRecording
    const theme = useTheme()

    const formatedMinutes = new Date(recordingDate).toLocaleString().split(' ')[3].split(':').slice(0, 2).join(':')
    const formatedDate = new Date(recordingDate).toLocaleString().split(' ').slice(1, 3).join(' ')
    const finalDate = formatedDate + ' ' + formatedMinutes

    const weightCalculation = Math.sign(weight - initialWeight)
    const BMICalculation = Math.sign(BMI - initialBMI)
    const BodyFatCalculation = Math.sign(bodyFat - initialBodyFat)

    const renderRow = selectedCategoryIndex === 0 ? (
        <Layout style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 5, marginHorizontal: 20 }}>
            <Layout style={{ backgroundColor: theme['color-basic-400'], width: '32%', borderRadius: 20, alignItems: 'center', padding: 8 }}>
                <Text category="s1" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {finalDate}
                </Text>
            </Layout>
            <Layout style={{ backgroundColor: theme['color-basic-400'], marginHorizontal: 10, width: '32%', borderRadius: 20, alignItems: 'center', padding: 8 }}>
                <Text category="s1" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {weight}kg
                </Text>
            </Layout>
            <Layout style={{ backgroundColor: weightCalculation === -1 ? theme['color-primary-default'] : weightCalculation === 0 ? theme['color-primary-default'] : theme['color-danger-default'], width: '32%', borderRadius: 20, alignItems: 'center', padding: 8 }}>
                <Text category="s1" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {`${weightCalculation === -1 ? '' : weightCalculation === 0 ? '' : weightCalculation === 1 ? '+' : ''} ${Number(weight - initialWeight).toFixed(1)}kg`}
                </Text>
            </Layout>
        </Layout>
    ) : selectedCategoryIndex === 1 ? (
        <Layout style={{ flexDirection: 'row', marginVertical: 5, marginHorizontal: 20 }}>
            <Layout style={{ backgroundColor: theme['color-basic-400'], width: '32%', borderRadius: 20, alignItems: 'center', padding: 8 }}>
                <Text category="s1" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {finalDate}
                </Text>
            </Layout>
            <Layout style={{ backgroundColor: theme['color-basic-400'], marginHorizontal: 10, width: '32%', borderRadius: 20, alignItems: 'center', padding: 8 }}>
                <Text category="s1" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {BMI}
                </Text>
            </Layout>
            <Layout style={{ backgroundColor: BMICalculation === -1 ? theme['color-primary-default'] : BMICalculation === 0 ? theme['color-primary-default'] : theme['color-danger-default'], width: '32%', borderRadius: 20, alignItems: 'center', padding: 8 }}>
                <Text category="s1" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {`${BMICalculation === -1 ? '' : BMICalculation === 0 ? '' : BMICalculation === 1 ? '+' : ''} ${Number(BMI - initialBMI).toFixed(1)}`}
                </Text>
            </Layout>
        </Layout>
    ) : selectedCategoryIndex === 2 ? (
        <Layout style={{ flexDirection: 'row', marginVertical: 5, marginHorizontal: 20 }}>
            <Layout style={{ backgroundColor: theme['color-basic-400'], width: '32%', borderRadius: 20, alignItems: 'center', padding: 8 }}>
                <Text category="s1" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {finalDate}
                </Text>
            </Layout>
            <Layout style={{ backgroundColor: theme['color-basic-400'], marginHorizontal: 10, width: '32%', borderRadius: 20, alignItems: 'center', padding: 8 }}>
                <Text category="s1" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {bodyFat}%
                </Text>
            </Layout>
            <Layout style={{ backgroundColor: BodyFatCalculation === -1 ? theme['color-primary-default'] : BMICalculation === 0 ? theme['color-primary-default'] : theme['color-danger-default'], width: '32%', borderRadius: 20, alignItems: 'center', padding: 8 }}>
                <Text category="s1" style={{ fontFamily: 'roboto-bold', color: '#fff' }}>
                    {`${BodyFatCalculation === -1 ? '' : BodyFatCalculation === 0 ? '' : BodyFatCalculation === 1 ? '+' : ''} ${Number(bodyFat - initialBodyFat).toFixed(1)}%`}
                </Text>
            </Layout>
        </Layout>
    ) : null

    return renderRow
}

// export const renderHistoryItem = ({ item }) => (
//     <HistoryItem weight={item.currentWeight} recordingDate={item.recordingDate} />
// );

export default HistoryItem

const styles = StyleSheet.create({})
