import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Layout, useTheme } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/core'
import AdaptiveText from '../../../constants/components/AdaptiveText'
import MenuButton from './MenuButton'

const WeightCircumferenceSwitcher = ({ bgColor = '#fff' }) => {
    const navigation = useNavigation()
    const theme = useTheme()

    return (
        <Layout style={{ ...styles.container, backgroundColor: bgColor }}>
            <View style={styles.switchBtnsContainer}>
                <Button status="basic" onPress={() => navigation.navigate('Home')} style={{ ...styles.weightBtn, ...styles.switchBtns }}>
                    <AdaptiveText color={theme['color-primary-default']}>
                        Weight
                    </AdaptiveText>
                </Button>
                <Button status="basic" onPress={() => navigation.navigate('Circumferences')} style={styles.switchBtns}>
                    <AdaptiveText color={theme['color-primary-default']}>
                        Circumferences
                    </AdaptiveText>
                </Button>
            </View>
            <MenuButton />
        </Layout>
    )
}

export default WeightCircumferenceSwitcher

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    switchBtnsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    weightBtn: {
        marginRight: 18
    },
    switchBtns: {}
})
