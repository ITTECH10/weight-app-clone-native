import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import TrendResultSwitcher from "../../components/UI/TRENDS/TrendResultSwitcher";
import WeeklyChart from "../../components/UI/TRENDS/WEIGHT_CHARTS/WeeklyChart";
import MonthlyChart from "../../components/UI/TRENDS/WEIGHT_CHARTS/MonthlyChart";
// import YearlyChart from "../../components/UI/TRENDS/WEIGHT_CHARTS/YearlyChart";
import WeightBmiBodyFatSwitcher from "../../components/UI/TRENDS/WeightBmiBodyFatSwitcher";
import BmiWeeklyChart from "../../components/UI/TRENDS/BMI_CHARTS/BmiWeeklyChart";
import BmiMonthlyChart from "../../components/UI/TRENDS/BMI_CHARTS/BmiMontlyChart";
import BodyMassWeeklyChart from "../../components/UI/TRENDS/BODY_MASS_CHARTS/BodyMassWeeklyChart";
import BodyMassMonthlyChart from "../../components/UI/TRENDS/BODY_MASS_CHARTS/BodyMassMonthlyChart";
import { useAppContext } from "../../context/AppContext";

const TrendsScreen = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0)
    const { weeklyChartRecords, monthlyChartRecords, getCustomerRecordings } = useAppContext()

    // React.useEffect(() => {
    //     getCustomerRecordings()
    // }, [])

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
    ) : <Text category="s2" style={{ margin: 5 }}>Diagramme werden angezeigt, sobald genügend Daten vorhanden sind.</Text>

    return (
        <Layout style={{ flex: 1 }}>
            <TrendResultSwitcher
                navigation={navigation}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />
            {charts}
            <WeightBmiBodyFatSwitcher
                selectedCategoryIndex={selectedCategoryIndex}
                setSelectedCategoryIndex={setSelectedCategoryIndex}
            />
        </Layout>
    );
}

export default TrendsScreen