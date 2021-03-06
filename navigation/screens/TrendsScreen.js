import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { useAppContext } from "../../context/AppContext";
import TrendResultSwitcher from "../../components/UI/TRENDS/TrendResultSwitcher";
// import WeightCircumferenceSwitcher from "../../components/UI/HOME/WeightCircumferenceSwitcher";
import WeeklyChart from "../../components/UI/TRENDS/WEIGHT_CHARTS/WeeklyChart";
import MonthlyChart from "../../components/UI/TRENDS/WEIGHT_CHARTS/MonthlyChart";
// import YearlyChart from "../../components/UI/TRENDS/WEIGHT_CHARTS/YearlyChart";
import WeightBmiBodyFatSwitcher from "../../components/UI/TRENDS/WeightBmiBodyFatSwitcher";
import BodyPartMeasurementSwitcher from "../../components/UI/TRENDS/BodyPartMeasurementSwitcher";
import BmiWeeklyChart from "../../components/UI/TRENDS/BMI_CHARTS/BmiWeeklyChart";
import BmiMonthlyChart from "../../components/UI/TRENDS/BMI_CHARTS/BmiMontlyChart";
import BodyMassWeeklyChart from "../../components/UI/TRENDS/BODY_MASS_CHARTS/BodyMassWeeklyChart";
import BodyMassMonthlyChart from "../../components/UI/TRENDS/BODY_MASS_CHARTS/BodyMassMonthlyChart";

// BODY PARTS
import BodyPartWeeklyCharts from "../../components/UI/TRENDS/BODY_PARTS/BodyPartWeeklyCharts";
import BodyPartMonthlyCharts from "../../components/UI/TRENDS/BODY_PARTS/BodyPartMonthlyCharts";

import { bodyPartData } from './../../utils/DataProviders/data'

const TrendsScreen = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0)
    const [selectedBodyPartIndex, setSelectedBodyPartIndex] = React.useState(0)
    const [selectedMeasurementCategory, setSelectedMeasurementCategory] = React.useState(0)
    const {
        weeklyChartRecords,
        monthlyChartRecords,
        monthlyAverageBodyPartDimensions,
        weeklyBodyPartRecords
    } = useAppContext()

    const switchToBodyMeasurementsHandler = () => {
        if (selectedMeasurementCategory === 0) {
            setSelectedMeasurementCategory(1)
        }

        if (selectedMeasurementCategory === 1) {
            setSelectedMeasurementCategory(0)
        }
    }

    const charts = weeklyChartRecords.length >= 7 && selectedIndex === 0 && selectedCategoryIndex === 0 ? (
        <WeeklyChart />
    ) : monthlyChartRecords.length >= 5 && selectedIndex === 1 && selectedCategoryIndex === 0 ? (
        <MonthlyChart />
    ) : weeklyChartRecords.length >= 7 && selectedIndex === 0 && selectedCategoryIndex === 1 ? (
        <BmiWeeklyChart />
    ) : monthlyChartRecords.length >= 5 && selectedIndex === 1 && selectedCategoryIndex === 1 ? (
        <BmiMonthlyChart />
    ) : weeklyChartRecords.length >= 7 && selectedIndex === 0 && selectedCategoryIndex === 2 ? (
        <BodyMassWeeklyChart />
    ) : monthlyChartRecords.length >= 5 && selectedIndex === 1 && selectedCategoryIndex === 2 ? (
        <BodyMassMonthlyChart />
    ) : <Text category="s2" style={{ margin: 5 }}>Diagramme werden angezeigt, sobald gen??gend Daten vorhanden sind.</Text>

    const bodyMeasurementCharts = selectedIndex === 0 && weeklyBodyPartRecords.length >= 7 ? (
        <BodyPartWeeklyCharts
            title={bodyPartData[selectedBodyPartIndex].bodyPart}
            dataKey={bodyPartData[selectedBodyPartIndex].bodyPartKey}
        />
    ) : selectedIndex === 1 && monthlyAverageBodyPartDimensions.length >= 5 ? (
        <BodyPartMonthlyCharts
            title={bodyPartData[selectedBodyPartIndex].bodyPart}
            dataKey={bodyPartData[selectedBodyPartIndex].averageBodyPartKey}
        />
    ) : <Text category="s2" style={{ margin: 5 }}> Diagramme werden angezeigt, sobald gen??gend Daten vorhanden sind.</Text >

    return (
        <Layout style={{ flex: 1 }}>
            <TrendResultSwitcher
                navigation={navigation}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                switchToBodyMeasurementsHandler={switchToBodyMeasurementsHandler}
            />
            {selectedMeasurementCategory === 0 ? charts : bodyMeasurementCharts}
            {selectedMeasurementCategory === 0 ?
                <WeightBmiBodyFatSwitcher
                    selectedCategoryIndex={selectedCategoryIndex}
                    setSelectedCategoryIndex={setSelectedCategoryIndex}
                /> :
                <BodyPartMeasurementSwitcher
                    selectedBodyPartIndex={selectedBodyPartIndex}
                    setSelectedBodyPartIndex={setSelectedBodyPartIndex}
                />}
        </Layout>
    );
}

export default TrendsScreen