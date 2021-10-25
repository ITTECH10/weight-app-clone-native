import React from 'react'
import { StyleSheet } from 'react-native'
import { MenuItem, OverflowMenu, Icon, useTheme, Button } from '@ui-kitten/components'
import AdaptiveText from '../../../constants/components/AdaptiveText'
import { useNavigation } from '@react-navigation/native'

const ManualInputIcon = (props) => (
    <Icon {...props} name="gesture-tap" pack="material-community" />
)

const ShareIcon = (props) => (
    <Icon {...props} name="share-variant" pack="material-community" />
)

const MenuButton = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const [visible, setVisible] = React.useState(false);
    const theme = useTheme()
    const navigation = useNavigation()

    const onItemSelect = (index) => {
        setSelectedIndex(index);
        setVisible(false);
    };

    const renderToggleButton = () => (
        <Button status="basic" style={styles.plusBtn} onPress={() => setVisible(true)}>
            <AdaptiveText color={theme['color-primary-default']}>
                +
            </AdaptiveText>
        </Button>
    );

    return (
        <OverflowMenu
            anchor={renderToggleButton}
            visible={visible}
            selectedIndex={selectedIndex}
            backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}
            onSelect={onItemSelect}
            onBackdropPress={() => setVisible(false)}>
            <MenuItem
                title='Manuelle Eingabe'
                accessoryRight={ManualInputIcon}
                onPress={() => navigation.navigate('RecordWeight')}
            />
            <MenuItem title='Teilen' accessoryRight={ShareIcon} />
        </OverflowMenu>
    );
};


export default MenuButton

const styles = StyleSheet.create({
    plusBtn: {
        position: 'absolute',
        right: 35,
        borderColor: '#fff',
        borderWidth: .8
    }
})
