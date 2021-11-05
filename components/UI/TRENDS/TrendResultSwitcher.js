import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Button, useTheme } from '@ui-kitten/components'
import { HistoryIcon, BodyMeasureIcon } from './../ICONS/icons'
// import AdaptiveText from './../../../constants/components/AdaptiveText'

const TrendResultSwitcher = ({ selectedIndex, setSelectedIndex, navigation, switchToBodyMeasurementsHandler }) => {
    const theme = useTheme()

    return (
        <Layout>
            <Layout style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                <Button
                    onPress={() => setSelectedIndex(0)}
                    status="basic"
                    appearance="ghost"
                    style={{ borderColor: '#eee', backgroundColor: selectedIndex === 0 ? theme['color-basic-default'] : null }}
                >
                    Woche
                </Button>
                <Button
                    onPress={() => setSelectedIndex(1)}
                    status="basic"
                    appearance="ghost"
                    style={{ marginHorizontal: 10, borderColor: '#eee', backgroundColor: selectedIndex === 1 ? theme['color-basic-default'] : null }}>
                    Monat
                </Button>
                <Button
                    size="tiny"
                    appearance="outline"
                    style={styles.switchMeasurementsBtn}
                    accessoryRight={BodyMeasureIcon}
                    onPress={switchToBodyMeasurementsHandler}
                />
                <Button
                    size="tiny"
                    appearance="outline"
                    style={styles.historyBtn}
                    accessoryRight={HistoryIcon}
                    onPress={() => navigation.navigate('History')}
                />
            </Layout>
        </Layout>
    )
}

export default TrendResultSwitcher

const styles = StyleSheet.create({
    historyBtn: {
        position: 'absolute',
        right: 15
    },
    switchMeasurementsBtn: {
        position: 'absolute',
        right: 70
    }
})
