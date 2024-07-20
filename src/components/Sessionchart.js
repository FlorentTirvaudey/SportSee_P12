import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

import '../styles/Charts.css'

import Customcursor from "./Customcursor";

import Tooltipsessionchart from "./Tooltipsessionchart.js";
import Dotsessionchart from "./Dotsessionchart.js";

function Sessionchart(props) {

    return (
        <>
            <div className="bloc_chart" style={{
                backgroundColor: "#FF0000",
                overflow: "hidden"
            }}>
                <span>Durée moyenne des sessions</span>
                {props.userSessionData && (
                    <ResponsiveContainer width="120%" height="100%" style={{position: "absolute", left: "-30px", top: 0, bottom: 0, overflow: "hidden"}}>
                        <LineChart margin={{ top: 100, left: 0, right: 0, bottom: 25 }} data={props.userSessionData}  >
                            <XAxis dataKey="day" tickLine={false} tickMargin={18} axisLine={false} tick={{fill: 'white', opacity: '0.7'}}/>
                            <Tooltip cursor={<Customcursor />} content={Tooltipsessionchart}/>
                            <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeOpacity={0.6} strokeWidth={3} dot={false} activeDot={<Dotsessionchart />} style={{ margin: "100px"}}/>
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </div>
        </>
    )
}

export default Sessionchart