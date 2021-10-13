import React from "react";
import { Layout, useTheme } from "@ui-kitten/components";
import { Chart, Line, Area, VerticalAxis, Tooltip } from 'react-native-responsive-linechart'

const TrendsScreen = () => {
    const theme = useTheme()

    return (
        <Layout style={{ flex: 1, justifyContent: 'center' }}>
            <Chart
                style={{ height: 300, width: '100%' }}
                data={[
                    { x: 0, y: 65 },
                    { x: 4, y: 64 },
                    { x: 6, y: 66 },
                    { x: 8, y: 68.3 },
                    { x: 10, y: 69 }
                ]}
                padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                xDomain={{ min: 0, max: 10 }}
                yDomain={{ min: 60, max: 70 }}
            >
                <VerticalAxis tickCount={10} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
                <Area theme={{ gradient: { from: { color: theme['color-primary-default'] }, to: { color: theme['color-primary-default'], opacity: 0.2 } } }} />
                <Line
                    tooltipComponent={<Tooltip />}
                    theme={{ stroke: { color: theme['color-primary-600'], width: 5 }, scatter: { default: { width: 8, height: 8, rx: 4, color: theme['color-primary-700'] }, selected: { color: 'red' } } }}
                />
            </Chart>
        </Layout>
    );
}

export default TrendsScreen