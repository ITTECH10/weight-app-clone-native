import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Button } from '@ui-kitten/components'
import { RightArrowIcon } from '../ICONS/icons'

const SettingsScreenItem = ({ title, icon }) => {
    return (
        <Layout style={styles.itemContainer}>
            <Layout style={styles.itemContainerFirstFlex}>
                <Button
                    appearance="ghost"
                    accessoryLeft={icon}
                    status="basic"
                    size="tiny"
                />
                <Text
                    category="h6"
                    style={styles.itemContainerTitle}
                >{title}
                </Text>
            </Layout>
            <Layout>
                <Button
                    appearance="ghost"
                    accessoryRight={RightArrowIcon}
                    status="basic"
                />
            </Layout>
        </Layout>
    )
}

export const renderSettingsScreenItem = ({ item }) => (
    <SettingsScreenItem title={item.title} icon={item.icon} />
);

export default SettingsScreenItem

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        marginVertical: 8
    },
    itemContainerFirstFlex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemContainerTitle: {
        marginBottom: 2
    }
})