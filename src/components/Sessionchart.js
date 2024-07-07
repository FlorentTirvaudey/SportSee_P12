import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, Area } from "recharts";

import '../styles/Charts.css'

import Customcursor from "./Customcursor";

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
            console.log("ahahahahahh Datas from mock", response)
            } catch (error) {
            console.error(error.message);
            }
            setLoading(false)
        }

    fetchSessionData();
    }, [])

    return (
        <>
            {loading && <div>Loading</div>}
            <>
                {!loading && (
                    <div className="bloc_chart" style={{
                        backgroundColor: "#FF0000"
                    }}>
                        <span>Durée moyenne des sessions</span>
                        {userSessionData && (
                            <ResponsiveContainer width="100%" height={150} style={{position: "absolute", bottom: 30}}>
                                <LineChart data={userSessionData}  >
                                    <XAxis dataKey="day" tickLine={false} tickMargin={18} axisLine={false} tick={{fill: 'white', opacity: '0.7'}}/>
                                    <Tooltip cursor={false} content={Customcursor} />
                                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeOpacity={0.6} strokeWidth={3} activeDot={{ r: 10, opacity: 0.2 }} />
                                    <Area />
                                </LineChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                )}
            </>
        </>
    )
}

export default Sessionchart