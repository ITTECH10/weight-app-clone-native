import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Button } from '@ui-kitten/components'

const date = new Date()

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

const MonthsSwitcher = () => {
    const [selectedMonth, setSelectedMonth] = React.useState(months[date.getMonth()])

    const handleMonthSwitch = (month) => {
        setSelectedMonth(month)
    }

    return (
        <Layout style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Button
                status="basic"
                appearance="ghost"
                onPress={() => handleMonthSwitch(months[date.getMonth() - 4])}
            >
                {months[date.getMonth() - 4]}
            </Button>
            <Button
                status="basic"
                appearance="ghost"
                onPress={() => handleMonthSwitch(months[date.getMonth() - 3])}
            >
                {months[date.getMonth() - 3]}
            </Button>
            <Button
                status="basic"
                appearance="ghost"
                onPress={() => handleMonthSwitch(months[date.getMonth() - 2])}
            >
                {months[date.getMonth() - 2]}
            </Button>
            <Button
                status="basic"
                appearance="ghost"
                onPress={() => handleMonthSwitch(months[date.getMonth() - 1])}
            >
                {months[date.getMonth() - 1]}
            </Button>
            <Button
                status="basic"
                appearance="ghost"
                onPress={() => handleMonthSwitch(months[date.getMonth()])}
            >
                {months[date.getMonth()]}
            </Button>
        </Layout>
    )
}

export default MonthsSwitcher

const styles = StyleSheet.create({})
