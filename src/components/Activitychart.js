import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

import { createActivityFromMockData } from "../service/api";

import Legendactivitychart from "./Legendactivitychart";
import Tooltipactivitychart from "./Tooltipactivitychart";

function Activitychart(props) {

    const [loading, setLoading] = useState(true);
    const [userActivityData, setUserActivityData] = useState([]);

    useEffect(() => {
        const fetchActivityData = async () => {
            setLoading(true);
            try {
            const response = await createActivityFromMockData(props.userId)

            const dataWithIndices = response.map((data, index) => ({ ...data, index: index + 1}));
            setUserActivityData(dataWithIndices);
            console.log("activityData from mock", response)
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
                                        orientation={"right"}
                                        tickLine={false}
                                        axisLine={false}
                                        domain={[0, 'dataMax + 10']}  
                                    />
                                    {/* <YAxis dataKey="kilogram" /> */}
                                    {/* <YAxis /> */}
                                    <Tooltip content={Tooltipactivitychart} />
                                    <Bar dataKey="kilogram" radius={[20, 20, 0, 0]} maxBarSize={10} barSize={10} fill="#282D30" />
                                    <Bar dataKey="calories" radius={[20, 20, 0, 0]} maxBarSize={10} barSize={10} fill="#E60000" />
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