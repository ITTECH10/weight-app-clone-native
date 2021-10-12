import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Layout, Text, Button, Icon } from '@ui-kitten/components'
import WeightCircumferenceSwitcher from '../../components/UI/HOME/WeightCircumferenceSwitcher'
// import AdaptiveText from './../../constants/components/AdaptiveText'

const SaveIcon = (props) => (
    <Icon {...props} name="content-save" pack="material-community" />
)

const CircumferencesScreen = () => {
    return (
        <Layout style={{ flex: 1 }}>
            <WeightCircumferenceSwitcher />
            <Layout>
                <Text category="h5" style={{ textAlign: 'center', marginVertical: 10 }}>
                    Person X
                </Text>
                <Layout>
                    <Layout style={{ width: 200, height: 435, zIndex: 10, position: 'absolute', left: '25%' }}>
                        <Image resizeMode="contain" style={{ height: '100%', width: '100%' }} source={require('./../../assets/images/body-male.jpg')} />
                    </Layout>
                    <Layout style={{ marginHorizontal: 10, marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: '22%', alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>Neck</Text>
                            <Text>12.3cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '22%', alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>Shoulder</Text>
                            <Text>76.3cm</Text>
                        </TouchableOpacity>
                    </Layout>
                    <Layout style={{ marginHorizontal: 10, marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: '22%', alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>Bust</Text>
                            <Text>12.3cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '22%', alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>Waist</Text>
                            <Text>76.3cm</Text>
                        </TouchableOpacity>
                    </Layout>
                    <Layout style={{ marginHorizontal: 10, marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: '22%', alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>Abdomen</Text>
                            <Text>12.3cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '22%', alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>Hip</Text>
                            <Text>76.3cm</Text>
                        </TouchableOpacity>
                    </Layout>
                    <Layout style={{ marginHorizontal: 10, marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: '22%', alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>Biceps (L)</Text>
                            <Text>12.3cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '22%', alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>Biceps (R)</Text>
                            <Text>76.3cm</Text>
                        </TouchableOpacity>
                    </Layout>
                    <Layout style={{ marginHorizontal: 10, marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: '22%', alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>Thigh (L)</Text>
                            <Text>12.3cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '22%', alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>Thigh (R)</Text>
                            <Text>76.3cm</Text>
                        </TouchableOpacity>
                    </Layout>
                    <Layout style={{ marginHorizontal: 10, marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: '22%', alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>Calf (L)</Text>
                            <Text>12.3cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '22%', alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>Calf (R)</Text>
                            <Text>76.3cm</Text>
                        </TouchableOpacity>
                    </Layout>
                    <Layout style={{ marginHorizontal: 10, marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: '45%', zIndex: 12, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>Waist-hip ratio</Text>
                            <Text>12.3cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '45%', zIndex: 12, alignItems: 'center', padding: 3, borderColor: '#eee', borderRadius: 5, borderWidth: 1 }}>
                            <Text>+</Text>
                            <Text>Selected body part</Text>
                        </TouchableOpacity>
                    </Layout>
                </Layout>
                <Layout>
                    <Button
                        style={{ marginHorizontal: 10 }}
                        status="primary"
                        size="large"
                        accessoryRight={SaveIcon}
                    >
                        Save
                    </Button>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default CircumferencesScreen

const styles = StyleSheet.create({})
