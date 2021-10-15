import { ThemesIcon, SetGoalIcon } from './../../components/UI/ICONS/icons'

class SettingsItemDataProvider {
    constructor() {
        this.data = [
            {
                icon: ThemesIcon,
                title: 'Themes',
                id: '1'
            },
            {
                icon: SetGoalIcon,
                title: 'Set Goal',
                id: '2'
            }
        ]
    }

    getData() {
        return this.data
    }
}

export default SettingsItemDataProvider