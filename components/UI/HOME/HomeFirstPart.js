import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import WeightCircumferenceSwitcher from './WeightCircumferenceSwitcher'
import { Button, useTheme } from '@ui-kitten/components'
import PrimaryColorView from '../../../constants/components/PrimaryColorView'
import AdaptiveText from '../../../constants/components/AdaptiveText'
import { useAppContext } from '../../../context/AppContext'

const HomeFirstPart = ({ navigation }) => {
    const theme = useTheme()
    const { logedCustomer, mostRecentRecording, initialRecording } = useAppContext()
    const { fullName, weightGoal } = logedCustomer
    const { currentWeight: mostRecentWeight, BMI: mostRecentBMI, bodyFat: mostRecentBodyFat } = mostRecentRecording
    const { recordingDate: initialRecordingDate, currentWeight: initialWeight, BMI: initialBMI, bodyFat: initialBodyFat } = initialRecording

    const statisticIsPositive = (n1, n2) => {
        return Math.sign(n1 - n2) === 1 ? '+' : '-'
    }

    const weightCalculation = `${statisticIsPositive(mostRecentWeight, initialWeight)}${Number(mostRecentWeight - initialWeight).toFixed(1)}`
    const BMICalculation = `${statisticIsPositive(mostRecentBMI, initialBMI)}${Number(mostRecentBMI - initialBMI).toFixed(1)}`
    const bodyFatCalculation = `${statisticIsPositive(mostRecentBodyFat, initialBodyFat)}${Number(mostRecentBodyFat - initialBodyFat).toFixed(1)}`

    return (
        <PrimaryColorView style={styles.mainContainer}>
            <WeightCircumferenceSwitcher
                bgColor={theme['color-primary-default']}
            />
            <View style={styles.circleContainer}>
                <AdaptiveText style={{ marginBottom: 10 }}>
                    {fullName}
                </AdaptiveText>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('RecordWeight')}
                >
                    <View
                        style={{ ...styles.circle, backgroundColor: theme['color-primary-default'] }}>
                        <View style={styles.circleText}>
                            <AdaptiveText category="h2">
                                {mostRecentWeight}kg
                            </AdaptiveText>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.goalsBox}>
                    <View>
                        <AdaptiveText>
                            Weight Goal: {weightGoal}kg
                        </AdaptiveText>
                    </View>
                    <View>
                        <Button style={styles.bodyFatBtn} size="small">
                            Body fat goal
                        </Button>
                    </View>
                </View>
            </View>

            <View style={styles.fromDateText}>
                <AdaptiveText>
                    From {new Date(initialRecordingDate).toLocaleString()}
                </AdaptiveText>
            </View>
            <View style={styles.recentChangesBox}>
                <View style={styles.changedStatsBtnBox}>
                    <AdaptiveText category="h5">
                        {weightCalculation}kg
                    </AdaptiveText>
                    <AdaptiveText>
                        Weight
                    </AdaptiveText>
                </View>
                <View style={styles.changedStatsBtnBox}>
                    <AdaptiveText category="h5">
                        {BMICalculation}
                    </AdaptiveText>
                    <AdaptiveText>
                        BMI
                    </AdaptiveText>
                </View>
                <View style={styles.changedStatsBtnBox}>
                    <AdaptiveText category="h5">
                        {bodyFatCalculation}%
                    </AdaptiveText>
                    <AdaptiveText>
                        Body fat
                    </AdaptiveText>
                </View>
            </View>
        </PrimaryColorView>
    )
}

export default HomeFirstPart

const styles = StyleSheet.create({
    mainContainer: {
        height: '70%'
    },
    circleContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    circle: {
        borderColor: '#fff',
        borderWidth: 3,
        borderStyle: 'dotted',
        height: 180,
        width: 180,
        borderRadius: 360
    },
    circleText: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    goalsBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25
    },
    bodyFatBtn: {
        borderColor: '#fff',
        marginLeft: 10
    },
    fromDateText: {
        marginLeft: 25,
        marginTop: 45
    },
    recentChangesBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    changedStatsBtnBox: {
        alignItems: 'center'
    }
})
