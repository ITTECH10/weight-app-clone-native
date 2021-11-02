import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Layout, Text, Button, Icon, useTheme } from '@ui-kitten/components'
import WeightCircumferenceSwitcher from '../../components/UI/HOME/WeightCircumferenceSwitcher'
import { useAppContext } from '../../context/AppContext'
import SliderModal from '../../components/UI/AGNOSTIC/SliderModal'
import AdaptiveModal from '../../constants/components/AdaptiveModal'
import axios from 'axios'

const SaveIcon = (props) => (
    <Icon {...props} name="content-save" pack="material-community" />
)

const CircumferencesScreen = ({ navigation }) => {
    const theme = useTheme()
    const { logedCustomer, weeklyBodyPartRecords, setWeeklyBodyPartRecords, customerBodyPartRecordings, setCustomerBodyPartRecordings, getAverageMonthlyBodyPartDimensions } = useAppContext()
    const { gender, fullName } = logedCustomer
    const [selectedBodyPart, setSelectedBodyPart] = React.useState()
    const [selectedBodyPartIndex, setSelectedBodyPartIndex] = React.useState()
    const [modalVisible, setModalVisible] = React.useState(false)
    const [date, setDate] = React.useState(new Date())

    const formatedDate = String(date).split(' ').slice(0, 5).join(' ')

    // React.useEffect(() => {
    //     const dateInterval = setInterval(() => {
    //         setDate(new Date(new Date().getTime()))
    //     }, 1000)

    //     return () => {
    //         clearInterval(dateInterval)
    //     }
    // }, [date])

    const [bodyParts, setBodyParts] = React.useState({
        neck: 0,
        shoulder: 0,
        bust: 0,
        waist: 0,
        abdomen: 0,
        hip: 0,
        leftBiceps: 0,
        rightBiceps: 0,
        leftThigh: 0,
        rightThigh: 0,
        leftCalf: 0,
        rightCalf: 0
    })

    const { neck, shoulder, bust, waist, abdomen, hip, leftBiceps, rightBiceps, leftThigh, rightThigh, leftCalf, rightCalf } = bodyParts

    const handleModalOpening = (bodyPart, bodyPartIndex) => {
        setSelectedBodyPart(bodyPart)
        setSelectedBodyPartIndex(bodyPartIndex)
        setModalVisible(true)
    }

    const handleSubmit = () => {
        const data = { ...bodyParts, recordingDate: date }

        axios.post('/users/circumferences', data)
            .then(res => {
                if (res.status === 201) {
                    getAverageMonthlyBodyPartDimensions()

                    setCustomerBodyPartRecordings([
                        ...customerBodyPartRecordings,
                        res.data.circumference
                    ])

                    setWeeklyBodyPartRecords([
                        ...weeklyBodyPartRecords,
                        res.data.circumference
                    ])

                    navigation.goBack()
                }
            }).catch(err => {
                console.log(err.response)
            })
    }

    return (
        <Layout style={{ flex: 1 }}>
            <WeightCircumferenceSwitcher />
            <Layout style={{ marginHorizontal: 10 }}>
                <Text category="h5" style={{ textAlign: 'center', marginVertical: 10 }}>
                    {fullName}
                </Text>
                <Layout>
                    <Layout style={{ width: 200, height: 400, zIndex: 10, position: 'absolute', left: '25%' }}>
                        {gender === 'herr' ?
                            <Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={require('./../../assets/images/body-male.jpg')} />
                            : <Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={require('./../../assets/images/body-female.png')} />}
                    </Layout>
                    <Layout style={{ marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            style={{ width: '24%', backgroundColor: neck !== 0 ? theme['color-primary-default'] : null, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}
                            onPress={() => handleModalOpening('neck', 0)}
                        >
                            <Text style={{ color: neck !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">Hals</Text>
                            <Text style={{ color: neck !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">{neck}cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: '24%', backgroundColor: shoulder !== 0 ? theme['color-primary-default'] : null, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}
                            onPress={() => handleModalOpening('shoulder', 1)}
                        >
                            <Text style={{ color: shoulder !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">Schulter</Text>
                            <Text style={{ color: shoulder !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">{shoulder}cm</Text>
                        </TouchableOpacity>
                    </Layout>
                    <Layout style={{ marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            style={{ width: '24%', backgroundColor: bust !== 0 ? theme['color-primary-default'] : null, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}
                            onPress={() => handleModalOpening('bust', 2)}
                        >
                            <Text style={{ color: bust !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">Büste</Text>
                            <Text style={{ color: bust !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">{bust}cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: '24%', backgroundColor: waist !== 0 ? theme['color-primary-default'] : null, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}
                            onPress={() => handleModalOpening('waist', 3)}
                        >
                            <Text style={{ color: waist !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">Taille</Text>
                            <Text style={{ color: waist !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">{waist}cm</Text>
                        </TouchableOpacity>
                    </Layout>
                    <Layout style={{ marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            style={{ width: '24%', backgroundColor: abdomen !== 0 ? theme['color-primary-default'] : null, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}
                            onPress={() => handleModalOpening('abdomen', 4)}
                        >
                            <Text style={{ color: abdomen !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">Abdomen</Text>
                            <Text style={{ color: abdomen !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">{abdomen}cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: '24%', backgroundColor: hip !== 0 ? theme['color-primary-default'] : null, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}
                            onPress={() => handleModalOpening('hip', 5)}
                        >
                            <Text style={{ color: hip !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">Hüfte</Text>
                            <Text style={{ color: hip !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">{hip}cm</Text>
                        </TouchableOpacity>
                    </Layout>
                    <Layout style={{ marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            style={{ width: '24%', backgroundColor: leftBiceps !== 0 ? theme['color-primary-default'] : null, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}
                            onPress={() => handleModalOpening('leftBiceps', 6)}
                        >
                            <Text style={{ color: leftBiceps !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">Bizeps (L)</Text>
                            <Text style={{ color: leftBiceps !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">{leftBiceps}cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: '24%', backgroundColor: rightBiceps !== 0 ? theme['color-primary-default'] : null, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}
                            onPress={() => handleModalOpening('rightBiceps', 7)}
                        >
                            <Text style={{ color: rightBiceps !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">Bizeps (R)</Text>
                            <Text style={{ color: rightBiceps !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">{rightBiceps}cm</Text>
                        </TouchableOpacity>
                    </Layout>
                    <Layout style={{ marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            style={{ width: '24%', backgroundColor: leftThigh !== 0 ? theme['color-primary-default'] : null, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}
                            onPress={() => handleModalOpening('leftThigh', 8)}
                        >
                            <Text style={{ color: leftThigh !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">Schenkel (L)</Text>
                            <Text style={{ color: leftThigh !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">{leftThigh}cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: '24%', backgroundColor: rightThigh !== 0 ? theme['color-primary-default'] : null, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}
                            onPress={() => handleModalOpening('rightThigh', 9)}
                        >
                            <Text style={{ color: rightThigh !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">Schenkel (R)</Text>
                            <Text style={{ color: rightThigh !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">{rightThigh}cm</Text>
                        </TouchableOpacity>
                    </Layout>
                    <Layout style={{ marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            style={{ width: '24%', backgroundColor: leftCalf !== 0 ? theme['color-primary-default'] : null, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}
                            onPress={() => handleModalOpening('leftCalf', 10)}
                        >
                            <Text style={{ color: leftCalf !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">Kalb (L)</Text>
                            <Text style={{ color: leftCalf !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">{leftCalf}cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ width: '24%', backgroundColor: rightCalf !== 0 ? theme['color-primary-default'] : null, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}
                            onPress={() => handleModalOpening('rightCalf', 11)}
                        >
                            <Text style={{ color: rightCalf !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">Kalb (R)</Text>
                            <Text style={{ color: rightCalf !== 0 ? theme['color-basic-100'] : theme['color-basic-1100'] }} category="s2">{rightCalf}cm</Text>
                        </TouchableOpacity>
                    </Layout>
                    <Layout style={{ marginBottom: 22 }}>
                        <TouchableOpacity style={{ width: '100%', zIndex: 12, alignItems: 'center', paddingVertical: 10, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text category="s2">Datum</Text>
                            <Text category="s2" style={{ fontFamily: 'roboto-bold' }}>{formatedDate}</Text>
                        </TouchableOpacity>
                    </Layout>
                </Layout>
                <Layout>
                    <Button
                        status="primary"
                        size="large"
                        accessoryRight={SaveIcon}
                        disabled={Object.values(bodyParts).some(el => el === 0)}
                        onPress={handleSubmit}
                    >
                        Save
                    </Button>
                </Layout>
            </Layout>
            <AdaptiveModal
                visible={modalVisible}
                setVisible={setModalVisible}
                style={{ width: '100%', height: '80%', position: 'absolute', top: '20%' }}
            >
                <SliderModal
                    selectedBodyPartIndex={selectedBodyPartIndex}
                    bodyParts={bodyParts}
                    selectedBodyPart={selectedBodyPart}
                    setBodyParts={setBodyParts}
                    setModalVisible={setModalVisible}
                    date={date}
                    setDate={setDate}
                />
            </AdaptiveModal>
        </Layout >
    )
}

export default CircumferencesScreen

const styles = StyleSheet.create({

})
