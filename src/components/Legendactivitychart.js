import '../styles/Charts.css'

function Legendactivitychart() {

    return(
        <div className="legend_block">
            <div className="legend_content">
                <div className="legend_color_kilogram"></div>
                <span>Poids (kg)</span>
            </div>
            <div className="legend_content">
                <div className="legend_color_calories"></div>
                <span>Calories brûlées (kCal)</span>
            </div>
        </div>
    )
}

export default Legendactivitychart