import { useEffect, useState } from "react";
import { Line, LineChart, Tooltip, XAxis } from "recharts";

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
                    <div style={{
                        backgroundColor: "#FF0000"
                    }}>
                        {userSessionData && ( // ajouter responsive container pour gérer la height et width du graph dans la div
                            <LineChart width={300} height={300} data={userSessionData} >
                                <XAxis dataKey="day" tickLine="false" />
                                <Tooltip />
                                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} activeDot={{ r: 8 }} />
                            </LineChart>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sessionchart