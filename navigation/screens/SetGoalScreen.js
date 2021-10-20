import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Button } from '@ui-kitten/components'
import ListSlider from 'react-native-list-slider';
import { useAppContext } from '../../context/AppContext';
import axios from 'axios'

const SetGoalScreen = ({ navigation }) => {
    const [selectedButton, setSelectedButton] = React.useState(0)
    const { logedCustomer, setLogedCustomer } = useAppContext()
    const { weightGoal, bodyFatGoal } = logedCustomer
    const [weightGoalValue, setWeightGoalValue] = React.useState(weightGoal ? weightGoal : 70)
    const [bodyFatGoalValue, setBodyFatGoalValue] = React.useState(bodyFatGoal ? bodyFatGoal : 15)

    const selectButtonHandler = (value) => {
        setSelectedButton(value)
    }

    const weightGoalValueHandler = (value) => {
        setWeightGoalValue(value)
    }

    const bodyFatGoalValueHandler = (value) => {
        setBodyFatGoalValue(value)
    }

    const handleSubmit = () => {
        const data = {
            weightGoal: weightGoalValue,
            bodyFatGoal: bodyFatGoalValue
        }

        axios.put('/users/goals', data)
            .then(res => {
                if (res.status === 200) {
                    setLogedCustomer(res.data.user)
                    navigation.goBack()
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const goalToRender = selectedButton === 0 ? (
        <Layout style={{ flex: 1 }}>
            <Text category="h5" style={{ textAlign: 'center', marginVertical: 20 }}>
                Weight
            </Text>
            <Text
                style={{ textAlign: 'center' }}
                category="h3"
            >
                {weightGoalValue}kg
            </Text>
            <ListSlider
                value={weightGoalValue}
                onValueChange={weightGoalValueHandler}
                maximumValue={440}
            />
        </Layout>
    ) : (
        <Layout style={{ flex: 1 }}>
            <Text category="h5" style={{ textAlign: 'center', marginVertical: 20 }}>
                Body fat
            </Text>
            <Text
                style={{ textAlign: 'center' }}
                category="h3"
            >
                {bodyFatGoalValue}%
            </Text>
            <ListSlider
                value={bodyFatGoalValue}
                onValueChange={bodyFatGoalValueHandler}
            />
        </Layout>
    )

    return (
        <Layout style={styles.screen}>
            <Layout style={styles.btnRow}>
                <Button
                    style={{ marginHorizontal: 10 }}
                    appearance={selectedButton === 0 ? 'filled' : 'ghost'}
                    onPress={() => selectButtonHandler(0)}
                >
                    Weight Goal
                </Button>
                <Button
                    appearance={selectedButton === 1 ? 'filled' : 'ghost'}
                    onPress={() => selectButtonHandler(1)}
                >
                    Body fat Goal
                </Button>
            </Layout>
            {goalToRender}
            <Button
                size="medium"
                style={{ marginHorizontal: 10, marginVertical: 15 }}
                onPress={handleSubmit}
            >
                RECORD
            </Button>
        </Layout >
    )
}

export default SetGoalScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    btnRow: {
        flexDirection: 'row',
        marginTop: 10
    }
})
