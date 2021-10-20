import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import WeightCircumferenceSwitcher from './WeightCircumferenceSwitcher'
import { Button, useTheme } from '@ui-kitten/components'
import PrimaryColorView from '../../../constants/components/PrimaryColorView'
import AdaptiveText from '../../../constants/components/AdaptiveText'
import { useAppContext } from '../../../context/AppContext'
import Loader from './../../../constants/components/LoadingIndicator'

const HomeFirstPart = ({ navigation }) => {
    const theme = useTheme()
    const { logedCustomer, mostRecentRecording, initialRecording } = useAppContext()
    const { fullName, weightGoal } = logedCustomer
    const { currentWeight: mostRecentWeight, BMI: mostRecentBMI, bodyFat: mostRecentBodyFat } = mostRecentRecording
    const { recordingDate: initialRecordingDate, currentWeight: initialWeight, BMI: initialBMI, bodyFat: initialBodyFat } = initialRecording

    const statisticIsPositive = (n1, n2) => {
        return Math.sign(n1 - n2) === 1 ? '+' : Math.sign(n1 - n2) === 0 ? '' : '-'
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
                                {mostRecentWeight ? mostRecentWeight : 0}kg
                            </AdaptiveText>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.goalsBox}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('SetGoal')}>
                        <View>
                            <AdaptiveText>
                                Weight Goal: {weightGoal ? weightGoal : 0}kg
                            </AdaptiveText>
                        </View>
                    </TouchableWithoutFeedback>
                    <View>
                        <Button onPress={() => navigation.navigate('SetGoal')} style={styles.bodyFatBtn} size="small">
                            Body fat goal
                        </Button>
                    </View>
                </View>
            </View>

            <View style={styles.fromDateText}>
                {initialRecordingDate ?
                    <AdaptiveText>
                        From {new Date(initialRecordingDate).toLocaleString()}
                    </AdaptiveText> :
                    <AdaptiveText>
                        No stats for now.
                    </AdaptiveText>}
            </View>
            <View style={styles.recentChangesBox}>
                <View style={styles.changedStatsBtnBox}>
                    <AdaptiveText category="h5">
                        {mostRecentWeight && initialWeight ? weightCalculation : 0}kg
                    </AdaptiveText>
                    <AdaptiveText>
                        Weight
                    </AdaptiveText>
                </View>
                <View style={styles.changedStatsBtnBox}>
                    <AdaptiveText category="h5">
                        {mostRecentBMI && initialBMI ? BMICalculation : 0}
                    </AdaptiveText>
                    <AdaptiveText>
                        BMI
                    </AdaptiveText>
                </View>
                <View style={styles.changedStatsBtnBox}>
                    <AdaptiveText category="h5">
                        {mostRecentBodyFat && initialBodyFat ? bodyFatCalculation : 0}%
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
