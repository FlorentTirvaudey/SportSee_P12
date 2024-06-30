import '../styles/Stats.css'

import Icone from './Icone'

function Stats (props) {
    return (
        <div className='aside_stats_block'>
            <div className='icons_stats'>
                <Icone img={props.icon} background={props.background} />
            </div>
            <div className='aside_datas'>
                {props.details === "Calories" ? (
                    <span className='aside_stats_datas'>{props.data}kCal</span>
                ) : (
                    <span className='aside_stats_datas'>{props.data}g</span>
                )}
                <span className='aside_datas_details'>{props.details}</span>
            </div>
        </div>
    )
}

export default Stats