import { useEffect, useState } from "react";
import { Line, LineChart } from "recharts";

import { createSessionFromMockData } from "../service/api";

function Sessionchart(props) {

    const [loading, setLoading] = useState(true);
    const [userSessionData, setUserSessionData] = useState([]);

    useEffect(() => {
        const fetchSessionData = async () => {
            setLoading(true);
            try {
            const response = await createSessionFromMockData(props.userId)
            setUserSessionData(response);
            // console.log("session Datas from mock", response)
            } catch (error) {
            console.error(error.message);
            }
            setLoading(false)
        }

    fetchSessionData();
    }, [])

    return (
        <div>
            {loading && <div>Loading</div>}
            <div>
                {!loading && (
                    <div>
                        {userSessionData && (
                            <LineChart width={300} height={300} data={userSessionData} >
                                <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sessionchart