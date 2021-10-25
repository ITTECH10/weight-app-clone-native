import React from 'react'
import { Chart, Line, Area, VerticalAxis, Tooltip } from 'react-native-responsive-linechart'
import { StyleSheet } from 'react-native'
import { Layout, Text, useTheme } from '@ui-kitten/components'
import MonthsSwitcher from './../MonthsSwitcher'
import { useAppContext } from '../../../../context/AppContext'

const BmiMonthlyChart = () => {
    const { monthlyChartRecords } = useAppContext()
    const theme = useTheme()

    const data = monthlyChartRecords.map((record, i) => {
        return {
            x: i * 2.5,
            y: record.averageBodyFat
        }
    })

    const minWeightEver = Math.min.apply(Math, data.map(o => o.y)) - 5
    const maxWeightEver = Math.max.apply(Math, data.map(o => o.y)) + 2

    const verticalAxisTickValues = []

    for (let i = minWeightEver; i < maxWeightEver; i++) {
        verticalAxisTickValues.push(i)
    }

    return (
        <Layout>
            <Text category="h5" style={{ margin: 10 }}>
                Durchschnittliches KÖRPERFETT der letzten 5 Monate
            </Text>
            <MonthsSwitcher />
            <Layout>
                <Chart
                    style={{ height: 400, width: '100%' }}
                    data={data}
                    padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                    xDomain={{ min: 0, max: 10.2 }}
                    yDomain={{ min: minWeightEver, max: maxWeightEver }}
                >
                    <VerticalAxis tickCount={5} tickValues={verticalAxisTickValues} theme={{ labels: { formatter: (v) => v.toFixed(2) }, grid: { visible: false } }} />
                    <Area theme={{ gradient: { from: { color: theme['color-primary-default'] }, to: { color: theme['color-primary-default'], opacity: 0.2 } } }} />
                    <Line
                        tooltipComponent={<Tooltip theme={{ shape: { color: 'red', height: 25, width: 50 }, formatter: (v) => String(v.y + ' ' + 'kg') }} />}
                        theme={{ stroke: { color: theme['color-primary-600'], width: 5 }, scatter: { default: { width: 8, height: 8, rx: 4, color: theme['color-primary-700'] }, selected: { color: 'red' } } }}
                    />
                </Chart>
            </Layout>
        </Layout >
    )
}

export default BmiMonthlyChart

const styles = StyleSheet.create({})
