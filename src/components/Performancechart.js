import { useEffect, useState } from "react";
import { RadarChart, Radar, PolarAngleAxis, PolarGrid, ResponsiveContainer, PolarRadiusAxis, Text } from "recharts";

import { createPerformanceFromFetchData, createPerformanceFromMockData } from "../service/api";

function Performancechart(props) {

    const [loading, setLoading] = useState(true);
    const [userPerformanceData, setUserPerformanceData] = useState([]);

    useEffect(() => {
        const fetchPerformanceData = async () => {
            setLoading(true);
            try {
            const response = await createPerformanceFromFetchData(props.userId)
            // const responseMock = await createPerformanceFromMockData(props.userId)

            setUserPerformanceData(response);
            } catch (error) {
            console.error(error.message);
            }
            setLoading(false)
        }

    fetchPerformanceData();
    }, [])

    function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
        return (
            <Text {...rest} verticalAnchor="middle" y={y + (y - cy) / 10} x={x + (x - cx) / 10} fill="white" >
                {payload.value}
            </Text>
        )
    }

    return (
        <>
            {loading && <div>Loading</div>}
            <>
                {!loading && (
                    <div className="bloc_chart" style={{
                        backgroundColor: "#282D30"
                    }}>
                        {userPerformanceData && (
                            <ResponsiveContainer width="100%" height={300}>
                                <RadarChart cx="50%" cy="50%" outerRadius="60%" data={userPerformanceData} >
                                    <PolarGrid gridType="polygon" radialLines={false} />
                                    <PolarAngleAxis dataKey="kind" tick={props => renderPolarAngleAxis(props)} />
                                    <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
                                    <Radar dataKey="value" margin="auto" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={1} />
                                </RadarChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                )}
            </>
        </>
    )
}

export default Performancechart