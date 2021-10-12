import React from 'react'
import { StyleSheet, View } from 'react-native'
import WeightCircumferenceSwitcher from './WeightCircumferenceSwitcher'
import { Text, Button, useTheme } from '@ui-kitten/components'
import PrimaryColorView from '../../../constants/components/PrimaryColorView'
import AdaptiveText from '../../../constants/components/AdaptiveText'

const HomeFirstPart = () => {
    const theme = useTheme()

    return (
        <PrimaryColorView style={styles.mainContainer}>
            <WeightCircumferenceSwitcher
                bgColor={theme['color-primary-default']}
            />
            <View style={styles.circleContainer}>
                <AdaptiveText style={{ marginBottom: 10 }}>
                    Person X
                </AdaptiveText>
                <View style={{ ...styles.circle, backgroundColor: theme['color-primary-default'] }}>
                    <View style={styles.circleText}>
                        <AdaptiveText category="h2">
                            71.3kg
                        </AdaptiveText>
                    </View>
                </View>
                <View style={styles.goalsBox}>
                    <View>
                        <AdaptiveText>
                            Weight Goal: 70kg
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
                    From September 29, 2021 12:28
                </AdaptiveText>
            </View>
            <View style={styles.recentChangesBox}>
                <View style={styles.changedStatsBtnBox}>
                    <AdaptiveText category="h5">
                        +1.3kg
                    </AdaptiveText>
                    <AdaptiveText>
                        Weight
                    </AdaptiveText>
                </View>
                <View style={styles.changedStatsBtnBox}>
                    <AdaptiveText category="h5">
                        +0.4
                    </AdaptiveText>
                    <AdaptiveText>
                        BMI
                    </AdaptiveText>
                </View>
                <View style={styles.changedStatsBtnBox}>
                    <AdaptiveText category="h5">
                        +0.5%
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
