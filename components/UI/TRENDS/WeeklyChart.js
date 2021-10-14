import React from 'react'
import { Chart, Line, Area, VerticalAxis, Tooltip } from 'react-native-responsive-linechart'
import { StyleSheet } from 'react-native'
import { Layout, Text, useTheme } from '@ui-kitten/components'
import WeightBmiBodyFatSwitcher from './WeightBmiBodyFatSwitcher'

const WeeklyChart = () => {
    const theme = useTheme()

    return (
        <Layout style={{ height: '100%' }}>
            <Text category="h5" style={{ margin: 10 }}>
                Last week statistics
            </Text>
            <Layout>
                <Chart
                    style={{ height: 400, width: '100%' }}
                    data={[
                        { x: 0, y: 65 },
                        { x: 2.5, y: 64 },
                        { x: 5, y: 66 },
                        { x: 7.5, y: 68.3 },
                        { x: 10, y: 69 },
                        { x: 12.5, y: 68.5 },
                        { x: 14, y: 67 },
                    ]}
                    padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                    xDomain={{ min: 0, max: 14 }}
                    yDomain={{ min: 60, max: 70 }}
                >
                    <VerticalAxis tickCount={10} tickValues={[60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]} theme={{ labels: { formatter: (v) => v.toFixed(2) }, grid: { visible: false } }} />
                    <Area theme={{ gradient: { from: { color: theme['color-primary-default'] }, to: { color: theme['color-primary-default'], opacity: 0.2 } } }} />
                    <Line
                        tooltipComponent={<Tooltip theme={{ shape: { color: 'red', height: 25, width: 50 }, formatter: (v) => String(v.y + ' ' + 'kg') }} />}
                        theme={{ stroke: { color: theme['color-primary-600'], width: 5 }, scatter: { default: { width: 8, height: 8, rx: 4, color: theme['color-primary-700'] }, selected: { color: 'red' } } }}
                    />
                </Chart>
                <WeightBmiBodyFatSwitcher />
            </Layout>
        </Layout>
    )
}

export default WeeklyChart

const styles = StyleSheet.create({})
