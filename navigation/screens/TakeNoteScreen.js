import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Icon, Text, Button, Input } from '@ui-kitten/components'
import axios from 'axios'
import { useAppContext } from '../../context/AppContext'

const TakeNoteIcon = (props) => (
    <Icon {...props} name="file-document-edit-outline" pack="material-community" />
)

const TakeNoteScreen = ({ navigation }) => {
    const { mostRecentRecording, setMostRecentRecording } = useAppContext()
    const { _id } = mostRecentRecording
    const [recordingNote, setRecordingNote] = React.useState('')

    const handleSubmit = () => {
        const data = {
            recordingNote
        }

        axios.put(`/users/recording/${_id}`, data)
            .then(res => {
                if (res.status === 200) {
                    setMostRecentRecording(res.data.recording)
                    navigation.goBack()
                }
            }).catch(err => {
                console.log(err.response)
            })
    }

    return (
        <Layout style={styles.screen}>
            <Layout level="2" style={styles.writingArea}>
                <Button
                    appearance="ghost"
                    size="medium"
                    accessoryLeft={TakeNoteIcon}
                />
                <Input
                    placeholder="Say something..."
                    style={{ width: '80%' }}
                    textAlignVertical="top"
                    multiline
                    numberOfLines={3}
                    onChangeText={setRecordingNote}
                />
            </Layout>
            <Button
                size="medium"
                style={styles.btn}
                onPress={handleSubmit}
                disabled={recordingNote === ''}
            >
                SAVE
            </Button>
        </Layout>
    )
}

export default TakeNoteScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    writingArea: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        minHeight: 100,
        paddingTop: 10
    },
    btn: {
        marginHorizontal: 10,
        marginVertical: 15
    }
})
