import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '@ui-kitten/components'

const PrimaryColorView = ({ children, style }) => {
    const theme = useTheme()

    return (
        <View style={{ ...style, backgroundColor: theme['color-primary-default'] }}>
            {children}
        </View>
    )
}

export default PrimaryColorView

const styles = StyleSheet.create({
    container: {}
})
