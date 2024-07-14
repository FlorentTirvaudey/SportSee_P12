import '../styles/Charts.css'

function Tooltipsessionchart ({ active, payload }) {
    if (active && payload && payload.length) {
        const data = payload[0].payload;

        return (
            <div className='container_tooltip_session'>
                {data.sessionLength}min
            </div>
        )
    }
}

export default Tooltipsessionchart