import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Button, useTheme } from '@ui-kitten/components'
import AdaptiveText from './../../../constants/components/AdaptiveText'

const TrendResultSwitcher = ({ selectedIndex, setSelectedIndex }) => {
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
                    Week
                </Button>
                <Button
                    onPress={() => setSelectedIndex(1)}
                    status="basic"
                    appearance="ghost"
                    style={{ marginHorizontal: 10, borderColor: '#eee', backgroundColor: selectedIndex === 1 ? theme['color-basic-default'] : null }}>
                    Month
                </Button>
                {/* <Button
                    onPress={() => setSelectedIndex(2)}
                    status="basic"
                    appearance="ghost"
                    style={{ borderColor: '#eee', backgroundColor: selectedIndex === 2 ? theme['color-basic-default'] : null }}
                >
                    Year
                </Button> */}
            </Layout>
        </Layout>
    )
}

export default TrendResultSwitcher

const styles = StyleSheet.create({})
