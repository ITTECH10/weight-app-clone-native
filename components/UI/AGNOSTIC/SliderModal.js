import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Modal, useTheme, Calendar, Button } from '@ui-kitten/components'
import AdaptiveText from './../../../constants/components/AdaptiveText'
import ListSlider from 'react-native-list-slider';

const data = [
    'Hals',
    'Schulter',
    'Büste',
    'Taille',
    'Abdomen',
    'Hüfte',
    'Bizeps (L)',
    'Bizeps (R)',
    'Schenkel (L)',
    'Schenkel (R)',
    'Kalb (L)',
    'Kalb (R)'
]

const SliderModal = ({ bodyParts, setBodyParts, selectedBodyPart, setModalVisible, selectedBodyPartIndex, date, setDate }) => {
    const [sliderValue, setSliderValue] = React.useState(30)
    const theme = useTheme()

    console.log(date)

    const saveSelectedBodyPartHandler = () => {
        setBodyParts({
            ...bodyParts,
            [selectedBodyPart]: sliderValue
        })
        setModalVisible(false)
        setSliderValue(30)
    }

    return (
        <Layout>
            <Layout style={{ height: '100%' }}>
                <Text category="h5" style={{ textAlign: 'center', marginVertical: 20 }}>
                    {data[selectedBodyPartIndex]}
                </Text>
                <AdaptiveText
                    style={{ textAlign: 'center' }}
                    category="h3"
                    color={theme['color-primary-default']}
                >
                    {sliderValue}cm
                </AdaptiveText>
                <ListSlider
                    value={sliderValue}
                    onValueChange={(value) => setSliderValue(value)}
                />
                <Calendar
                    date={date}
                    onSelect={nextDate => setDate(new Date(nextDate))}
                    style={{ width: '100%', borderTopWidth: 0 }}
                />
                <Button
                    onPress={saveSelectedBodyPartHandler}
                    style={{ margin: 10 }} size="medium">
                    CONFIRM
                </Button>
            </Layout>
        </Layout>
    )
}

export default SliderModal

const styles = StyleSheet.create({

})
