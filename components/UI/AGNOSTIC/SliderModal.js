import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, useTheme, Calendar, Button } from '@ui-kitten/components'
import AdaptiveText from './../../../constants/components/AdaptiveText'
import ListSlider from 'react-native-list-slider';
import { bodyPartData } from './../../../utils/DataProviders/data'

const SliderModal = ({ bodyParts, setBodyParts, selectedBodyPart, setFormatedDate, setModalVisible, selectedBodyPartIndex, date, setDate }) => {
    const [sliderValue, setSliderValue] = React.useState(30)
    const theme = useTheme()

    const saveSelectedBodyPartHandler = () => {
        setBodyParts({
            ...bodyParts,
            [selectedBodyPart]: sliderValue
        })
        setModalVisible(false)
        setSliderValue(30)
    }

    const dateChangeHandler = (nextDate) => {
        setDate(new Date(nextDate))
        setFormatedDate(String(new Date(nextDate)).split(' ').slice(0, 5).join(' '))
    }

    return (
        <Layout>
            <Layout style={{ height: '100%' }}>
                <Text category="h5" style={{ textAlign: 'center', marginVertical: 20 }}>
                    {bodyPartData[selectedBodyPartIndex].bodyPart}
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
                    onSelect={dateChangeHandler}
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
