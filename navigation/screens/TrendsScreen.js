import React from "react";
import { Layout } from "@ui-kitten/components";
import TrendResultSwitcher from "../../components/UI/TRENDS/TrendResultSwitcher";
import WeeklyChart from "../../components/UI/TRENDS/WeeklyChart";
import MonthlyChart from "../../components/UI/TRENDS/MonthlyChart";
import YearlyChart from "../../components/UI/TRENDS/YearlyChart";

const TrendsScreen = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const charts = selectedIndex === 0 ? (
        <WeeklyChart />
    ) : selectedIndex === 1 ? (
        <MonthlyChart />
    ) : selectedIndex === 2 ? (
        <YearlyChart />
    ) : null

    return (
        <Layout style={{ flex: 1 }}>
            <TrendResultSwitcher
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />
            {charts}
        </Layout>
    );
}

export default TrendsScreen