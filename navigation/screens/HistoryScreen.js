import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout } from '@ui-kitten/components'
import WeightBmiBodyFatSwitcher from '../../components/UI/TRENDS/WeightBmiBodyFatSwitcher'
import WeightHistory from '../../components/UI/TRENDS/HISTORY/WEIGHT/WeightHistory'
import BMIHistory from '../../components/UI/TRENDS/HISTORY/BMI/BMIHistory'
import BodyFatHistory from '../../components/UI/TRENDS/HISTORY/BODY_MASS/BodyFatHistory'
import { useAppContext } from '../../context/AppContext'
import HistoryItem from '../../components/UI/TRENDS/HISTORY/HistoryItem'
import Pagination from '../../utils/Pagination/Pagination'

const HistoryScreen = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0)
    const { customerRecordings } = useAppContext()

    const content = selectedCategoryIndex === 0 ? (
        <WeightHistory
            customerRecordings={customerRecordings}
        />
    ) : selectedCategoryIndex === 1 ? (
        <BMIHistory
            customerRecordings={customerRecordings}
        />
    ) : selectedCategoryIndex === 2 ? (
        <BodyFatHistory
            customerRecordings={customerRecordings}
        />
    ) : null

    return (
        <Layout style={{ flex: 1, }}>
            {content}
            <Pagination
                data={customerRecordings.slice(1, customerRecordings.length)}
                RenderComponent={HistoryItem}
                pageLimit={5}
                dataLimit={10}
                selectedCategoryIndex={selectedCategoryIndex}
            />
            <WeightBmiBodyFatSwitcher
                selectedCategoryIndex={selectedCategoryIndex}
                setSelectedCategoryIndex={setSelectedCategoryIndex}
            />
        </Layout>
    )
}

export default HistoryScreen

const styles = StyleSheet.create({})
