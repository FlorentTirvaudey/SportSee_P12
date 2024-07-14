import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

import '../styles/Charts.css'

import Customcursor from "./Customcursor";

import { createSessionFromFetchData, createSessionFromMockData } from "../service/api";
import Tooltipsessionchart from "./Tooltipsessionchart.js";
import Dotsessionchart from "./Dotsessionchart.js";

function Sessionchart(props) {

    const [loading, setLoading] = useState(true);
    const [userSessionData, setUserSessionData] = useState([]);


    const modifySessionData = (data) => {
        if (data.length > 0) {
            const firstElement = data[0];
            const lastElement = data[data.length - 1];
            return [firstElement, ...data, lastElement];
        }
        return data;
    }

    const addDayLabels = (data) => {
        const days = ['L', 'L', 'M', 'M', 'J', 'V', 'S', 'D', 'D'];
        return data.map((item, index) => ({
            ...item,
            day: days[index % days.length]  // Modulo pour éviter les dépassements d'index
        }));
    };

    useEffect(() => {
        const fetchSessionData = async () => {
            setLoading(true);
            try {
                const response = await createSessionFromFetchData(props.userId)
                // const responseMock = await createSessionFromMockData(props.userId)

                const datasModify = modifySessionData(response)
                const modififyWithDayLabels = addDayLabels(datasModify)
                setUserSessionData(modififyWithDayLabels);
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
                        backgroundColor: "#FF0000",
                        overflow: "hidden"
                    }}>
                        <span>Durée moyenne des sessions</span>
                        {userSessionData && (
                            <ResponsiveContainer width="120%" height="100%" style={{position: "absolute", left: "-30px", top: 0, bottom: 0, overflow: "hidden"}}>
                                <LineChart margin={{ top: 100, left: 0, right: 0, bottom: 25 }} data={userSessionData}  >
                                    <XAxis dataKey="day" tickLine={false} tickMargin={18} axisLine={false} tick={{fill: 'white', opacity: '0.7'}}/>
                                    <Tooltip cursor={<Customcursor />} content={Tooltipsessionchart}/>
                                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeOpacity={0.6} strokeWidth={3} dot={false} activeDot={<Dotsessionchart />} style={{ margin: "100px"}}/>
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