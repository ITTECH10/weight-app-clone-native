import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Button, Icon, Text } from '@ui-kitten/components'
import WeightBmiBodyFatSwitcher from '../../components/UI/TRENDS/WeightBmiBodyFatSwitcher'
import WeightHistory from '../../components/UI/TRENDS/HISTORY/WEIGHT/WeightHistory'
import BMIHistory from '../../components/UI/TRENDS/HISTORY/BMI/BMIHistory'
import BodyFatHistory from '../../components/UI/TRENDS/HISTORY/BODY_MASS/BodyFatHistory'
import { useAppContext } from '../../context/AppContext'
import HistoryItem from '../../components/UI/TRENDS/HISTORY/HistoryItem'
import Pagination from '../../utils/Pagination/Pagination'
import BodyPartMeasurementSwitcher from '../../components/UI/TRENDS/BodyPartMeasurementSwitcher'
import BodyPartHistory from '../../components/UI/TRENDS/HISTORY/BODY_PARTS/BodyPartHistory'
import BodyPartHistoryItem from '../../components/UI/TRENDS/HISTORY/BodyPartHistoryItem'

const BodyMeasureIcon = (props) => (
    <Icon {...props}
        name="human-male-height"
        pack="material-community"
        style={[props.style, { width: 20, height: 20 }]}
    />
)

const data = [
    {
        title: 'Hals',
        dataKey: 'neck'
    },
    {
        title: 'Schulter',
        dataKey: 'shoulder'
    },
    {
        title: 'Büste',
        dataKey: 'bust'
    },
    {
        title: 'Taille',
        dataKey: 'waist'
    },
    {
        title: 'Abdomen',
        dataKey: 'abdomen'
    },
    {
        title: 'Hüfte',
        dataKey: 'hip'
    },
    {
        title: 'Bizeps (L)',
        dataKey: 'leftBiceps'
    },
    {
        title: 'Bizeps (R)',
        dataKey: 'rightBizeps'
    },
    {
        title: 'Schenkel (L)',
        dataKey: 'leftThigh'
    },
    {
        title: 'Schenkel (R)',
        dataKey: 'rightThigh'
    },
    {
        title: 'Kalb (L)',
        dataKey: 'leftCalf'
    },
    {
        title: 'Kalb (R)',
        dataKey: 'rightCalf'
    }
]

const HistoryScreen = ({ navigation }) => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0)
    const [selectedMeasurementIndex, setSelectedMeasurementIndex] = React.useState(0)
    const [selectedBodyPartIndex, setSelectedBodyPartIndex] = React.useState(0)

    const { customerRecordings, customerBodyPartRecordings } = useAppContext()

    const switchMeasurementHandler = () => {
        if (selectedMeasurementIndex === 0) {
            setSelectedMeasurementIndex(1)
        }

        if (selectedMeasurementIndex === 1) {
            setSelectedMeasurementIndex(0)
        }
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    accessoryRight={BodyMeasureIcon}
                    appearance="outline"
                    size="tiny"
                    style={{ marginRight: 10 }}
                    onPress={switchMeasurementHandler}
                />
            )
        })
    }, [selectedMeasurementIndex])

    const mainMeasurement = selectedCategoryIndex === 0 ? (
        <WeightHistory />
    ) : selectedCategoryIndex === 1 ? (
        <BMIHistory />
    ) : selectedCategoryIndex === 2 ? (
        <BodyFatHistory />
    ) : null

    const bodyPartMeasurement = (
        <BodyPartHistory
            title={data[selectedBodyPartIndex].title}
        />
    )

    const bodyPartMeasurementPagination = (
        <Pagination
            data={customerBodyPartRecordings.slice(1, customerBodyPartRecordings.length)}
            RenderComponent={BodyPartHistoryItem}
            pageLimit={5}
            dataLimit={10}
            selectedBodyPart={data[selectedBodyPartIndex].dataKey}
        />
    )

    const mainMeasurementPagination = (
        <Pagination
            data={customerRecordings.slice(1, customerRecordings.length)}
            RenderComponent={HistoryItem}
            pageLimit={5}
            dataLimit={10}
            selectedCategoryIndex={selectedCategoryIndex}
        />
    )

    return (
        <Layout style={{ flex: 1, }}>
            {selectedMeasurementIndex === 0 ? mainMeasurement : bodyPartMeasurement}
            {selectedMeasurementIndex === 0 ? mainMeasurementPagination : bodyPartMeasurementPagination}
            {selectedMeasurementIndex === 0 ? (
                <WeightBmiBodyFatSwitcher
                    selectedCategoryIndex={selectedCategoryIndex}
                    setSelectedCategoryIndex={setSelectedCategoryIndex}
                />
            ) : (
                <BodyPartMeasurementSwitcher
                    selectedBodyPartIndex={selectedBodyPartIndex}
                    setSelectedBodyPartIndex={setSelectedBodyPartIndex}
                />
            )}

        </Layout>
    )
}

export default HistoryScreen

const styles = StyleSheet.create({})
