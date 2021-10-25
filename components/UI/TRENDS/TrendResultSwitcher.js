import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Icon, Button, useTheme } from '@ui-kitten/components'
// import AdaptiveText from './../../../constants/components/AdaptiveText'

const HistoryIcon = (props) => (
    <Icon {...props}
        name="history"
        pack="material-community"
        style={[props.style, { width: 20, height: 20 }]}
    />
)

const TrendResultSwitcher = ({ selectedIndex, setSelectedIndex, navigation }) => {
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
    }
})
