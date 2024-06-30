import { useState } from "react";
import { ResponsiveContainer, RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";

function Scorechart(props) {

    const [dataScore, setDataScore] = useState([
        {
            name: "",
            score: 0,
            max: 100,
          },
    ]);
    const [userScore, setUserScore] = useState();

    const formatScore = () => {
        setUserScore(props.score * 100);
    } // à modifier parce que crash appli

    const buildTabDatas = () => {
        setDataScore([
            {
                name: props.name,
                score: userScore 
            }
        ])
    } // à modifier parce que crash appli (faire ce state dans App et passer l'objet en props pour voir)

    return (
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="100%" outerRadius="80%" barSize={10} data={dataScore}>
                    <PolarAngleAxis type="number" domain={[0, 100]} dataKey={'pct'} angleAxisId={0} tick={false} />
                        <RadialBar
                        label={{ fill: '#fff' }}
                        dataKey="uv"
                        cornerRadius={10}
                        />
                </RadialBarChart>
            </ResponsiveContainer>
    )
}

export default Scorechart