import React from 'react'
import { Layout, Button, Icon, Text, useTheme } from '@ui-kitten/components';
import PrimaryColorView from './../../constants/components/PrimaryColorView'
import { View, Image } from 'react-native';
import AdaptiveText from './../../constants/components/AdaptiveText'

const NotificationsBellIcon = (props) => (
    <Icon {...props} name="bell-outline" pack="material-community" />
)

const EditIcon = (props) => (
    <Icon {...props} name="playlist-edit" pack="material-community" />
)

const FaqIcon = (props) => (
    <Icon {...props} name="comment-question-outline" pack="material-community" />
)

const HelpIcon = (props) => (
    <Icon {...props} name="file-document-edit-outline" pack="material-community" />
)

const AddMemberIcon = (props) => (
    <Icon {...props} name="account-plus-outline" pack="material-community" />
)

const SettingsIcon = (props) => (
    <Icon {...props} name="cog-outline" pack="material-community" />
)

const MyProfileScreen = () => {
    const theme = useTheme()

    return (
        <Layout style={{ flex: 1 }}>
            <PrimaryColorView style={{ height: '22%' }}>
                <View style={{ alignItems: 'flex-end', marginRight: -5 }}>
                    <Button
                        size="large"
                        accessoryLeft={NotificationsBellIcon}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 }}>
                    <View style={{ height: 70, width: 70 }}>
                        <Image
                            source={require('./../../assets/images/male-avatar.jpg')}
                            style={{ height: '100%', width: '100%', borderRadius: 140 }} />
                    </View>
                    <View style={{ marginLeft: 20, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AdaptiveText category="h5" style={{ fontFamily: 'roboto-bold' }}>
                                Person X
                            </AdaptiveText>
                            <Button style={{ marginLeft: 5 }} size="medium" accessoryRight={EditIcon}>
                                Edit
                            </Button>
                        </View>
                        <View>
                            <AdaptiveText category="s2">
                                personX@test.com
                            </AdaptiveText>
                        </View>
                    </View>
                </View>
            </PrimaryColorView>

            <Layout style={{ flexDirection: 'row', justifyContent: 'space-evenly', borderBottomColor: '#eee', borderBottomWidth: 2, paddingBottom: 15 }}>
                <Layout style={{ alignItems: 'center' }}>
                    <Button
                        accessoryRight={FaqIcon}
                        appearance="ghost"
                        size="large"
                    />
                    <Text category="s2">
                        FAQ
                    </Text>
                </Layout>
                <Layout style={{ alignItems: 'center' }}>
                    <Button
                        accessoryRight={HelpIcon}
                        appearance="ghost"
                        size="large"
                    />
                    <Text category="s2">
                        Help
                    </Text>
                </Layout>
                <Layout style={{ alignItems: 'center' }}>
                    <Button
                        accessoryRight={AddMemberIcon}
                        appearance="ghost"
                        size="large"
                    />
                    <Text category="s2">
                        Add a member
                    </Text>
                </Layout>
                <Layout style={{ alignItems: 'center' }}>
                    <Button
                        accessoryRight={SettingsIcon}
                        appearance="ghost"
                        size="large"
                    />
                    <Text category="s2">
                        Settings
                    </Text>
                </Layout>
            </Layout>

            <Layout style={{ marginTop: 7 }}>
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                    <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Layout style={{ height: 50, width: 50 }}>
                            <Image style={{ height: '100%', width: '100%', borderRadius: 100 }} source={require('./../../assets/images/male-avatar.jpg')} />
                        </Layout>
                        <Layout style={{ marginLeft: 5 }}>
                            <Text>
                                Person X
                            </Text>
                            <Text category="label" style={{ color: theme['color-basic-500'] }}>
                                Oct 8, 2021
                            </Text>
                        </Layout>
                    </Layout>
                    <Layout style={{ alignItems: 'center' }}>
                        <AdaptiveText
                            style={{ marginBottom: 3, fontFamily: 'roboto-bold' }}
                            color={theme['color-primary-default']}
                            category="h6"
                        >
                            71.3kg
                        </AdaptiveText>
                        <Button size="tiny">Primary User</Button>
                    </Layout>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default MyProfileScreen