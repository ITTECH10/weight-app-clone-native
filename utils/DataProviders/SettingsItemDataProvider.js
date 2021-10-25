import { SetGoalIcon, DeleteIcon } from './../../components/UI/ICONS/icons'

class SettingsItemDataProvider {
    constructor() {
        this.data = [
            {
                icon: SetGoalIcon,
                title: 'Ziel setzen',
                screenName: 'SetGoal',
                id: '1'
            },
            {
                icon: DeleteIcon,
                title: 'Konto Loschen',
                screenName: 'DeleteProfile',
                id: '2'
            }
        ]
    }

    getData() {
        return this.data
    }
}

export default SettingsItemDataProvider