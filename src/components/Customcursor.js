import { Rectangle } from 'recharts'
import '../styles/Charts.css'

function Customcursor(props) {
    const { points, width, height } = props;
    const { x } = points[0];
    return (
        <Rectangle fill='black' stroke='black' opacity={0.1} x={x} y={0} width={width} height={height + 300} style={{ position: 'absolute', top: 0, overflow: 'hidden' }}  />
    )
}

export default Customcursor