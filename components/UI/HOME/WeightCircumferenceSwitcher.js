import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Layout } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/core'

const WeightCircumferenceSwitcher = ({ bgColor = '#fff' }) => {
    const navigation = useNavigation()

    return (
        <Layout style={{ ...styles.container, backgroundColor: bgColor }}>
            <View style={styles.switchBtnsContainer}>
                <Button onPress={() => navigation.navigate('Home')} style={{ ...styles.weightBtn, ...styles.switchBtns }}>
                    Weight
                </Button>
                <Button onPress={() => navigation.navigate('Circumferences')} style={styles.switchBtns}>
                    Circumference
                </Button>
            </View>
            <Button style={styles.plusBtn}>
                +
            </Button>
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
        marginRight: 12,
    },
    switchBtns: {
        // borderRadius: 5
        borderColor: '#fff',
        // borderWidth: 1,
    },
    plusBtn: {
        position: 'absolute',
        right: 35,
        borderColor: '#fff',
        borderWidth: .8
    }
})
