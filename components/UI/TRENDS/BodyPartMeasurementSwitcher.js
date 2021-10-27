import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Layout, Button, useTheme } from '@ui-kitten/components'
import { bodyPartButtonsData } from '../../../utils/DataProviders/data'

const BodyFatMeasurementSwitcher = ({ selectedBodyPartIndex, setSelectedBodyPartIndex }) => {
    const theme = useTheme()

    return (
        <Layout style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
            <ScrollView horizontal contentContainerStyle={{ paddingVertical: 10 }}>
                {bodyPartButtonsData.map(bodyPart => (
                    <Button
                        key={bodyPart.id}
                        onPress={() => setSelectedBodyPartIndex(bodyPart.id)}
                        style={{ borderRadius: 0, marginRight: 8, backgroundColor: selectedBodyPartIndex === bodyPart.id ? theme['color-primary-700'] : theme['color-primary-default'] }}
                    >
                        {bodyPart.bodyPart}
                    </Button>
                ))}
            </ScrollView>
        </Layout>
    )
}

export default BodyFatMeasurementSwitcher

const styles = StyleSheet.create({})
