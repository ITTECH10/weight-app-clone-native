import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Layout, Text, Button, useTheme, Calendar } from '@ui-kitten/components'
import ListSlider from 'react-native-list-slider';
import AdaptiveText from '../../constants/components/AdaptiveText';
import axios from 'axios'

const RecordWeightScreen = ({ navigation }) => {
    const theme = useTheme()
    const [weightValue, setWeightValue] = React.useState(70)
    const [bodyFatValue, setBodyFatValue] = React.useState(15)
    const [recordingDate, setDate] = React.useState(new Date());

    const weightValueHandler = (value) => {
        setWeightValue(value)
    }

    const bodyFatValueHandler = (value) => {
        setBodyFatValue(value)
    }

    const handleSubmit = () => {
        const data = {
            currentWeight: weightValue,
            bodyFat: bodyFatValue,
            recordingDate
        }

        axios.post('/users/record', data)
            .then(res => {
                if (res.status === 201) {
                    navigation.goBack()
                }
            }).catch(err => {
                console.log(err.response)
            })
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <Layout>
                <Text category="h5" style={{ textAlign: 'center', marginVertical: 20 }}>
                    Weight
                </Text>
                <AdaptiveText
                    style={{ textAlign: 'center' }}
                    category="h3"
                    color={theme['color-primary-default']}
                >
                    {weightValue}kg
                </AdaptiveText>
                <ListSlider
                    value={weightValue}
                    onValueChange={weightValueHandler}
                />
            </Layout>
            <Layout style={{ marginVertical: 20 }}>
                <Text category="h5" style={{ textAlign: 'center', marginVertical: 20 }}>
                    Body Fat
                </Text>
                <AdaptiveText
                    style={{ textAlign: 'center' }}
                    category="h3"
                    color={theme['color-primary-default']}
                >
                    {bodyFatValue}%
                </AdaptiveText>
                <ListSlider
                    value={bodyFatValue}
                    onValueChange={bodyFatValueHandler}
                />
            </Layout>
            <Layout>
                <Text category="h5" style={{ textAlign: 'center', marginTop: 20 }}>
                    Date
                </Text>
                <Calendar
                    date={recordingDate}
                    onSelect={nextDate => setDate(nextDate)}
                    style={{ width: '100%', borderTopWidth: 0 }}
                />
            </Layout>

            <Button
                size="medium"
                style={{ marginHorizontal: 15, marginVertical: 10 }}
                onPress={handleSubmit}
            >
                RECORD
            </Button>
        </ScrollView>
    )
}

export default RecordWeightScreen

const styles = StyleSheet.create({})
