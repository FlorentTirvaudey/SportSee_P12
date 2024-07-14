import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

import { createActivityFromFetchData, createActivityFromMockData } from "../service/api";

import Legendactivitychart from "./Legendactivitychart";
import Tooltipactivitychart from "./Tooltipactivitychart";

function Activitychart(props) {

    const [loading, setLoading] = useState(true);
    const [userActivityData, setUserActivityData] = useState([]);

    useEffect(() => {
        const fetchActivityData = async () => {
            setLoading(true);
            try {
            const response = await createActivityFromFetchData(props.userId)
            // const responseMock = await createActivityFromMockData(props.userId)

            const dataWithIndices = response.map((data, index) => ({ ...data, index: index + 1}));
            setUserActivityData(dataWithIndices);
            } catch (error) {
            console.error(error.message);
            }
            setLoading(false)
        }

    fetchActivityData();
    }, [])

    return (
        <>
            {loading && <div>Loading</div>}
            <>
                {!loading && (
                    <div style={{
                        position: "relative",
                        height: "300px",
                        backgroundColor: "#FBFBFB",
                        padding: "20px"
                    }}>
                        <div className="header_activity_chart">
                            <div className="title_chart_activity">Activité quotidienne</div>
                            <Legendactivitychart />
                        </div>
                        {userActivityData && (
                            <ResponsiveContainer width="100%" height={250} style={{position: "absolute", bottom: 0}}>
                                <BarChart data={userActivityData} barGap={10}>
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                    <XAxis dataKey="index" tickLine={false} tickMargin={15} axisLine={{strokeOpacity: 0.7}}/>
                                    <YAxis
                                        yAxisId="left"
                                        orientation={"left"}
                                        hide={true}
                                    />
                                    <YAxis
                                        yAxisId="right"
                                        orientation={"right"}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <Tooltip content={Tooltipactivitychart} cursor={{ fill: 'rgba(0, 0, 0, 0.1' }} />
                                    <Bar dataKey="kilogram" yAxisId="right" radius={[20, 20, 0, 0]} maxBarSize={10} barSize={10} fill="#282D30" />
                                    <Bar dataKey="calories" yAxisId="left" radius={[20, 20, 0, 0]} maxBarSize={10} barSize={10} fill="#E60000" />
                                </BarChart>
                                </ResponsiveContainer>
                        )}
                    </div>
                )}
            </>
        </>
    )
}

export default Activitychart