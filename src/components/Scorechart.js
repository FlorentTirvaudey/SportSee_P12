import { ResponsiveContainer, RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";

function Scorechart(props) {

    const data = [
        {
          name: 'Score',
        //   value: props.score * 100,
        value: 100,
          fill: '#E60000',
        },
      ];


      console.log("allez j'y crois dur comme fer", data)
    return (
        
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
                        dataKey="value"
                        cornerRadius={10}
                        />
                <text
                    x='50%'
                    y='50%'
                    textAnchor="middle"
                    className="progress-label"
                    style={{ fontSize: 24, fontWeight: 'bold' }}
                    >{props.score * 100}% <span>de votre objectif</span></text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Scorechart