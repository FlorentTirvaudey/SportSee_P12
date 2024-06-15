import '../styles/Stats.css'

function Stats (props) {
    return (
        <div className='aside_stats_block'>
            <div>Test</div>
            <div className='aside_datas'>
                {props.details === "Calories" ? (
                    <span className='aside_stats_datas'>{props.data}kCal</span>
                ) : (
                    <span className='aside_stats_datas'>{props.data}g</span>
                )}
                <span>{props.details}</span>
            </div>
        </div>
    )
}

export default Stats