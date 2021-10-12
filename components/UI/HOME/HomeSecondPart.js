import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Layout, useTheme, Icon } from '@ui-kitten/components'
import AdaptiveText from '../../../constants/components/AdaptiveText'

const TakeNoteIcon = (props) => (
    <Icon {...props} name="file-document-edit-outline" pack="material-community" />
)

const HomeSecondPart = () => {
    const theme = useTheme()

    return (
        <Layout>
            <Layout level="2">
                <AdaptiveText style={styles.resultsToDate} color={theme['color-basic-600']}>
                    October 8, 2021 08:27
                </AdaptiveText>
            </Layout>
            <Layout style={styles.boxContainer}>
                <Layout style={styles.singleBox}>
                    <AdaptiveText color={theme['color-success-default']} category="h5">
                        71.30kg
                    </AdaptiveText>
                    <AdaptiveText color={theme['color-basic-600']}>
                        Weight
                    </AdaptiveText>
                </Layout>
                <Layout style={styles.singleBox}>
                    <AdaptiveText color={theme['color-success-default']} category="h5">
                        22.0
                    </AdaptiveText>
                    <AdaptiveText color={theme['color-basic-600']}>
                        BMI
                    </AdaptiveText>
                </Layout>
                <Layout style={styles.singleBox}>
                    <AdaptiveText color={theme['color-success-default']} category="h5">
                        15.5%
                    </AdaptiveText>
                    <AdaptiveText color={theme['color-basic-600']}>
                        Body fat
                    </AdaptiveText>
                </Layout>
            </Layout>
            <Layout level="2" style={styles.noteBtnContainer}>
                <Button
                    status="basic"
                    accessoryLeft={TakeNoteIcon}
                    size="medium"
                    style={styles.noteBtn}
                />
            </Layout>
        </Layout>

    )
}

export default HomeSecondPart

const styles = StyleSheet.create({
    resultsToDate: {
        marginLeft: 20
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    singleBox: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    noteBtnContainer: {
        marginTop: 10
    },
    noteBtn: {
        width: 50
    }
})
