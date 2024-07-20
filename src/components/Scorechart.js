import { useEffect, useState } from "react";
import { ResponsiveContainer, RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";

function Scorechart(props) {

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 1500)
    // }, []);

    const data = [
        {
          name: 'Score',
          value: props.score * 100,
          fill: '#E60000',
        },
      ];

    return (
        <>
            <div className="bloc_chart" style={{
                backgroundColor: "#FBFBFB"
            }}>
                <div className="score_title">Score</div>
                <ResponsiveContainer width="100%" height={250} style={{position: "absolute", bottom: 20}}>
                    <RadialBarChart
                        width={300}
                        height={300}
                        innerRadius={110}
                        outerRadius={140}
                        barSize={15}
                        data={data}
                        startAngle={180}
                        endAngle={-180}
                    >
                        <PolarAngleAxis type="number" domain={[0, 100]} dataKey={'pct'} angleAxisId={0} tick={false} fill="#FBFBFB" />
                            <RadialBar
                                data={[{ value: 100 }]}
                                dataKey="value"
                                cornerRadius={10}
                                fill="#FFF"
                                isAnimationActive={false}
                            />
                            <RadialBar
                            dataKey="value"
                            cornerRadius={10}
                            />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className="score_label">
                    <p className="bold_label">{props.score * 100}%</p>
                    <p>de votre objectif</p>
                </div>
            </div>
        </>
    )
}

export default Scorechart