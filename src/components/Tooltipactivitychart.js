import '../styles/Charts.css'

function Tooltipactivitychart({ active, payload }) {
    if (active && payload && payload.length) {
        const data = payload[0].payload;

        return (
            <div className='tooltip_activity_chart'>
                <div className='tooltip_content'>{data.kilogram}kg</div>
                <div className='tooltip_content'>{data.calories}Kcal</div>
            </div>
        )
    }
}

export default Tooltipactivitychart