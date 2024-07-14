import { useEffect, useState } from "react";
import { RadarChart, Radar, PolarAngleAxis, PolarGrid, ResponsiveContainer, PolarRadiusAxis } from "recharts";

import { createPerformanceFromMockData } from "../service/api";

function Performancechart(props) {

    const [loading, setLoading] = useState(true);
    const [userPerformanceData, setUserPerformanceData] = useState([]);

    useEffect(() => {
        const fetchPerformanceData = async () => {
            setLoading(true);
            try {
            const response = await createPerformanceFromMockData(props.userId)
            setUserPerformanceData(response);
            console.log("session Datas from mock", response)
            } catch (error) {
            console.error(error.message);
            }
            setLoading(false)
        }

    fetchPerformanceData();
    }, [])

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
                                    <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15 }} />
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