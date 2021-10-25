import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Layout, Button, Text, Icon, Input } from '@ui-kitten/components'
import { useAppContext } from '../../context/AppContext'
import axios from 'axios'

const MaleIcon = (props) => (
    <Icon {...props} style={[props.style, { width: 40, height: 40 }]} name="human-male" pack="material-community" />
)

const FemaleIcon = (props) => (
    <Icon {...props} style={[props.style, { width: 40, height: 40 }]} name="human-female" pack="material-community" />
)

const PersonIcon = (props) => (
    <Icon {...props} style={[props.style, { width: 25, height: 25 }]} name="account" pack="material-community" />
)

const EmailIcon = (props) => (
    <Icon {...props} style={[props.style, { width: 25, height: 25 }]} name="email" pack="material-community" />
)

const EditProfileScreen = ({ navigation }) => {
    const { logedCustomer, setLogedCustomer } = useAppContext()
    const { gender, firstName, lastName, email } = logedCustomer
    const [selectedGender, setSelectedGender] = React.useState(gender)
    const [fields, setFields] = React.useState({
        firstName: '',
        lastName: ''
    })

    const handleChange = (name) => (value) => {
        setFields({ ...fields, [name]: value });
    };

    const handleSubmit = () => {
        const data = { ...fields, gender: selectedGender }

        axios.put('/users/me/edit', data)
            .then(res => {
                if (res.status === 200) {
                    setLogedCustomer({
                        ...res.data.user,
                        fullName: `${res.data.user.firstName} ${res.data.user.lastName}`
                    })
                    navigation.goBack()
                }
            }).catch(err => {
                console.log(err.response)
            })
    }

    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={styles.contentContainer}>
                <Layout style={styles.imageBox}>
                    {gender === 'herr' ?
                        <Image
                            style={styles.profileBlankImage}
                            source={require('./../../assets/images/male-avatar.jpg')}
                            resizeMode="contain"
                        /> :
                        <Image
                            style={styles.profileBlankImage}
                            source={require('./../../assets/images/female-avatar.jpg')}
                            resizeMode="contain"
                        />}
                </Layout>
                <Layout style={styles.genderRow}>
                    <TouchableOpacity
                        style={styles.genderColumn}
                    >
                        <Button
                            accessoryRight={MaleIcon}
                            appearance={selectedGender === 'herr' ? 'outline' : 'ghost'}
                            onPress={() => setSelectedGender('herr')}
                        />
                        <Text category="s2">
                            Herr
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.genderColumn}
                    >
                        <Button
                            accessoryRight={FemaleIcon}
                            appearance={selectedGender === 'frau' ? 'outline' : 'ghost'}
                            onPress={() => setSelectedGender('frau')}
                        />
                        <Text category="s2">
                            Frau
                        </Text>
                    </TouchableOpacity>
                </Layout>

                <Layout style={styles.inputContainer}>
                    <Input
                        accessoryLeft={PersonIcon}
                        placeholder={firstName}
                        style={styles.input}
                        onChangeText={handleChange('firstName')}
                    />
                    <Input
                        accessoryLeft={PersonIcon}
                        placeholder={lastName}
                        style={styles.input}
                        onChangeText={handleChange('lastName')}
                    />
                    <Input
                        accessoryLeft={EmailIcon}
                        placeholder={email}
                        style={styles.input}
                        disabled
                    />
                </Layout>
                <Button
                    size="medium"
                    style={{ width: '80%' }}
                    disabled={Object.values(fields).some(el => el === '')}
                    onPress={handleSubmit}
                >SAVE</Button>
            </Layout>
        </Layout>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    contentContainer: {
        marginVertical: 10,
        alignItems: 'center'
    },
    imageBox: {
        alignItems: 'center',
        height: 70,
        width: '100%',
        marginVertical: 10
    },
    profileBlankImage: {
        height: '100%',
        width: '100%'
    },
    genderRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    genderColumn: {
        alignItems: 'center',
        marginHorizontal: 80
    },
    inputContainer: {
        marginTop: 20,
        width: '80%'
    },
    input: {
        marginBottom: 10
    }
})
