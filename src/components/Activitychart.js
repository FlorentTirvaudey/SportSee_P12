import { useEffect, useState } from "react";
import { BarChart, Bar } from "recharts";

import { createActivityFromMockData } from "../service/api";

function Activitychart(props) {

    const [loading, setLoading] = useState(true);
    const [userActivityData, setUserActivityData] = useState([]);

    useEffect(() => {
        const fetchActivityData = async () => {
            setLoading(true);
            try {
            const response = await createActivityFromMockData(props.userId)
            setUserActivityData(response);
            // console.log("activityData from mock", response)
            } catch (error) {
            console.error(error.message);
            }
            setLoading(false)
        }

    fetchActivityData();
    }, [])

    return (
        <div>
            {loading && <div>Loading</div>}
            <div>
                {!loading && (
                    <div>
                        {userActivityData && (
                            <BarChart width={1000} height={200} data={userActivityData} barGap={1}>
                                <Bar dataKey="kilogram" radius={[20, 20, 0, 0]} maxBarSize={10} fill="#282D30" />
                                <Bar dataKey="calories" radius={[20, 20, 0, 0]} maxBarSize={10} fill="#E60000" />
                            </BarChart>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Activitychart