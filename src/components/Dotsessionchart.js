import '../styles/Charts.css'

function Dotsessionchart (props) {
    const { cx, cy } = props;
    return (
        <svg>
            <circle cx={cx} cy={cy} r={10} fill="white" opacity={0.1} />
            <circle cx={cx} cy={cy} r={5} fill="white" opacity={1} />
        </svg>
    )
}

export default Dotsessionchart