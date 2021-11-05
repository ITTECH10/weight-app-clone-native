import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Button, Layout, useTheme, Text } from '@ui-kitten/components'
import AdaptiveText from '../../../constants/components/AdaptiveText'
import { useAppContext } from '../../../context/AppContext'
import { TakeNoteIcon } from './../ICONS/icons'

const HomeSecondPart = ({ navigation }) => {
    const theme = useTheme()
    const { mostRecentRecording } = useAppContext()
    const { recordingDate: mostRecentRecordingDate, currentWeight, BMI, bodyFat, recordingNote } = mostRecentRecording

    return (
        <ScrollView>
            <Layout level="2">
                {mostRecentRecordingDate &&
                    <AdaptiveText style={styles.resultsToDate} color={theme['color-basic-600']}>
                        {new Date(mostRecentRecordingDate).toLocaleString()}
                    </AdaptiveText>}
            </Layout>
            <Layout style={styles.boxContainer}>
                <Layout style={styles.singleBox}>
                    <AdaptiveText color={theme['color-success-default']} category="h5">
                        {currentWeight ? currentWeight : 0}kg
                    </AdaptiveText>
                    <AdaptiveText color={theme['color-basic-600']}>
                        Gewicht
                    </AdaptiveText>
                </Layout>
                <Layout style={styles.singleBox}>
                    <AdaptiveText color={theme['color-success-default']} category="h5">
                        {BMI ? BMI : 0}
                    </AdaptiveText>
                    <AdaptiveText color={theme['color-basic-600']}>
                        BMI
                    </AdaptiveText>
                </Layout>
                <Layout style={styles.singleBox}>
                    <AdaptiveText color={theme['color-success-default']} category="h5">
                        {bodyFat ? bodyFat : 0}%
                    </AdaptiveText>
                    <AdaptiveText color={theme['color-basic-600']}>
                        Körperfett
                    </AdaptiveText>
                </Layout>
            </Layout>
            <Layout level="2" style={styles.noteBtnContainer}>
                <Button
                    status="basic"
                    accessoryLeft={TakeNoteIcon}
                    size="medium"
                    style={styles.noteBtn}
                    disabled={!mostRecentRecording.currentWeight}
                    onPress={() => navigation.navigate('TakeNote')}
                />
                <Text style={{ marginBottom: 2 }}>
                    {recordingNote}
                </Text>
            </Layout>
        </ScrollView>

    )
}

export default HomeSecondPart

const styles = StyleSheet.create({
    resultsToDate: {
        marginLeft: 20
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    singleBox: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    noteBtnContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    noteBtn: {
        width: 50
    }
})
