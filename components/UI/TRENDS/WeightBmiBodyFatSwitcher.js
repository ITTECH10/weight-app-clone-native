import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Button, useTheme } from '@ui-kitten/components'
import AdaptiveText from '../../../constants/components/AdaptiveText'
import { WeightIcon, BmiIcon, BodyFatIcon } from './../ICONS/icons'

const WeightBmiBodyFatSwitcher = ({ selectedCategoryIndex, setSelectedCategoryIndex }) => {
    const theme = useTheme()

    return (
        <Layout style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
            <Layout style={{ alignItems: 'center' }}>
                <Button
                    onPress={() => setSelectedCategoryIndex(0)}
                    accessoryLeft={WeightIcon}
                    style={{ borderRadius: 20, backgroundColor: selectedCategoryIndex === 0 ? theme['color-primary-800'] : theme['color-primary-600'] }}
                ></Button>
                <AdaptiveText color={theme['color-primary-default']}>
                    Gewicht
                </AdaptiveText>
            </Layout>
            <Layout style={{ marginHorizontal: 10, alignItems: 'center' }}>
                <Button
                    onPress={() => setSelectedCategoryIndex(1)}
                    accessoryLeft={BmiIcon}
                    style={{ borderRadius: 20, backgroundColor: selectedCategoryIndex === 1 ? theme['color-primary-800'] : theme['color-primary-600'] }}
                ></Button>
                <AdaptiveText color={theme['color-primary-default']}>
                    BMI
                </AdaptiveText>
            </Layout>
            <Layout style={{ alignItems: 'center' }}>
                <Button
                    onPress={() => setSelectedCategoryIndex(2)}
                    accessoryLeft={BodyFatIcon}
                    style={{ borderRadius: 20, backgroundColor: selectedCategoryIndex === 2 ? theme['color-primary-800'] : theme['color-primary-600'] }}
                ></Button>
                <AdaptiveText color={theme['color-primary-default']}>
                    Fett
                </AdaptiveText>
            </Layout>
        </Layout>
    )
}

export default WeightBmiBodyFatSwitcher

const styles = StyleSheet.create({})
