import { useEffect, useState } from "react";
import { RadarChart, Radar, PolarAngleAxis, PolarGrid } from "recharts";

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
        <div>
            {loading && <div>Loading</div>}
            <div>
                {!loading && (
                    <div>
                        {userPerformanceData && (
                            <RadarChart width={300} height={300} cx="50%" cy="50%" outerRadius="80%" data={userPerformanceData} >
                                <PolarGrid />
                                <PolarAngleAxis dataKey="kind" />
                                <Radar name="A remplacer par le nom du gars" dataKey="value" stroke="#00000" fill="#000000" fillOpacity={1} />
                            </RadarChart>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Performancechart