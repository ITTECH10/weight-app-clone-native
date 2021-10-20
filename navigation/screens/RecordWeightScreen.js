import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Layout, Text, Button, useTheme, Calendar } from '@ui-kitten/components'
import ListSlider from 'react-native-list-slider';
import AdaptiveText from '../../constants/components/AdaptiveText';
import axios from 'axios'
import { useAppContext } from './../../context/AppContext'

const RecordWeightScreen = ({ navigation }) => {
    const theme = useTheme()
    const { mostRecentRecording, setMostRecentRecording, initialRecording, setInitialRecording } = useAppContext()
    const [recordingDate, setDate] = React.useState(new Date());
    const { currentHeight, currentWeight, bodyFat } = mostRecentRecording
    const [heightValue, setHeightValue] = React.useState(currentHeight ? currentHeight : 180)
    const [weightValue, setWeightValue] = React.useState(currentWeight ? currentWeight : 80)
    const [bodyFatValue, setBodyFatValue] = React.useState(bodyFat ? bodyFat : 15)

    const heightValueHandler = (value) => {
        setHeightValue(value)
    }

    const weightValueHandler = (value) => {
        setWeightValue(value)
    }

    const bodyFatValueHandler = (value) => {
        setBodyFatValue(value)
    }

    const handleSubmit = () => {
        const data = {
            currentHeight: heightValue,
            currentWeight: weightValue,
            bodyFat: bodyFatValue,
            recordingDate
        }

        axios.post('/users/record', data)
            .then(res => {
                if (res.status === 201) {
                    setMostRecentRecording(res.data.recording)
                    if (Object.keys(initialRecording).length === 0) {
                        setInitialRecording(res.data.recording)
                    }
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
                    Height
                </Text>
                <AdaptiveText
                    style={{ textAlign: 'center' }}
                    category="h3"
                    color={theme['color-primary-default']}
                >
                    {heightValue}cm
                </AdaptiveText>
                <ListSlider
                    value={heightValue}
                    onValueChange={heightValueHandler}
                />
            </Layout>
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
